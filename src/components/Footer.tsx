
import footerBg from "../assets/footer-bg.png";
import odishaGovtLogo from "../assets/odisha-govt-logo.png";
import himsLogo from "../assets/hims-logo.png";

import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png";

import googleQr from "../assets/google-qr.png";
import appstoreQr from "../assets/appstore-qr.png";

import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="
        relative
        min-h-[650px]
        w-full
        overflow-hidden
        bg-[#060E30]

        md:min-h-[600px]

        lg:min-h-[560px]

        xl:min-h-[523px]

        2xl:h-[523px]
        2xl:min-h-0
      "
    >
      {/* Footer Background */}
      <img
        src={footerBg}
        alt=""
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Footer Content */}
      <div
        className="
          relative
          z-20
          mx-auto
          w-full
          max-w-[1920px]

          px-[30px]
          sm:px-[40px]
          md:px-[50px]
          lg:px-[50px]
          xl:px-[80px]
          2xl:px-[125px]
        "
      >
        {/* Left + Right Groups */}
        <div
          className="
            flex
            flex-col
            items-start
            justify-between
            gap-[50px]
            pt-[50px]

            md:pt-[60px]

            lg:pt-[70px]

            xl:pt-[75px]

            2xl:flex-row
            2xl:items-start
            2xl:gap-0
            2xl:pt-[85px]
          "
        >
          {/* ================= LEFT GROUP ================= */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-[18px]

              2xl:w-auto
            "
          >
            {/* Logo Row */}
            <div
              className="
                flex
                items-center
                gap-[25px]

                sm:gap-[30px]

                2xl:gap-[40px]
              "
            >
              {/* Odisha Government Logo */}
              <img
                src={odishaGovtLogo}
                alt="Odisha Government"
                className="
                  h-[45px]
                  w-[44px]
                  shrink-0
                  object-contain
                  brightness-0
                  invert

                  sm:h-[50px]
                  sm:w-[48px]

                  2xl:h-[56.04px]
                  2xl:w-[54.17px]
                "
              />

              {/* HIMS Logo */}
              <img
                src={himsLogo}
                alt="HIMS"
                className="
                  h-[45px]
                  w-auto
                  shrink-0
                  object-contain
                  brightness-0
                  invert

                  sm:h-[50px]

                  2xl:h-[56px]
                "
              />
            </div>

            {/* Main Title */}
            <p
              className="
                m-0
                text-left
                font-['Roboto']
                text-[22px]
                font-medium
                leading-[28px]
                tracking-[0]
                text-white

                sm:text-[24px]
                sm:leading-[30px]

                lg:text-[27px]
                lg:leading-[32px]

                2xl:text-[30px]
                2xl:leading-[35px]
              "
            >
              Higher Education Information & Management System
            </p>

            {/* Department Text */}
            <p
              className="
                m-0
                mt-[5px]
                text-left
                font-['Roboto']
                text-[15px]
                font-medium
                leading-[19px]
                tracking-[0]
                text-white

                sm:text-[16px]
                sm:leading-[20px]

                2xl:mt-[15px]
                2xl:text-[18px]
                2xl:leading-[21px]
              "
            >
              Higher Education Department, Govt. of Odisha
            </p>

            {/* Social Media Text */}
            <p
              className="
                m-0
                mt-[15px]
                text-left
                font-['Roboto']
                text-[15px]
                font-medium
                leading-[22px]
                tracking-[0]
                text-white

                2xl:mt-[25px]
                2xl:text-[15px]
                2xl:leading-[26px]
              "
            >
              Follow us on social media
            </p>

            {/* Social Media Icons */}
            <div
              className="
                mt-[5px]
                flex
                items-center
                gap-[15px]

                2xl:mt-[10px]
                2xl:gap-[18px]
              "
            >
              <FaFacebookF
                className="h-[15px] w-[15px] text-[#FF8A00]"
              />

              <FaXTwitter
                className="h-[15px] w-[15px] text-[#FF8A00]"
              />

              <FaLinkedinIn
                className="h-[15px] w-[15px] text-[#FF8A00]"
              />

              <FaYoutube
                className="h-[15px] w-[15px] text-[#FF8A00]"
              />

              <FaInstagram
                className="h-[15px] w-[15px] text-[#FF8A00]"
              />
            </div>
          </div>

          {/* ================= RIGHT GROUP ================= */}
          <div
            className="
              flex
              w-full
              flex-col
              items-start

              md:items-center

              2xl:w-auto
              2xl:items-center
            "
          >
            {/* Store Buttons */}
            <div
              className="
                flex
                items-center
                gap-[15px]

                sm:gap-[18px]

                lg:gap-[25px]

                2xl:gap-[30px]
              "
            >
              {/* Google Play */}
              <div
                className="
                  h-[52px]
                  w-[170px]
                  rounded-[12px]
                  border
                  border-white
                  p-[1px]

                  sm:h-[56px]
                  sm:w-[185px]

                  lg:h-[60px]
                  lg:w-[195px]

                  2xl:h-[64.53px]
                  2xl:w-[212.79px]
                  2xl:rounded-[15px]
                "
              >
                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                  className="
                    h-full
                    w-full
                    rounded-[11px]
                    object-contain

                    2xl:rounded-[14px]
                  "
                />
              </div>

              {/* App Store */}
              <div
                className="
                  h-[52px]
                  w-[170px]
                  rounded-[12px]

                  sm:h-[56px]
                  sm:w-[185px]

                  lg:h-[60px]
                  lg:w-[195px]

                  2xl:h-[64.53px]
                  2xl:w-[212.79px]
                  2xl:rounded-[15px]
                "
              >
                <img
                  src={appStore}
                  alt="Download on the App Store"
                  className="
                    h-full
                    w-full
                    rounded-[11px]
                    object-contain

                    2xl:rounded-[14px]
                  "
                />
              </div>
            </div>

            {/* QR Codes */}
            <div
              className="
                flex
                items-start
                gap-[25px]
                pt-[10px]

                sm:gap-[35px]

                lg:gap-[50px]

                2xl:gap-[90px]
              "
            >
              {/* Google Play QR */}
              <img
                src={googleQr}
                alt="Google Play QR Code"
                className="
                  h-[120px]
                  w-[120px]
                  object-contain

                  sm:h-[130px]
                  sm:w-[130px]

                  lg:h-[140px]
                  lg:w-[140px]

                  2xl:h-[150px]
                  2xl:w-[150px]
                "
              />

              {/* App Store QR */}
              <img
                src={appstoreQr}
                alt="App Store QR Code"
                className="
                  h-[120px]
                  w-[120px]
                  object-contain

                  sm:h-[130px]
                  sm:w-[130px]

                  lg:h-[140px]
                  lg:w-[140px]

                  2xl:h-[150px]
                  2xl:w-[150px]
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Orange Divider */}
      <div
        className="
          absolute
          bottom-[60px]
          left-0
          z-30
          h-[3px]
          w-full
          bg-[#FF941E]
        "
      />

      {/* Copyright */}
      <p
        className="
          absolute
          bottom-[25px]
          left-1/2
          z-30
          m-0
          -translate-x-1/2
          whitespace-nowrap
          text-center
          font-['Roboto']
          text-[12px]
          font-medium
          leading-[15px]
          tracking-[0]
          text-white

          sm:text-[13px]
          sm:leading-[16px]

          2xl:text-[16px]
          2xl:leading-[19px]
        "
      >
        © 2026 HIMS Odisha. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;