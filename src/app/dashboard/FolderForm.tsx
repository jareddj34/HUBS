"use client";

import { getXataClient } from "@/xata";
import { revalidatePath } from "next/cache";
import { useRef } from "react";
import { z } from "zod";

export default function FolderForm({
    handleCreateFolder,
}: {
    handleCreateFolder: (formData: FormData) => void;
}) {
    const ref = useRef<HTMLFormElement>(null);
    return (
        <form
            action={(formData) => {
                handleCreateFolder(formData);
                ref.current?.reset();
            }}
            ref={ref}
        >
            <div className="grow">
                <label htmlFor="name" aria-label="New Folder">
                    New Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="my folder"
                />
            </div>
            <button type="submit">Create</button>
        </form>
    );
}
