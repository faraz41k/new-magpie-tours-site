import LinkCardForm from "@/components/link-card-form";
import { getClimbingTours, getLandscape } from "@/sanity/sanity/sanity-utils";






const Climbing = async ({params})=> {

 const landscape =await getClimbingTours() 
  const data  = landscape

  
  return (
    <div className=' self-stretch  flex flex-col mb-6'>
      {/* hero */}
      <div className=" ">
      <div className="hero min-h-[550px] w-full bg-cover bg-center relative" style={{backgroundImage: 'url(/mountaineering.jpg)'}}>
        <div className="hero-overlay  bg-opacity-60 py-5"></div>
          <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md ">
              <div className="min-w-[400px] mx-auto  flex flex-col justify-center items-center py-16  text-center">
                <h3 className="font-poppins font-bold text-33xl">Climbing</h3>
                
                <p className="font-poppins text-[20px]">Magpie Tours Pakistan guarantees you are accompanied by the most joyous and supportive team during your climb.  .</p>
              </div>
                
            </div>
          </div>
        </div>
      </div>  

      {/* mid */}
  <div className="max-container my-8 flex flex-col gap-6 py-10">

          

         {/*bottom  */}

          <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-mini-5 text-gray-700 font-body-regular-600">
            <div className="flex-1 shrink-0 flex flex-row flex-wrap items-start justify-center gap-[16px]">
              {
                data.map((tour,ind)=>(
                  <LinkCardForm
                  name={tour.name}
                  image={tour.cardimage}
                  price={tour.price}
                  duration={tour.duration}
                  url={tour.url}
                  key={ind}
                  imageDimensions="/property-image@2x.png"
                  imageDimensionsText="/car@2x.png"
                  imageDimensionsText2="/bathtub@2x.png"
                  imageDimensionsText3="/arrowsout@2x.png"
                  imageDimensionsText4="/ellipse-1@2x.png"
                  imageDimensionsText5="/sharenetwork@2x.png"
                  imageDimensionsArray="/heart@2x.png"
                  imageDimensionsTextArray="/plus@2x.png"
                  propWidth="350px"
                />
                ))
              }
              
              
              
            </div>
          </div>
      
    </div>    
    </div>
  );
};

export default Climbing;
