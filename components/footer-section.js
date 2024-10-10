import Link from "next/link";
import Image from "next/image";

import { MdOutlineFacebook } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";

const FooterSection = () => {
  return (
    <div className="self-stretch flex z-100 flex-row items-start justify-start p-[50px] md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col bg-black/95">
      <footer className="flex-1 shrink-0 flex flex-row items-start justify-between text-left text-5xl text-gray-300 font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-4 sm:flex-[unset] sm:self-stretch">
        <div className="mb-10 w-[312px] h-full flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-regular-600">
          {/* <Link  href='/' className="[text-decoration:none] flex flex-row items-center justify-center gap-[8px] text-[inherit]">
            <Image
              height={50}
              width={50}
              className="relative w-11 h-11 object-cover"
              alt=""
              src="/logo.svg"
            />
            <div className="shrink-0 flex flex-col items-start justify-start">
              <div className="relative leading-[24px] font-semibold">REIS</div>
              <div className="relative text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </Link> */}
          <div className="self-stretch mb-3 h-[168px] flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <div className="relative font-poppins text-5xl leading-[32px] font-light text-gray-200">
              Contact Us
            </div>
            <div className="relative font-poppins leading-[24px] flex gap-1 items-center justify-center"><SiWhatsapp className="text-gray-200"/>
            <Link  href='https://web.whatsapp.com/ ' className="no-underline text-gray-200">+92 3554212624 </Link>
            </div>
            <div className="relative leading-[24px] font-poppins text-gray-200 py-4">
              
              <Link  href='info@magpietours.com.pk' className="no-underline text-gray-200">info@magpietours.com.pk</Link>
              
            </div>
            
            <div className="relative font-poppins leading-[24px] flex flex-col items-start w-[312px]">
            <h3 className="text-[16px] font-poppins text-gray-200">Head Office</h3>
              <p className="text-[14px] font-poppins ">
                Office Magpie Tours, Apple Garden, Postal code 15600, Near Degree college, college road,
                Tehsil Aliabad, District Hunza, GB, Pakistan.
              </p>
            </div>
            
          </div>
          
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px] mt-4">
          <div className="relative leading-[32px] font-poppins font-light text-[18px]">Tours</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <Link  href='/' className="[text-decoration:none] font-poppins relative leading-[24px] text-[14px] text-[inherit]">
              Landscapes & Traditions
            </Link>
            <Link  href='/' className="[text-decoration:none] font-poppins relative leading-[24px] text-[14px] text-[inherit]">
              UNESCO Heritage
            </Link>
            <Link  href='/' className="[text-decoration:none] font-poppins relative leading-[24px] text-[14px] text-[inherit]">
              Trekking
            </Link>
            <Link  href='/' className="[text-decoration:none] font-poppins relative leading-[24px] text-[14px] text-[inherit]">
              Mountaineering
            </Link>
            <Link  href='/' className="[text-decoration:none] font-poppins relative leading-[24px] text-[14px] text-[inherit]">
              Custom Tours
            </Link>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative font-poppins font-light text-[18px]  leading-[32px] ">Company</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <Link  href='/About' className="[text-decoration:none] font-poppins relative leading-[24px] text-[14px]  text-[inherit]">
              About Us
            </Link>
            
            <Link  href='/Contact' className="[text-decoration:none] font-poppins relative leading-[24px] text-[14px]  text-[inherit]">
              Contact
            </Link>

            <Link  href='/RefundPolicy' className="[text-decoration:none] font-poppins relative leading-[24px] text-[14px]  text-[inherit]">
              Refund Policy
            </Link>
            
          </div>
        </div>
        <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative font-poppins font-light text-[18px]  leading-[32px]  ">
            FAQs
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <Link  href='/BookingPolicy' className="[text-decoration:none] font-poppins relative leading-[24px] text-[14px]  text-[inherit]">
              Booking Policy
            </Link>

            
            
            <Link  href='https://visa.nadra.gov.pk/' className="[text-decoration:none] font-poppins relative leading-[24px] text-[14px]  text-[inherit]">
              Visa Pakistan : https://visa.nadra.gov.pk/
            </Link>

            <Link  href='/FAQs' className="[text-decoration:none] font-poppins relative leading-[24px] text-[14px]  text-[inherit]">
              FAQs
            </Link>
            
          </div>
          
          <div className="w-full flex flex-row items-center justify-start gap-3 pt-4 py-4">
            
            <Link target="_blank"  href='https://www.facebook.com/profile.php?id=100063772916296' className="[text-decoration:none] rounded-full bg-primary-50 shrink-0 flex flex-col items-center justify-center p-2.5">
              <MdOutlineFacebook/>
            </Link>
            <Link target="_blank"  href='https://web.whatsapp.com/' className="[text-decoration:none] rounded-full bg-primary-50 shrink-0 flex flex-col items-center justify-center p-2.5">
              <SiWhatsapp/>
            </Link>
            <Link target="_blank"  href='https://www.instagram.com/magpietourspakistan?igsh=MWc0bzcxNWhqOGx3Nw%3D%3D&utm_source=qr' className="[text-decoration:none] rounded-full bg-primary-50 shrink-0 flex flex-col items-center justify-center p-2.5">
              <BsInstagram/>
            </Link>
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterSection;
