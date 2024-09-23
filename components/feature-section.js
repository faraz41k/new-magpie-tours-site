import CentervilleLink from "./centerville-link";


const FeatureSection =async () => {



  return (
    <div className="self-stretch flex-1 flex flex-col items-center justify-center py-[53px]  gap-[45px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-center py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] md:text-[24px]  font-semibold text-gray-600">
          Our Tours Across Pakistan
        </div>
        <div className="self-stretch relative text-xl leading-[20px] text-gray-600">
          Choose your travel style.
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap items-center justify-center py-0 px-1 box-border max-w-[100%] text-left text-5xl text-gray-white">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
          <div className="self-stretch flex flex-row items-center justify-center gap-[26px] lg:flex-row md:flex-col">
            <CentervilleLink
              cityName="Trekking"
              propBackgroundImage="url('/Trekking.JPG')"
              href='/AllTrekking'
            />
            <CentervilleLink
              cityName="Mountaineering"
              propBackgroundImage="url('/mountaineering.png')"
              href='/AllExpeditions'
              propPadding="unset"
              propBoxSizing="unset"
            />
            <CentervilleLink
              cityName="Ancient & UNESCO Heritage"
              propBackgroundImage="url('/Unesco.jpg')"
              href='/AllHeritage'
              propPadding="unset"
              propBoxSizing="unset"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
            <CentervilleLink
              cityName="Landscapes"
              propBackgroundImage="url('/landscapes.JPG')"
              href='/Alllandscape'
              propPadding="10px"
              propBoxSizing="border-box"
              objectFit= 'cover'
            />
            <CentervilleLink
              cityName="Tailored Tours"
              propBackgroundImage="url('/skii.jpg')"
              href='/AllCustomtours'
              propPadding="10px"
              propBoxSizing="border-box"
              objectFit= 'contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
