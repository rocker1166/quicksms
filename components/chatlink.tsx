"use client";
import React from "react";

import ClipboardCopy from "./clipboard";
export  function Chatlink() {
  return (
    <div>
  
        <div className=" justify-center gap-3  flex grid">
        <img
          src="https://as1.ftcdn.net/v2/jpg/05/29/71/50/1000_F_529715063_RiB20Skm9T4qYoltG6VHkgLenfnP09Jl.jpg"
          alt="jordans"
          height="400"
          width="350"
          className="object-contain"
        />
        <ClipboardCopy  copyText="http://localhost:3000/sms/${a}" />

        </div>
        
      
    </div>
  );
}
