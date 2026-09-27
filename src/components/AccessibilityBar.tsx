import { Sun, ChevronDown } from "lucide-react";

const AccessibilityBar = () => {
  return (
    <section className="h-[40px] w-full bg-[#000724]">
      {/* MAIN CONTAINER */}
      <div
        className="
          flex
          h-full
          w-full
          items-center
          justify-between
          overflow-x-auto
          pl-[16px]
          pr-[16px]
          sm:pl-[30px]
          sm:pr-[30px]
          md:pl-[50px]
          md:pr-[50px]
          lg:pl-[80px]
          lg:pr-[80px]
          xl:pl-[100px]
          xl:pr-[100px]
          2xl:pl-[125px]
          2xl:pr-[125px]
        "
      >
        {/* LEFT GROUP */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-[10px]
            sm:gap-[12px]
            md:gap-[16px]
          "
        >
          {/* Skip to Main Content */}
          <span
            className="
              whitespace-nowrap
              font-['Outfit']
              text-[11px]
              font-normal
              leading-[100%]
              text-white
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            Skip to Main Content
          </span>

          {/* Separator */}
          <span className="h-[10px] w-[1px] shrink-0 bg-[#4A4A4A]" />

          {/* Screen Reader */}
          <span
            className="
              whitespace-nowrap
              font-['Outfit']
              text-[11px]
              font-normal
              leading-[100%]
              text-white
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            Screen Reader
          </span>

          {/* Separator */}
          <span className="h-[10px] w-[1px] shrink-0 bg-[#4A4A4A]" />

          {/* Sitemap */}
          <span
            className="
              whitespace-nowrap
              font-['Outfit']
              text-[11px]
              font-normal
              leading-[100%]
              text-white
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            Sitemap
          </span>
        </div>

        {/* RIGHT GROUP */}
        <div
          className="
            ml-auto
            flex
            shrink-0
            items-center
            gap-[6px]
            sm:gap-[8px]
            md:gap-[10px]
            lg:gap-[16px]
          "
        >
          {/* A+ */}
          <span
            className="
              flex
              h-[26px]
              w-[39px]
              shrink-0
              items-center
              justify-center
              rounded-[2px]
              bg-[#001052]
              font-['Poppins']
              text-[13px]
              font-normal
              leading-[100%]
              text-white
              md:text-[14px]
            "
          >
            A+
          </span>

          {/* A */}
          <span
            className="
              flex
              h-[26px]
              w-[30px]
              shrink-0
              items-center
              justify-center
              rounded-[2px]
              bg-[#001052]
              font-['Poppins']
              text-[13px]
              font-normal
              leading-[100%]
              text-white
              md:text-[14px]
            "
          >
            A
          </span>

          {/* A- */}
          <span
            className="
              flex
              h-[26px]
              w-[36px]
              shrink-0
              items-center
              justify-center
              rounded-[2px]
              bg-[#001052]
              font-['Poppins']
              text-[13px]
              font-normal
              leading-[100%]
              text-white
              md:text-[14px]
            "
          >
            A-
          </span>

          {/* Sun */}
          <span
            className="
              flex
              h-[26px]
              w-[26px]
              shrink-0
              items-center
              justify-center
              rounded-[2px]
              bg-[#001052]
            "
          >
            <Sun
              size={16}
              strokeWidth={2}
              className="text-white"
            />
          </span>

          {/* Separator */}
          <span className="hidden h-[20px] w-[1px] shrink-0 bg-[#313131] sm:block" />

          {/* English */}
          <span
            className="
              flex
              h-[26px]
              w-[89px]
              shrink-0
              items-center
              justify-center
              gap-[4px]
              rounded-[2px]
              bg-[#001052]
              font-['Poppins']
              text-[13px]
              font-normal
              leading-[100%]
              text-white
              md:text-[14px]
            "
          >
            English

            <ChevronDown
              size={14}
              strokeWidth={2}
              className="text-white"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityBar;