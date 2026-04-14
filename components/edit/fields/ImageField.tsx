"use client";
import { useState, useRef } from "react";
import { LuUpload } from "react-icons/lu";

interface ImageFieldProps {
  label?: string;
  value: string;
  onChange: (v: string) => void;
}

const ImageField = ({ label, value, onChange }: ImageFieldProps) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const upload = async (file: File) => {
    setUploading(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Upload failed");
      onChange(data.url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      {label && <label className="block text-xs text-white/60">{label}</label>}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://… or /uploads/…"
          className="flex-1 px-2 py-1.5 rounded bg-white/5 border border-white/10 text-white text-sm"
        />
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex items-center gap-1 px-3 py-1.5 rounded bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 disabled:opacity-50"
        >
          <LuUpload className="w-4 h-4" />
          {uploading ? "…" : "Upload"}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) upload(f);
          }}
        />
      </div>
      {value && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt="" className="max-h-24 rounded border border-white/10" />
      )}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
};

export default ImageField;
