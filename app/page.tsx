import Image from "next/image";
import title from "./img/img_2414.jpg";
import { Card } from 'primereact/card';
import BasicCard from "@/components/card";
import GaCard from "@/components/card2";
import TAb from "@/components/menubar";
import "/node_modules/primeflex/primeflex.css"
export default function Home() {
  return (
    <>
       <TAb/>
   <div className="block bg-primary font-bold text-center p-4 border-round mb-3"><div className="py-4">  <Image src={title} alt="Image" width={1000} height={400} />
</div></div>
<div className="block  font-bold text-center p-4 border-round mb-3">
<div className="card-container">
    <div className="inline-block w-15rem h-14rem bg-primary font-bold text-center p-4 border-round"><BasicCard/></div>
    <div className="inline-block w-15rem h-14rem bg-primary font-bold text-center p-4 border-round mx-4"> <GaCard/></div>
    <div className="inline-block w-15rem h-4rem bg-primary font-bold text-center p-4 border-round">3</div>
</div>
 </div>
<div className="block bg-primary font-bold text-center p-4 border-round mb-3">3</div>


  
  



       
    </>
  );
}
