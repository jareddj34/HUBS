"use client";

import { UploadButton, UploadDropzone } from "@bytescale/upload-widget-react";

const options = {
    apiKey: "free", // Get API keys from: www.bytescale.com
    maxFileCount: 10,
};

export default function FileUpload({
    handelCreateFile,
}: {
    handelCreateFile: (formData: FormData) => void;
}) {
    return (
        <>
            <UploadDropzone
                options={options}
                onUpdate={({ uploadedFiles }) => {
                    console.log(uploadedFiles.map((x) => x.fileUrl).join("\n"));
                }}
                width="600px"
                height="375px"
            />
        </>
    );
}
