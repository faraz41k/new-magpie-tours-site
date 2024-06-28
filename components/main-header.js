const MainHeader = () => {
  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] z-[2] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <header className="flex-1 flex flex-row items-center justify-between text-center text-5xl text-primary-500 font-body-regular-600">
        <a className="[text-decoration:none] shrink-0 flex flex-row items-center justify-center gap-[8px] text-[inherit]">
          <img
            className="relative w-11 h-11 object-cover"
            alt=""
            src="/houseline@2x.png"
          />
          <div className="shrink-0 flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-semibold">REIS</div>
            <div className="relative text-sm leading-[16px] font-medium">
              Real State
            </div>
          </div>
        </a>
        <div className="shrink-0 flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 sm:flex">
          <div className="shrink-0 flex flex-row items-start justify-start gap-[30px] lg:hidden">
            <a className="[text-decoration:none] relative leading-[22px] text-[inherit]">
              HOME
            </a>
            <a className="[text-decoration:none] relative leading-[22px] text-[inherit]">
              ABOUT US
            </a>
            <a className="[text-decoration:none] relative leading-[22px] text-[inherit]">
              OUR AGENTS
            </a>
            <a className="[text-decoration:none] relative leading-[22px] font-semibold text-[inherit]">
              PROPERTIES
            </a>
            <a className="[text-decoration:none] relative leading-[22px] text-[inherit]">
              GALLERY
            </a>
            <a className="[text-decoration:none] relative leading-[22px] text-[inherit]">
              BLOG
            </a>
            <a className="[text-decoration:none] relative leading-[22px] text-[inherit]">
              CONTACT US
            </a>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-body-regular-600 text-primary-900 text-center inline-block">
              SEARCH
            </button>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] shrink-0 hidden flex-row items-center justify-center lg:flex">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </header>
    </header>
  );
};

export default MainHeader;
