import { getXataClient } from "@/xata";
import FolderForm from "./FolderForm";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import FileUpload from "./FileUpload";
import Image from "next/image";

const schema = z.object({
    name: z.string().min(1),
});

export default async function Dashboard() {
    const { userId } = auth();
    const xataClient = getXataClient();
    if (!userId) {
        redirect("/");
    }
    const folders = await xataClient.db.folders
        .filter({
            userId,
        })
        .getMany();

    async function createFolder(formData: FormData) {
        "use server";
        const parsedForm = schema.parse({ name: formData.get("name") });

        if (!userId) {
            return;
        }
        const newRecord = { ...parsedForm, userId };
        const xataClient = getXataClient();
        await xataClient.db.folders.create(newRecord);
        revalidatePath("/");
    }

    const files = await xataClient.db.files.getMany();
    async function createFile(formData: FormData) {
        "use server";
        const parsedFile = schema.parse({ name: formData.get("name") });

        const newRecord = { ...parsedFile };
        const xataClient = getXataClient();
        await xataClient.db.files.create(newRecord);
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold mb-5">Dashboard</h1>
                <FolderForm handleCreateFolder={createFolder} />
                <div className="mb-10">
                    {folders.map((folder) => (
                        <p key={folder.id}>{folder.name}</p>
                    ))}
                </div>
                <FileUpload handleCreateFile={createFile} />
                <div>
                    {files.map((file) => (
                        <p key={file.id}>{file.id}</p>
                    ))}
                </div>
                <Image
                    src={
                        "https://us-east-1.storage.xata.sh/ilu8an8obp6lb3fef3s42ccf9k"
                    }
                    alt="file"
                    width={500}
                    height={500}
                />
            </div>
        </>
    );
}
