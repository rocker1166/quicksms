"use client";
import { Button } from "@nextui-org/button";
import { useState } from "react";

export default function ClipboardCopy({ copyText }: { copyText: string }) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex gap-16">
      <input
        className="text-black font-bold font-serif rounded-md bg-slate-200"
        title="sms link"
        type="text"
        value={copyText}
        readOnly
      />
      <Button
        className="bg-green-300 border border-red-50 rounded-lg"
        onClick={handleCopyClick}
      >
        <span>{isCopied ? "Copied!" : "Copy"}</span>
      </Button>
    </div>
  );
}