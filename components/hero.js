

import "antd";

import { client,getBanner } from "../sanity/sanity/sanity-utils";
import imageUrlBuilder from '@sanity/image-url'
import Link from "next/link";


const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}


const Hero =async () => {
  const BannerData = await getBanner()
  const banner =BannerData[0].image
  const title = BannerData[0].title
  const desc = BannerData[0].description
  
  
  
  // const router = useRouter();

  // const onSearchCTAClick = () => {
  //   router.push("/");
  // };

  return (
        <div className=" hero min-h-screen z-0" >
          <div className="hero-overlay bg-opacity-30  text-center object-cover" style={{backgroundPosition: "center",backgroundSize:"cover",backgroundImage: `url(${urlFor(banner).url()})` }}></div>
              <div className="w-2/4 md:w-full flex justify-center items-center  text-left text-neutral-content backdrop-blur-sm bg-whitesmoke-100/20 rounded-lg">
                    <div className="max-w-3xl text-left py-4 px-10">
                      <div className="flex flex-col gap-1">
                        <h1 className="mb-5 text-[38px] font-bold font-poppins uppercase md:text-[40px] leading-[36px]  text-gray-black">{title}</h1>
                        <p className="mb-5 font-poppins fontse text-[20px] md:text-[20px] leading-[30px] bg-gradient-to-r from-blue-950 to-black inline-block text-transparent bg-clip-text">{desc}</p>  
                      </div>
                      

                      <Link href='/Contact'>
                      <button className="btn pt-0 btn-primary font-light bg-black text-white cursor-pointer border-none hover:bg-slate-900 font-poppins">Contact Us </button>
                      </Link>    
                    </div>
              </div>
        </div>
  );
};

export default Hero;
