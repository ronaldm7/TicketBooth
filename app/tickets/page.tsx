import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import BasicCard from "@/components/card";
import Descriptioncard from "@/components/descrip";


export default function Home() {
  return (
    <>
      {/* controls dark mode */}
        {/* HEADER */}
        
        <div className="block text-black text-center p-4 border-round mb-3">
          <div className="flex">
            <div className="flex-1 h-4rem bg-primary text-black font-bold text-center p-4 border-round">
                
              <div className="flex flex-column">
                <div className="flex align-items-center justify-content-center h-4rem font-bold border-round m-2"></div>
                <div className="flex align-items-center justify-content-center h-4rem font-bold border-round m-2"></div>
                <div className="flex align-items-center justify-content-center h-4rem font-bold border-round m-2"></div>
                <div className="flex align-items-center justify-content-center h-4rem font-bold border-round m-2">
                  <BasicCard />
                </div>
                <div className="flex align-items-center justify-content-center h-4rem font-bold border-round m-2"></div>
                <div className="flex align-items-center justify-content-center h-4rem  text-black font-bold border-round m-2">Ticket to the event</div>
                <div className="flex align-items-center justify-content-center h-4rem font-bold border-round m-2">              
</div>

              </div>
            </div>

            
        {/* SECOND */}
            <div className="flex-1 h-4rem bg-primary text-black  text-center p-4 border-round mx-4">
                
            <div className="flex flex-column">
            <div className="flex align-items-center justify-content-center h-4rem font-bold border-round m-2"></div>

                <div className="flex align-items-center justify-content-center h-4rem font-bold border-round m-2"></div>
                <div className="flex align-items-center justify-content-center h-4rem font-bold border-round m-2"></div>
                <div className="flex align-items-center justify-content-center h-4rem font-bold border-round m-2"></div>
                <div className="flex align-items-center justify-content-center h-4rem font-bold border-round m-2">
                <Descriptioncard />
                </div>
                <div className="flex align-items-center justify-content-center h-4rem font-bold border-round m-2"></div>
                <div className="flex align-items-center justify-content-center h-4rem font-bold border-round m-2">              
</div>

              </div>
              
              
             
            </div>
            
            </div>
        </div>

        {/* SPACE */}
        <div className="block font-bold text-center p-4 border-round mb-3"></div>
    </>
  );
}
