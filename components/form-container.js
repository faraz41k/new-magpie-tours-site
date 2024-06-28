const FormContainer = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-row items-start justify-start p-[50px] md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
      <footer className="flex-1 shrink-0 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
        <div className="w-[312px] h-[300px] flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-regular-600">
          <a className="[text-decoration:none] flex flex-row items-center justify-center gap-[8px] text-[inherit]">
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
          <div className="self-stretch h-[168px] flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <div className="relative text-5xl leading-[32px] font-semibold text-gray-black">
              Contact Us
            </div>
            <div className="relative leading-[24px]">Call : +123 400 123</div>
            <div className="relative leading-[24px] flex items-end w-[312px]">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className="relative leading-[24px] text-gray-700">
              Email: example@mail.com
            </div>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between">
            <a className="[text-decoration:none] rounded bg-primary-50 shrink-0 flex flex-col items-center justify-center p-3.5">
              <img
                className="relative w-5 h-5 object-cover"
                alt=""
                src="/social-media-logo@2x.png"
              />
            </a>
            <a className="[text-decoration:none] rounded bg-primary-50 shrink-0 flex flex-col items-center justify-center p-3.5">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/social-media-logo@2x.png"
              />
            </a>
            <a className="[text-decoration:none] rounded bg-primary-50 shrink-0 flex flex-col items-center justify-center p-3.5">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/social-media-logo@2x.png"
              />
            </a>
            <a className="[text-decoration:none] rounded bg-primary-50 shrink-0 flex flex-col items-center justify-center p-3.5">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/social-media-logo@2x.png"
              />
            </a>
            <div className="rounded bg-primary-50 shrink-0 flex flex-col items-center justify-center p-3.5">
              <img
                className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
                alt=""
                src="/social-media-logo@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">Features</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Home
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Become a Host
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Pricing
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Blog
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Contact
            </a>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">Company</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              About Us
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Press
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Contact
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Careers
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Blog
            </a>
          </div>
        </div>
        <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
          <div className="relative leading-[32px] font-semibold">
            Team and policies
          </div>
          <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Terms of servies
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Privacy Policy
            </a>
            <a className="[text-decoration:none] relative leading-[24px] text-[inherit]">
              Security
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FormContainer;
