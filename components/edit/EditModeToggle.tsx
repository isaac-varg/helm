"use client";
import { LuPencil, LuCheck } from "react-icons/lu";
import { useEditMode, useEditModeActions } from "@/store/editModeSlice";

const EditModeToggle = () => {
  const isEditing = useEditMode((s) => s.isEditing);
  const { toggleEdit } = useEditModeActions();

  return (
    <button
      type="button"
      onClick={toggleEdit}
      className="fixed top-6 right-6 z-30 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border border-white/20 shadow-2xl text-white text-sm font-medium transition-colors"
      style={{
        background: isEditing ? "rgba(236,72,153,0.35)" : "rgba(255,255,255,0.1)",
      }}
    >
      {isEditing ? <LuCheck className="w-4 h-4" /> : <LuPencil className="w-4 h-4" />}
      {isEditing ? "Done" : "Edit"}
    </button>
  );
};

export default EditModeToggle;
