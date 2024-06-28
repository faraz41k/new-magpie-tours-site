import ServicesContainer from "./services-container";

const ServicesSection = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0 text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%]">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          <ServicesContainer
            listingId="/icon@2x.png"
            actionText="Sell your home"
            propFlexShrink="0"
            propFlexShrink1="0"
          />
          <ServicesContainer
            listingId="/icon@2x.png"
            actionText="Rent your home"
            propFlexShrink="unset"
            propWidth="312px"
            propFlexShrink1="unset"
          />
          <ServicesContainer
            listingId="/icon@2x.png"
            actionText="Buy a home"
            propFlexShrink="0"
            propWidth="unset"
            propFlexShrink1="0"
          />
          <ServicesContainer
            listingId="/icon@2x.png"
            actionText="Free marketing"
            propFlexShrink="unset"
            propWidth="312px"
            propFlexShrink1="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
