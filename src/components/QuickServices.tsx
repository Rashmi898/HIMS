import { ChevronLeft, ChevronRight } from "lucide-react";

import giaIcon from "../assets/gia-icon.png";
import landIcon from "../assets/land-icon.png";
import certificateIcon from "../assets/certificate-icon.png";
import applicationIcon from "../assets/application-icon.png";
import serviceIcon from "../assets/service-icon.png";

const QuickServices = () => {
  return (
    <section
      className="
        relative
        z-20
        -translate-y-[60px]
        w-full
      "
    >
      {/* Main container */}
      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1286px]
          items-center
          justify-center
        "
      >
        {/* ================= LEFT ARROW ================= */}
        <button
          className="
            absolute
             left-[50px]
  xl:left-[120px]
  2xl:left-[200px]
            z-30
            flex
            h-[35px]
            w-[35px]
            items-center
            justify-center
            rounded-full
            bg-[#F3F3F3]
            opacity-[0.9]
          "
        >
          <ChevronLeft
            size={18}
            strokeWidth={2}
            className="text-[#555555]"
          />
        </button>

        {/* ================= QUICK SERVICE CARDS ================= */}
        <div className="grid translate-x-[20px] xl:translate-x-[50px] 2xl:translate-x-[85px] grid-cols-5 gap-[14px]">

          {/* ================= CARD 1 ================= */}
          <div
            className="
              flex
              h-[190px]
              w-[190px]
              shrink-0
              flex-col
              items-center
              justify-center
              rounded-[8px]
              bg-[#10C765]
            "
          >
            {/* Icon */}
            <img
              src={giaIcon}
              alt="GIA Objection Hearing"
              className="h-[90px] w-[60px] object-contain"
            />

            {/* Text */}
            <p
              className="
                mt-[20px]
                w-[179px]
                text-center
                font-['Roboto']
                text-[16px]
                font-medium
                leading-[100%]
                text-white
              "
            >
              GIA
              <br />
              Objection Hearing
            </p>
          </div>

          {/* ================= CARD 2 ================= */}
          <div
            className="
              flex
              h-[190px]
              w-[190px]
              shrink-0
              flex-col
              items-center
              justify-center
              rounded-[8px]
              bg-[#FF941C]
            "
          >
            {/* Icon */}
            <img
              src={landIcon}
              alt="Land Services"
              className="h-[90px] w-[60px] object-contain"
            />

            {/* Text */}
            <p
              className="
                mt-[20px]
                w-[179px]
                text-center
                font-['Roboto']
                text-[16px]
                font-medium
                leading-[100%]
                text-white
              "
            >
              Private Coaching
              <br/>
              Registration

            </p>
          </div>

          {/* ================= CARD 3 ================= */}
          <div
            className="
              flex
              h-[190px]
              w-[190px]
              shrink-0
              flex-col
              items-center
              justify-center
              rounded-[8px]
              bg-[#24B8D1]
            "
          >
            {/* Icon */}
            <img
              src={certificateIcon}
              alt="Certificate Services"
              className="h-[90px] w-[60px] object-contain"
            />

            {/* Text */}
            <p
              className="
                mt-[20px]
                w-[179px]
                text-center
                font-['Roboto']
                text-[16px]
                font-medium
                leading-[100%]
                text-white
              "
            >
              University Recruitment

            </p>
          </div>

          {/* ================= CARD 4 ================= */}
          <div
            className="
              flex
              h-[190px]
              w-[190px]
              shrink-0
              flex-col
              items-center
              justify-center
              rounded-[8px]
              bg-[#D7479C]
            "
          >
            {/* Icon */}
            <img
              src={applicationIcon}
              alt="Application Services"
              className="h-[90px] w-[60px] object-contain"
            />

            {/* Text */}
            <p
              className="
                mt-[20px]
                w-[179px]
                text-center
                font-['Roboto']
                text-[16px]
                font-medium
                leading-[100%]
                text-white
              "
            >
             Question Bank
            </p>
          </div>

          {/* ================= CARD 5 ================= */}
          <div
            className="
              flex
              h-[190px]
              w-[190px]
              shrink-0
              flex-col
              items-center
              justify-center
              rounded-[8px]
              bg-[#337ACF]
            "
          >
            {/* Icon */}
            <img
              src={serviceIcon}
              alt="Service"
              className="h-[90px] w-[60px] object-contain"
            />

            {/* Text */}
            <p
              className="
                mt-[20px]
                w-[179px]
                text-center
                font-['Roboto']
                text-[16px]
                font-medium
                leading-[100%]
                text-white
              "
            >
             IT Helpdesk
            </p>
          </div>

        </div>

        {/* ================= RIGHT ARROW ================= */}
        <button
          className="
            absolute
            right-[20px]
  xl:right-[50px]
  2xl:right-[30px]
            z-30
            flex
            h-[35px]
            w-[35px]
            items-center
            justify-center
            rounded-full
            bg-[#F3F3F3]
            opacity-[0.9]
          "
        >
          <ChevronRight
            size={18}
            strokeWidth={2}
            className="text-[#555555]"
          />
        </button>
      </div>
    </section>
  );
};

export default QuickServices;