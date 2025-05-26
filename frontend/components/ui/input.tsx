import * as React from "react";

export function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`rounded px-3 py-2 bg-[#232733] border border-gray-700 focus:ring-2 focus:ring-green-400 text-white ${className}`} {...props} />;
}
