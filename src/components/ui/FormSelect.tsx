"use client";

import { useState, useRef, useEffect, useId, useCallback } from "react";
import { ChevronDown, Check } from "lucide-react";

type FormSelectProps = {
  id: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: readonly string[];
  placeholder: string;
  required?: boolean;
  theme?: "light" | "dark";
  compact?: boolean;
};

export default function FormSelect({
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  theme = "light",
  compact = false,
}: Readonly<FormSelectProps>) {
  const isLight = theme === "light";
  const hasValue = value.length > 0;
  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  const emitChange = useCallback(
    (next: string) => {
      onChange({
        target: { name, value: next },
      } as React.ChangeEvent<HTMLSelectElement>);
    },
    [name, onChange]
  );

  const close = useCallback(() => {
    setOpen(false);
    setHighlightIndex(-1);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) close();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const selectOption = (option: string) => {
    emitChange(option);
    close();
    triggerRef.current?.focus();
  };

  const onTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" && open && highlightIndex >= 0) {
      e.preventDefault();
      selectOption(options[highlightIndex]);
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setHighlightIndex(value ? Math.max(options.indexOf(value), 0) : 0);
      } else if (e.key === " ") {
        close();
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setHighlightIndex(0);
      } else {
        setHighlightIndex((i) => Math.min(i + 1, options.length - 1));
      }
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!open) {
        setOpen(true);
        setHighlightIndex(options.length - 1);
      } else {
        setHighlightIndex((i) => Math.max(i - 1, 0));
      }
      return;
    }
  };

  const onListKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && highlightIndex >= 0) {
      e.preventDefault();
      selectOption(options[highlightIndex]);
    } else if (e.key === "Home") {
      e.preventDefault();
      setHighlightIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setHighlightIndex(options.length - 1);
    }
  };

  return (
    <div
      ref={wrapRef}
      className={`form-select-wrap ${open ? "form-select-wrap-open" : ""} ${
        isLight ? "form-select-wrap-light" : "form-select-wrap-dark"
      }`}
    >
      <input type="hidden" name={name} value={value} required={required} tabIndex={-1} aria-hidden />

      <button
        ref={triggerRef}
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => {
          setOpen((prev) => !prev);
          if (!open) setHighlightIndex(value ? options.indexOf(value) : 0);
        }}
        onKeyDown={onTriggerKeyDown}
        className={`form-select-trigger ${compact ? "form-select-compact" : ""} ${
          !hasValue ? "form-select-placeholder" : ""
        }`}
      >
        <span className="form-select-trigger-label">{hasValue ? value : placeholder}</span>
      </button>

      <span className="form-select-chevron" aria-hidden>
        <ChevronDown size={16} strokeWidth={1.75} />
      </span>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-labelledby={id}
          tabIndex={-1}
          onKeyDown={onListKeyDown}
          className="form-select-dropdown"
        >
          {options.map((option, index) => {
            const selected = option === value;
            const highlighted = index === highlightIndex;
            return (
              <li key={option} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  className={`form-select-option ${
                    selected ? "form-select-option-selected" : ""
                  } ${highlighted ? "form-select-option-highlight" : ""}`}
                  onMouseEnter={() => setHighlightIndex(index)}
                  onClick={() => selectOption(option)}
                >
                  <span>{option}</span>
                  {selected && (
                    <Check className="form-select-option-check" size={16} strokeWidth={2} aria-hidden />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
