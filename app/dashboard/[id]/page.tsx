"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import Footer from "@/components/footer";
import Inbox from "@/components/Inbox";
import Nav1 from "@/components/navbar/navbar";
function page({ params }: { params: { id: string } }, copyText:any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isCopied, setIsCopied] = useState(false);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text:any) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
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
  };

  let b = params.id;
  copyText = `http://localhost:3000/sms/${b}`;
  return (
    <>
      <nav>
        <Nav1 />
      </nav>
      <div className=" my-20 ">
        <div className=" justify-center grid  gap-6   overflow-hidden  p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50s   ">
       
       
          <img
            src="https://as1.ftcdn.net/v2/jpg/05/29/71/50/1000_F_529715063_RiB20Skm9T4qYoltG6VHkgLenfnP09Jl.jpg"
            alt="jordans"
            height="400"
            width="350"
            className="object-contain"
          />
          <div className="  flex gap-16 ">
            <input
              className=" text-black font-bold font-serif rounded-md bg-slate-200"
              title="sms link"
              type="text"
              value={copyText}
              readOnly
            />
            {/* Bind our handler function to the onClick button property */}

            <Button
              className=" bg-green-300 border border-red-50  rounded-lg"
              onClick={handleCopyClick}
            >
              <span>{isCopied ? "Copied!" : "Copy"}</span>
            </Button>
          </div>
        </div>

        <Inbox />
      </div>
      <Footer />
    </>
  );
}

export default page;
