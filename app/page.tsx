"use client"
import { Button } from "@nextui-org/button";
import { randomBytes } from "crypto";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
export default function Home() {
  const router = useRouter();
  function handleClick() {
    const existingId = localStorage.getItem('dashboardId'); // Get the stored ID
    const newId = existingId || nanoid(); // Use existing ID or generate a new one
    localStorage.setItem('dashboardId', newId); // Store the ID
    router.push(`/dashboard/${newId}`); // Redirect to /dashboard/newId
  }
  

  return (
    <main className=" place-content-center content-center grid">
      <div className=" grid bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  rounded  my-40 "> 
        <h1 className="  font-serif  text-6xl md:text-9xl ">QuickSMS</h1>
        <p className=" text-red-800">syufyufyu</p>
        </div>
    <Button onClick={handleClick} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-2   text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Get Started ➡️
        </Button>
        
    </main>
  );
}
