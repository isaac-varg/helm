"use client";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  errors?: readonly unknown[];
  textarea?: boolean;
  placeholder?: string;
  type?: string;
}

const TextField = ({ label, value, onChange, onBlur, errors, textarea, placeholder, type }: TextFieldProps) => {
  const errMsgs = (errors ?? [])
    .map((e) => (typeof e === "string" ? e : (e as { message?: string } | null | undefined)?.message))
    .filter((m): m is string => Boolean(m));
  return (
    <div className="space-y-1">
      <label className="block text-xs text-white/60">{label}</label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={3}
          className="w-full px-2 py-1.5 rounded bg-white/5 border border-white/10 text-white text-sm"
        />
      ) : (
        <input
          type={type ?? "text"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          className="w-full px-2 py-1.5 rounded bg-white/5 border border-white/10 text-white text-sm"
        />
      )}
      {errMsgs.length > 0 && <p className="text-xs text-red-400">{errMsgs[0]}</p>}
    </div>
  );
};

export default TextField;
