"use client";
import { useState, useMemo, createElement } from "react";
import { iconNames, resolveIcon } from "@/lib/iconMap";

interface IconPickerProps {
  label?: string;
  value: string;
  onChange: (name: string) => void;
}

const IconPicker = ({ label, value, onChange }: IconPickerProps) => {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return iconNames.filter((n) => n.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="space-y-2">
      {label && <label className="block text-xs text-white/60">{label}</label>}
      <div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10">
        {createElement(resolveIcon(value), { className: "w-5 h-5 text-white" })}
        <input
          type="text"
          placeholder="Search icons…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent text-white text-sm outline-none"
        />
        <span className="text-xs text-white/40 font-mono">{value}</span>
      </div>
      <div className="grid grid-cols-8 gap-1 max-h-48 overflow-y-auto p-1 rounded bg-white/5 border border-white/10">
        {filtered.map((name) => {
          const active = name === value;
          return (
            <button
              key={name}
              type="button"
              onClick={() => onChange(name)}
              title={name}
              className={`flex items-center justify-center p-2 rounded transition-colors ${
                active ? "bg-pink-500 text-white" : "text-white/70 hover:bg-white/10"
              }`}
            >
              {createElement(resolveIcon(name), { className: "w-4 h-4" })}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default IconPicker;
