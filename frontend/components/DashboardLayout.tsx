import React from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#12141b] text-white font-sans flex flex-col">
      <header className="px-8 py-5 border-b border-gray-800 flex justify-between items-center bg-[#181c23] shadow">
        <h1 className="text-3xl font-extrabold text-green-400 tracking-tight">GoldenSignalsAI</h1>
        <nav className="space-x-6 text-gray-300 text-lg">
          <a href="/dashboard" className="hover:text-white transition">Dashboard</a>
          <a href="/logs" className="hover:text-white transition">Logs</a>
          <a href="/analytics" className="hover:text-white transition">Analytics</a>
          <a href="/settings" className="hover:text-white transition">Settings</a>
        </nav>
      </header>
      <main className="flex-1 px-12 py-10 bg-[#12141b] overflow-auto">{children}</main>
    </div>
  );
}
