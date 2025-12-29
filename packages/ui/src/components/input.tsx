import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export function Input({
  label,
  error,
  helperText,
  className = "",
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}
          {props.required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className={`w-full rounded-lg border px-4 py-2 text-gray-900 transition-colors
          ${error ? "border-red-500 focus:border-red-600 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"}
          focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed
          ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  rows?: number;
}

export function Textarea({
  label,
  error,
  helperText,
  className = "",
  id,
  rows = 4,
  ...props
}: TextareaProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}
          {props.required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <textarea
        id={inputId}
        rows={rows}
        className={`w-full rounded-lg border px-4 py-2 text-gray-900 transition-colors
          ${error ? "border-red-500 focus:border-red-600 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"}
          focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed resize-vertical
          ${className}`}
        {...(props as any)}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}
