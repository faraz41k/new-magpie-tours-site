import BussinesCard from "./BussinesCard";


const BussinesCardSection =async ({
  title,
  desc,
  name1,
  name2,
  name3,
  name4,
  name5,
  href1,
  href2,
  href3,
  href4,
  href5,
  img1,
  img2,
  img3,
  img4,
  img5,
  

}) => {



    return (
      <div className="self-stretch flex-1 flex flex-col items-center justify-center py-[53px]  gap-[45px] text-center text-21xl text-primary-800 font-body-regular-600">
        <div className="self-stretch flex flex-col items-center justify-center py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold text-gray-600">
            {title}
          </div>
          <div className="self-stretch relative text-xl leading-[20px] text-gray-600">
            {desc}
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap items-center justify-center py-0 px-1 box-border max-w-[100%] text-left text-5xl text-gray-white">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
            <div className="self-stretch flex flex-row items-center justify-center gap-[26px] lg:flex-row md:flex-col">
              <BussinesCard
                cityName={name1}
                propBackgroundImage={`url(${img1})`}
                href={`/${href1}`}
              />
              <BussinesCard
                cityName={name2}
                propBackgroundImage={`url(${img2})`}
                href={`/${href2}`}
              />
              <BussinesCard
                cityName={name3}
                propBackgroundImage={`url(${img3})`}
                href={`/${href3}`}
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
            <BussinesCard
                cityName={name4}
                propBackgroundImage={`url(${img4})`}
                href={`/${href4}`}
              />
              <BussinesCard
                cityName={name5}
                propBackgroundImage={`url(${img5})`}
                href={`/${href5}`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BussinesCardSection;
  