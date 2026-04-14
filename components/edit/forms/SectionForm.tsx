"use client";
import { useForm } from "@tanstack/react-form";
import { sectionSchema } from "@/lib/schemas";
import { upsertSection, deleteSection } from "@/app/actions/dashboard";
import type { SectionData } from "@/lib/types";
import TextField from "../fields/TextField";
import IconPicker from "../fields/IconPicker";

interface SectionFormProps {
  section: SectionData | null;
  tabId: number;
  onDone: () => void;
}

const SectionForm = ({ section, tabId, onDone }: SectionFormProps) => {
  const form = useForm({
    defaultValues: {
      tabId: section?.tabId ?? tabId,
      title: section?.title ?? "",
      icon: section?.icon ?? "LuBookmark",
      order: section?.order ?? 0,
    },
    validators: { onChange: sectionSchema },
    onSubmit: async ({ value }) => {
      await upsertSection(value, section?.id);
      onDone();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="space-y-4"
    >
      <form.Field name="title">
        {(f) => (
          <TextField
            label="Title"
            value={f.state.value}
            onChange={f.handleChange}
            onBlur={f.handleBlur}
            errors={f.state.meta.errors}
          />
        )}
      </form.Field>
      <form.Field name="icon">
        {(f) => <IconPicker label="Icon" value={f.state.value} onChange={f.handleChange} />}
      </form.Field>

      <div className="flex gap-2">
        <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting] as const}>
          {([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit}
              className="flex-1 px-4 py-2 rounded-lg bg-pink-500 hover:bg-pink-400 text-white font-medium disabled:opacity-50"
            >
              {isSubmitting ? "Saving…" : "Save"}
            </button>
          )}
        </form.Subscribe>
        {section && (
          <button
            type="button"
            onClick={async () => {
              if (confirm("Delete this section and all its links?")) {
                await deleteSection(section.id);
                onDone();
              }
            }}
            className="px-4 py-2 rounded-lg bg-red-500/80 hover:bg-red-500 text-white font-medium"
          >
            Delete
          </button>
        )}
      </div>
    </form>
  );
};

export default SectionForm;
