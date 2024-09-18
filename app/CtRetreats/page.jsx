import BussinesCardSection from "@/components/BussinesCardSection";
import LinkCardForm from "@/components/link-card-form";
import { getLandscape } from "@/sanity/sanity/sanity-utils";
import { getYogaRetreats,getCorporateRetreats } from "../../sanity/sanity/sanity-utils";






const Retreats = async ()=> {
  
  const CorporateRetreats =await getCorporateRetreats()
  const p1 = CorporateRetreats[0]
  const name1 = p1.name
  const href1 =p1.url
  
  const YogaRetreats =await getYogaRetreats()
  const p2 = YogaRetreats[0]
  const name2 = p2.name  
  const href2 =p2.url

  
  return (
    <div className=' self-stretch  flex flex-col mb-6'>
      {/* hero */}
      <div className=" ">
      <div className="hero min-h-[550px] w-full bg-cover bg-center relative" style={{backgroundImage: 'url(/trek.jpg)'}}>
        <div className="hero-overlay  bg-opacity-60 py-5"></div>
          <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
              <div className="min-w-[400px] mx-auto  flex flex-col justify-center items-center py-16  text-center">
                <h3 className="font-poppins font-bold text-33xl">Retreats</h3>
                
                <p className="font-poppins text-[20px]">Across Pakistan</p>
              </div>
                
            </div>
          </div>
        </div>
      </div>  

      {/* mid */}
  <BussinesCardSection
   title='Explore Retreats Here'
   desc='Choose you travel style.'
   name1={name1}
  name2={name2}
  name3='Coming Soon.....'
  name4='Coming Soon.....'
  name5='Coming Soon.....'

  href1={href1}
  href2={href2}
  href3='#'
  href4='#'
  href5='#'
  img1='/card-1@3x.png'
  img2='/card-1@3x.png'
  img3='/card-1@3x.png'
  img4='/card-1@3x.png'
  img5='/card-1@3x.png'
   
   />   
    </div>
  );
};

export default Retreats;
