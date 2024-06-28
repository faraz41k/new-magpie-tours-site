import { useMemo } from "react";

const ServicesContainer = ({
  listingId,
  actionText,
  propFlexShrink,
  propWidth,
  propFlexShrink1,
}) => {
  const sellYourHomeStyle = useMemo(() => {
    return {
      flexShrink: propFlexShrink,
      width: propWidth,
    };
  }, [propFlexShrink, propWidth]);

  const contentsStyle = useMemo(() => {
    return {
      flexShrink: propFlexShrink1,
    };
  }, [propFlexShrink1]);

  return (
    <div
      className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] shrink-0 flex flex-col items-start justify-start p-[22px] box-border min-w-[300px] max-w-[340px] text-center text-5xl text-gray-700 font-body-regular-600"
      style={sellYourHomeStyle}
    >
      <div
        className="shrink-0 flex flex-col items-start justify-start gap-[24px]"
        style={contentsStyle}
      >
        <img
          className="relative w-[78px] h-[78px] overflow-hidden shrink-0 object-cover"
          alt=""
          src={listingId}
        />
        <div className="shrink-0 flex flex-col items-start justify-start gap-[24px]">
          <div className="relative leading-[32px] font-semibold">
            {actionText}
          </div>
          <div className="relative text-base leading-[24px] text-lightslategray text-left flex items-end w-[268px]">
            We do a free evaluation to be sure you want to start selling.
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-body-regular-600 text-primary-500 text-left inline-block">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
