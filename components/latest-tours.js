import ImgLink from "./img-link";

const LatestTours = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center py-[86px] px-0 gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-center gap-[40px] max-w-[95%]">
        <div className="w-[688px] flex flex-col items-center justify-center gap-[24px] max-w-[95%] lg:max-w-[100%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Popular Tours
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[40px] text-center text-base text-gray-white">
          <ImgLink propBackgroundImage="url('/blossom.jpg')"  title='Northern Pakistan Blossom' link="LsNorthernBlossom"/>
          <ImgLink propBackgroundImage="url('/colors.jpg')" title='Colors Of North'  link=""/>
          <ImgLink propBackgroundImage="url('/NangaRaka2.jpg')" title='Nangaparbat Rakaposhi BaseCamp' link="TrekNangaparbat&Rakaposhi"/>
          <ImgLink propBackgroundImage="url('/BarTair.JPG')" title='Bar-Tair Skii' link="SkiBarTair"/>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-royalblue sm:max-w-full">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default LatestTours;
