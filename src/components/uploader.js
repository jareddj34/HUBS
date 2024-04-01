import { UploadButton } from "@bytescale/upload-widget-react";

// Full Configuration:
// https://www.bytescale.com/docs/upload-widget#configuration
const options = {
    apiKey: "free", // Get API keys from: www.bytescale.com
    maxFileCount: 10,
};

const Uploader = () => (
    <UploadButton
        options={options}
        onComplete={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
    >
        {({ onClick }) => <button onClick={onClick}>Upload a file...</button>}
    </UploadButton>
);
