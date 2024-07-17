"use client"
import { Button } from "@nextui-org/button";
import { useState } from "react";
 export default function ClipboardCopy({ copyText }) {
    const [isCopied, setIsCopied] = useState(false);
  
    // This is the function we wrote earlier
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
  
    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(copyText)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    return (
      <div className=" flex gap-16 ">
        <input className=" text-black font-bold font-serif rounded-md bg-slate-200" title="sms link" type="text" value={copyText} readOnly />
        {/* Bind our handler function to the onClick button property */}
        <Button className=" bg-green-300 border border-red-50  rounded-lg" onClick={handleCopyClick}>
          <span>{isCopied ? 'Copied!' : 'Copy'}</span>
        </Button>
      </div>
    );
  }