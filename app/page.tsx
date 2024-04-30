import Image from "next/image";
import title from "./img/img_2414.jpg";
import { Card } from 'primereact/card';
import BasicCard from "@/components/card";
import GaCard from "@/components/card2";
import TAb from "@/components/menubar";
import "/node_modules/primeflex/primeflex.css"
import Nextbar from "@/components/nxtnavbar";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import Link from "next/link";

export default function Home() {
  return (
    <>
{/* controls dark mode */}
    <main className="light text-foreground bg-background">
    
{/* HEADER */}
<div className="block  text-center p-4 border-round mb-3">
<div className="flex justify-content-center flex-wrap">
    <div className="flex align-items-center justify-content-center w-14rem h-4rem  font-bold border-round m-2">1</div>
    <div className="flex align-items-center justify-content-center   font-bold border-round m-2"> <div className="py-4">  <Image src={title} alt="Image" width={1000} height={400} /></div></div>
    <div className="flex align-items-center justify-content-center w-14rem h-4rem  font-bold border-round m-2">3</div>
</div></div>




{/* MIDDLE SECTION */}
<div className="block  font-bold text-center p-4 border-round mb-3">
<div className="flex justify-content-center flex-wrap">
    <div className="flex align-items-center justify-content-center w-14rem h-4rem bg-primary font-bold border-round m-2"><BasicCard/></div>
    <div className="flex align-items-center justify-content-center w-14rem h-4rem bg-primary font-bold border-round m-2"> <GaCard/></div>
    <div className="flex align-items-center justify-content-center w-14rem h-4rem bg-primary font-bold border-round m-2"><BasicCard/></div>
</div></div>

{/* SPACE */}
<div className="block  font-bold text-center p-4 border-round mb-3"></div>



{/* THIRD PORTION */}
<div className="block  font-bold text-center p-4 border-round mb-3">
<div className="flex justify-content-center flex-wrap">
    <div className="flex align-items-center justify-content-center  bg-primary font-bold border-round m-2"><Link href="/tickets">
       
       <Image
         src={title} // Path to your image inside the public directory
         alt="Example Image"
         width={400} // Adjust width and height as needed
         height={300}
       />
    
   </Link></div>
    <div className="flex align-items-center justify-content-center  bg-primary font-bold border-round m-2"> <Link href="/tickets">
       
       <Image
         src={title} // Path to your image inside the public directory
         alt="Example Image"
         width={400} // Adjust width and height as needed
         height={300}
       />
    
   </Link></div>
    <div className="flex align-items-center justify-content-center  bg-primary font-bold border-round m-2">
      <Link href="/tickets">
       
       <Image
         src={title} // Path to your image inside the public directory
         alt="Example Image"
         width={400} // Adjust width and height as needed
         height={300}
       />
    
   </Link>
   </div>
   <div className="flex align-items-center justify-content-center  bg-primary font-bold border-round m-2">
      <Link href="/tickets">
       
       <Image
         src={title} // Path to your image inside the public directory
         alt="Example Image"
         width={400} // Adjust width and height as needed
         height={300}
       />
    
   </Link>
   </div>
   <div className="flex align-items-center justify-content-center  bg-primary font-bold border-round m-2">
      <Link href="/tickets">
       
       <Image
         src={title} // Path to your image inside the public directory
         alt="Example Image"
         width={400} // Adjust width and height as needed
         height={300}
       />
    
   </Link>
   </div><div className="flex align-items-center justify-content-center  bg-primary font-bold border-round m-2">
      <Link href="/tickets">
       
       <Image
         src={title} // Path to your image inside the public directory
         alt="Example Image"
         width={400} // Adjust width and height as needed
         height={300}
       />
    
   </Link>
   </div>
</div>
</div>


</main>




  
  



       
    </>
  );
}
