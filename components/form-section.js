"use client"

import { useState } from "react";

const FormSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [input1Value, setInput1Value] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [destinationNameInputValue, setDestinationNameInputValue] =
    useState("");
  return (
    <section className="self-stretch bg-black/10 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="flex-1 flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[40px] max-w-[900px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Contact us
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-7 px-[30px] gap-[17px] text-left text-5xl text-darkslategray font-poppins">
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
            <b className="self-stretch relative leading-[36px]">Enquiry Form</b>
            <div className="self-stretch relative text-lg leading-[30px] font-poppins text-slategray">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
              <input
                className="[outline:none] font-poppins text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 text-darkgray border-[1px] border-solid border-gray1-200 md:flex-[unset] md:self-stretch"
                placeholder="First name"
                required
                type="email"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              />
              <input
                className="[outline:none] font-poppins text-base bg-[transparent] self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 text-darkgray border-[1px] border-solid border-gray1-200 md:flex-[unset] md:self-stretch"
                placeholder="Last name"
                required
                type="text"
                value={input1Value}
                onChange={(event) => setInput1Value(event.target.value)}
              />
            </div>
            <input
              className="[outline:none] font-poppins text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-darkgray border-[1px] border-solid border-gray1-200"
              name="Email"
              placeholder="Email id"
              required
              type="email"
              value={destinationNameInputValue}
              onChange={(event) =>
                setDestinationNameInputValue(event.target.value)
              }
            />

            <input
              className="[outline:none] font-poppins text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-darkgray border-[1px] border-solid border-gray1-200"
              name="Country"
              placeholder="Country"
              required
              type="text"
              value={countryValue}
              onChange={(event) =>
                setCountryValue(event.target.value)
              }
            />
            <textarea
              className="bg-[transparent] font-poppins text-base [outline:none] self-stretch rounded box-border h-[105px] flex flex-col items-start justify-start p-3 text-darkgray border-[1px] border-solid border-gray1-200"
              placeholder="Comments or questions"
            />
            <button className="cursor-pointer [border:none] p-0 bg-primary-500 rounded w-[222px] h-[46px] flex flex-col items-center justify-center hover:bg-royalblue lg:bg-blueviolet sm:self-stretch sm:w-auto sm:max-w-full">
              <div className="relative text-base font-poppins text-gray-white text-center inline-block w-[203.1px]">
                Submit
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
