import Image from "next/image";
import title from "../img/img_2414.jpg";
import BasicCard from "@/components/card";
import GaCard from "@/components/card2";
import "/node_modules/primeflex/primeflex.css"

import Link from "next/link";
import GAsale from "@/components/card2";
import Finalsale from "@/components/card3";

export default function Home() {
  return (
    <>
{/* controls dark mode */}
    
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
    <div className="flex align-items-center justify-content-center w-14rem h-4rem bg-primary font-bold border-round m-2"> <GAsale/></div>
    <div className="flex align-items-center justify-content-center w-14rem h-4rem bg-primary font-bold border-round m-2"><Finalsale/></div>
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
<div className="flex">
    <div className="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round">1</div>
    <div className="flex-1 h-4rem bg-primary font-bold text-center p-4 border-round mx-4">2</div>
</div>






  
  



       
    </>
  );
}
