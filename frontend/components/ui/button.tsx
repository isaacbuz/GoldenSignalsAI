import * as React from "react";

export function Button({ className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`rounded px-4 py-2 font-semibold transition focus:outline-none ${className}`} {...props} />;
}
