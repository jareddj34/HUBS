import { UploadButton, UploadDropzone } from "@bytescale/upload-widget-react";
import { auth } from "@clerk/nextjs";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";

const options = {
    apiKey: "free", // Get API keys from: www.bytescale.com
    maxFileCount: 10,
};

export default function Home() {
    const { userId } = auth();
    console.log(userId);
    if (userId) {
        redirect("/dashboard");
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold mb-5">Welcome to HUBS!</h1>
                <p>All your favorite shit in a virtual hub.</p>
            </div>

            <p>hi</p>
        </>
    );
}
