import aboutUsBg from "../assets/aboutUsBg.png";
import aboutUsImage from "../assets/aboutUsImage.png";
import aboutUsTitleBg from "../assets/image.png";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  return (
    <section
      className="
        relative
        h-[500px]
        w-full
        overflow-hidden
        bg-[#D9D9D9]
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: `url(${aboutUsBg})`,
      }}
    >
      {/* ================= MAIN CONTAINER ================= */}
      <div
        className="
          relative
          mx-auto
          h-full
          w-full
          max-w-[1286px]
        "
      >

        {/* ================= STUDENT IMAGE ================= */}
        <img
          src={aboutUsImage}
          alt="Students"
          className="
            absolute
            left-[30px]
            top-[29px]
            h-[420px]
            w-[420px]
            object-contain

            xl:left-[60px]
            xl:h-[460px]
            xl:w-[460px]

            2xl:left-[90px]
            2xl:h-[500px]
            2xl:w-[500px]
          "
        />

        {/* ================= YELLOW TITLE BACKGROUND ================= */}
        <img
          src={aboutUsTitleBg}
          alt=""
          className="
            absolute
            left-[450px]
            top-[85px]
            z-10
            h-[17px]
            w-[190px]
            object-contain

            xl:left-[550px]
            xl:top-[92px]
            xl:w-[205px]

            2xl:left-[650px]
            2xl:top-[98px]
            2xl:h-[17px]
            2xl:w-[214px]
          "
        />

        {/* ================= WHO WE ARE ================= */}
        <h2
          className="
            absolute
            left-[470px]
            top-[60px]
            z-20
            font-['Outfit']
            text-[40px]
            font-bold
            leading-[100%]
            tracking-[0%]
            text-[#2A2928]

            xl:left-[570px]
            xl:top-[65px]
            xl:text-[44px]

            2xl:left-[670px]
            2xl:top-[70px]
            2xl:text-[47px]
          "
        >
          Who we are
        </h2>

        {/* ================= DESCRIPTION ================= */}
        <p
          className="
            absolute
            left-[450px]
            top-[125px]
            z-20
            w-[540px]
            font-['Outfit']
            text-[13px]
            font-normal
            leading-[21px]
            tracking-[0%]
            text-[#373434]

            xl:left-[550px]
            xl:top-[130px]
            xl:w-[650px]
            xl:text-[14px]
            xl:leading-[23px]

            2xl:left-[650px]
            2xl:top-[130px]
            2xl:w-[800px]
            2xl:text-[15px]
            2xl:leading-[25px]
          "
        >
          The Higher Education Information Management System (HIMS) is an
          integrated digital platform that streamlines the management of higher
          education institutions. It efficiently manages academic, administrative,
          and student-related processes through modules such as admissions,
          attendance, examinations, faculty management, and course planning. HIMS
          ensures accurate and transparent data handling while supporting informed
          decision-making through real-time analytics and reporting. The system
          enables seamless communication among students, faculties, and
          administrators, enhancing overall institutional efficiency. It also
          supports regulatory compliance by maintaining organized and reliable
          records.
        </p>

        {/* ================= READ MORE BUTTON ================= */}
        <button
          className="
            absolute
            left-[445px]
            top-[330px]
            z-30
            flex
            h-[45px]
            w-[150px]
            items-center
            justify-center
            gap-[8px]
            rounded-[25px]
            bg-[#FF941E]

            xl:left-[545px]
            xl:top-[330px]
            xl:h-[48px]
            xl:w-[158px]

            2xl:left-[645px]
            2xl:top-[330px]
            2xl:h-[50px]
            2xl:w-[167px]
          "
        >
          <span
            className="
              font-['Outfit']
              text-[16px]
              font-medium
              leading-[100%]
              text-white

              2xl:text-[18px]
            "
          >
            Read More
          </span>

          <span
            className="
              flex
              h-[28px]
              w-[28px]
              items-center
              justify-center
              rounded-full
              bg-white

              2xl:h-[30px]
              2xl:w-[30px]
            "
          >
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="text-black"
            />
          </span>
        </button>

      </div>
    </section>
  );
};

export default AboutUs;
