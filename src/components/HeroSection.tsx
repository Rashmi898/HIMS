
import heroBottomLeftDecoration from "../assets/hero-bottom-left-decoration.png";
import heroBuddhaGlow from "../assets/hero-buddha-glow.png";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        h-[600px]
        w-full
        overflow-hidden
        bg-[radial-gradient(circle_at_50%_45%,#132C96_0%,#061247_100%)]
      "
    >
      {/* ================= RIGHT BUDDHA + GLOW ================= */}
      <img
        src={heroBuddhaGlow}
        alt=""
        className="
          absolute
          left-[430px]
          top-[-150px]
          z-10
          h-[800px]
          w-[800px]
          object-contain

          xl:left-[500px]
          xl:top-[-175px]
          xl:h-[900px]
          xl:w-[900px]

          2xl:left-[600px]
          2xl:top-[-200px]
          2xl:h-[1049px]
          2xl:w-[1049px]
        "
      />

      {/* ================= BOTTOM-LEFT DECORATION ================= */}
      <img
        src={heroBottomLeftDecoration}
        alt=""
        className="
          absolute
          bottom-0
          left-0
          z-10
          h-[214px]
          w-[207px]
          object-contain
        "
      />

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-20 h-full w-full">

        {/* ================= HIGHER EDUCATION ================= */}
        <h1
          className="
            absolute
            left-[50px]
            top-[40px]
            font-['Outfit']
            text-[65px]
            font-normal
            leading-[78px]
            text-[#FF941E]

            xl:left-[80px]
            xl:text-[75px]

            2xl:left-[125px]
            2xl:text-[90px]
          "
        >
          Higher Education
        </h1>

        {/* ================= INFORMATION & MANAGEMENT SYSTEM ================= */}
        <h2
          className="
            absolute
            left-[50px]
            top-[105px]
            font-['Outfit']
            text-[38px]
            font-normal
            leading-[78px]
            tracking-[0%]
            text-white

            xl:left-[80px]
            xl:top-[110px]
            xl:text-[44px]

            2xl:left-[125px]
            2xl:top-[118px]
            2xl:text-[49px]
          "
        >
          Information & Management System
        </h2>

        {/* ================= HERO DESCRIPTION ================= */}
        <p
          className="
            absolute
            left-[50px]
            top-[190px]
            w-[650px]
            font-['Outfit']
            text-[17px]
            font-normal
            leading-[26px]
            tracking-[0%]
            text-white

            xl:left-[80px]
            xl:top-[200px]
            xl:w-[780px]
            xl:text-[18px]

            2xl:left-[125px]
            2xl:top-[205px]
            2xl:w-[900px]
            2xl:text-[20px]
          "
        >
          A unified digital platform for managing academic, administrative,
          and student services in higher education. Ensuring transparency,
          efficiency, and data-driven decision-making.
        </p>

        {/* ================= VIEW MORE BUTTON ================= */}
        <button
          className="
            absolute
            left-[50px]
            top-[275px]
            flex
            h-[54px]
            w-[178px]
            items-center
            gap-[24px]
            rounded-[38px]
            bg-[#FF941E]
            pl-[20px]
            pr-[10px]

            xl:left-[80px]
            xl:top-[280px]

            2xl:left-[125px]
            2xl:top-[290px]
          "
        >
          <span
            className="
              font-['Roboto']
              text-[18px]
              font-medium
              leading-[100%]
              text-black
            "
          >
            View More
          </span>

          <span
            className="
              ml-auto
              flex
              h-[28px]
              w-[28px]
              items-center
              justify-center
              rounded-full
              bg-[#EDDDDD]
            "
          >
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="text-black"
            />
          </span>
        </button>

        {/* ================= LOGIN BUTTON ================= */}
        <button
          className="
            absolute
            left-[245px]
            top-[275px]
            flex
            h-[54px]
            w-[175px]
            items-center
            gap-[47px]
            rounded-[38px]
            border
            border-[#FBFAF9]
            bg-transparent
            pl-[44px]
            pr-[8px]

            xl:left-[295px]
            xl:top-[280px]

            2xl:left-[320px]
            2xl:top-[290px]
          "
        >
          <span
            className="
              font-['Roboto']
              text-[18px]
              font-medium
              leading-[100%]
              text-white
            "
          >
            Login
          </span>

          <span
            className="
              flex
              h-[28px]
              w-[28px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#FF941E]
            "
          >
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="text-black"
            />
          </span>
        </button>

      </div>
    </section>
  );
};

export default HeroSection;