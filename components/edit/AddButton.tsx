"use client";
import { LuPlus } from "react-icons/lu";
import { useEditMode, useEditModeActions, type EditorTarget } from "@/store/editModeSlice";

interface AddButtonProps {
  target: EditorTarget;
  label: string;
  className?: string;
}

const AddButton = ({ target, label, className }: AddButtonProps) => {
  const isEditing = useEditMode((s) => s.isEditing);
  const { openEditor } = useEditModeActions();
  if (!isEditing) return null;

  return (
    <button
      type="button"
      onClick={() => openEditor(target)}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-dashed border-pink-400/50 text-pink-200 hover:bg-pink-400/10 text-xs font-medium ${className ?? ""}`}
    >
      <LuPlus className="w-3.5 h-3.5" />
      {label}
    </button>
  );
};

export default AddButton;
