import importantLinksBg from "../assets/importantLinksBg.png";
import aboutUsTitleBg from "../assets/image.png";
import grievanceBg from "../assets/grievanceBg.png";
import shaktishreeLogoWhite from "../assets/shaktishreeLogoWhite.png";
import { ArrowRight, Link2 } from "lucide-react";
import column4Bg from "../assets/column4Bg.png";

const GovernmentLinks = () => {
  return (
    <section
      className="
        relative
        w-full
        bg-white
        px-[16px]
        py-[40px]

        sm:px-[30px]
        md:px-[40px]
        lg:px-[50px]
        xl:px-[80px]
        2xl:px-[125px]
      "
    >
      {/* Main Grid */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1286px]
          grid-cols-1
          gap-[14px]
          md:grid-cols-2
          2xl:h-[440px]
          2xl:grid-cols-3
        "
      >
        {/* ================================================= */}
        {/* COLUMN 1 - IMPORTANT LINKS */}
        {/* ================================================= */}

        <div
          className="
            relative
            min-h-[440px]
            w-full
            rounded-[8px]
            bg-cover
            bg-center
            bg-no-repeat

            2xl:h-[440px]
          "
          style={{
            backgroundImage: `url(${importantLinksBg})`,
          }}
        >
          <div
            className="
              absolute
              left-[20px]
              right-[20px]
              top-[25px]

              lg:left-[30px]
              lg:right-[30px]
              lg:top-[30px]
            "
          >
            {/* TITLE */}
            <h3
              className="
                w-full
                font-['Outfit']
                text-[22px]
                font-medium
                leading-[100%]
                text-white

                sm:text-[25px]
                lg:text-[29px]
              "
            >
              Important Links
            </h3>

            {/* LINE */}
            <img
              src={aboutUsTitleBg}
              alt=""
              className="
                relative
                left-[70px]
                mt-[10px]
                h-[7px]
                w-[90px]
                object-contain

                lg:left-[103px]
                lg:mt-[12px]
                lg:h-[8px]
                lg:w-[104px]
              "
            />

            {/* LINK 1 */}
            <div
              className="
                mt-[20px]
                flex
                h-[36px]
                w-full
                max-w-[390px]
                items-center
                gap-[8px]
              "
            >
              <Link2
                size={12}
                strokeWidth={3}
                className="shrink-0 text-[#FF8C00]"
              />

              <span
                className="
                  min-w-0
                  truncate
                  font-['Outfit']
                  text-[13px]
                  font-medium
                  leading-[36px]
                  text-white

                  sm:text-[14px]
                  lg:text-[16px]
                "
              >
                Monday Virtual Grievance Hearing
              </span>
            </div>

            {/* LINK 2 */}
            <div
              className="
                flex
                h-[36px]
                w-full
                max-w-[390px]
                items-center
                gap-[8px]
              "
            >
              <Link2
                size={12}
                strokeWidth={3}
                className="shrink-0 text-[#FF8C00]"
              />

              <span
                className="
                  min-w-0
                  truncate
                  font-['Outfit']
                  text-[13px]
                  font-medium
                  leading-[36px]
                  text-white

                  sm:text-[14px]
                  lg:text-[16px]
                "
              >
                Government Order for online submission of GIA...
              </span>
            </div>

            {/* LINK 3 */}
            <div
              className="
                flex
                h-[36px]
                w-full
                max-w-[390px]
                items-center
                gap-[8px]
              "
            >
              <Link2
                size={12}
                strokeWidth={3}
                className="shrink-0 text-[#FF8C00]"
              />

              <span
                className="
                  min-w-0
                  truncate
                  font-['Outfit']
                  text-[13px]
                  font-medium
                  leading-[36px]
                  text-white

                  sm:text-[14px]
                  lg:text-[16px]
                "
              >
                IT HELP-DESK
              </span>
            </div>

            {/* LINK 4 */}
            <div
              className="
                flex
                h-[36px]
                w-full
                max-w-[390px]
                items-center
                gap-[8px]
              "
            >
              <Link2
                size={12}
                strokeWidth={3}
                className="shrink-0 text-[#FF8C00]"
              />

              <span
                className="
                  min-w-0
                  truncate
                  font-['Outfit']
                  text-[13px]
                  font-medium
                  leading-[36px]
                  text-white

                  sm:text-[14px]
                  lg:text-[16px]
                "
              >
                Lodge Grievance
              </span>
            </div>

            {/* LINK 5 */}
            <div
              className="
                flex
                h-[36px]
                w-full
                max-w-[390px]
                items-center
                gap-[8px]
              "
            >
              <Link2
                size={12}
                strokeWidth={3}
                className="shrink-0 text-[#FF8C00]"
              />

              <span
                className="
                  min-w-0
                  truncate
                  font-['Outfit']
                  text-[13px]
                  font-medium
                  leading-[36px]
                  text-white

                  sm:text-[14px]
                  lg:text-[16px]
                "
              >
                Update deadline for Self-Fin: 4 Aug 2025
              </span>
            </div>

            {/* LINK 6 */}
            <div
              className="
                flex
                h-[36px]
                w-full
                max-w-[390px]
                items-center
                gap-[8px]
              "
            >
              <Link2
                size={12}
                strokeWidth={3}
                className="shrink-0 text-[#FF8C00]"
              />

              <span
                className="
                  min-w-0
                  truncate
                  font-['Outfit']
                  text-[13px]
                  font-medium
                  leading-[36px]
                  text-white

                  sm:text-[14px]
                  lg:text-[16px]
                "
              >
                Self-Defense-Club-2025-26
              </span>
            </div>

            {/* LINK 7 */}
            <div
              className="
                flex
                h-[36px]
                w-full
                max-w-[390px]
                items-center
                gap-[8px]
              "
            >
              <Link2
                size={12}
                strokeWidth={3}
                className="shrink-0 text-[#FF8C00]"
              />

              <span
                className="
                  min-w-0
                  truncate
                  font-['Outfit']
                  text-[13px]
                  font-medium
                  leading-[36px]
                  text-white

                  sm:text-[14px]
                  lg:text-[16px]
                "
              >
                Management of Stray Dogs and Cattles
              </span>
            </div>

            {/* BUTTON */}
            <button
              className="
                absolute
                bottom-[-70px]
                left-0
                flex
                h-[45px]
                w-[155px]
                items-center
                justify-between
                rounded-[109px]
                bg-[#FF941E]
                px-[6px]
                pl-[18px]
                pr-[6px]

                sm:w-[165px]

                lg:h-[52px]
                lg:w-[188px]
                lg:pl-[22px]
              "
            >
              <span
                className="
                  font-['Outfit']
                  text-[14px]
                  font-medium
                  leading-[100%]
                  text-white

                  lg:text-[17px]
                "
              >
                View More
              </span>

              <span
                className="
                  flex
                  h-[34px]
                  w-[34px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white

                  lg:h-[40px]
                  lg:w-[40px]
                "
              >
                <ArrowRight
                  size={20}
                  strokeWidth={2.5}
                  className="text-black"
                />
              </span>
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* COLUMN 2 */}
        {/* ================================================= */}

        <div
          className="
            grid
            h-auto
            w-full
            grid-cols-1
            gap-[14px]

            2xl:h-full
            2xl:grid-rows-[1fr_1fr]
          "
        >
          {/* TOP CARD */}
          <div
            className="
              relative
              min-h-[210px]
              w-full
              overflow-hidden
              rounded-[8px]
              bg-cover
              bg-center
              bg-no-repeat

              2xl:h-auto
            "
            style={{
              backgroundImage: `url(${grievanceBg})`,
            }}
          >
            <p
              className="
                absolute
                left-[20px]
                right-[20px]
                top-[35px]

                font-['Roboto']
                text-[14px]
                font-medium
                leading-[120%]
                text-white

                lg:text-[15px]
              "
            >
              It's the first step toward change, and change begins when we
              speak up.
            </p>

            <button
              className="
                absolute
                left-[20px]
                top-[105px]
                flex
                h-[45px]
                w-[145px]
                items-center
                justify-between
                rounded-[43px]
                bg-white
                px-[8px]
                pl-[18px]

                lg:h-[50px]
                lg:w-[171px]
                lg:px-[18px]
              "
            >
              <span
                className="
                  font-['Roboto']
                  text-[15px]
                  font-semibold
                  leading-[100%]
                  text-[#363535]

                  lg:text-[18px]
                "
              >
                Grievance
              </span>

              <span
                className="
                  flex
                  h-[34px]
                  w-[34px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F5860C]

                  lg:h-[40px]
                  lg:w-[40px]
                "
              >
                <ArrowRight
                  size={22}
                  strokeWidth={2.5}
                  className="text-white"
                />
              </span>
            </button>
          </div>

          {/* BOTTOM CARD */}
          <div
            className="
              relative
              min-h-[210px]
              w-full
              overflow-hidden
              rounded-[15px]

              2xl:h-auto
            "
            style={{
              background:
                "radial-gradient(circle, #007DDA 0%, #004374 100%)",
            }}
          >
            <p
              className="
                absolute
                left-[20px]
                right-[20px]
                top-[35px]

                font-['Roboto']
                text-[14px]
                font-normal
                leading-[120%]
                text-white

                lg:text-[15px]
              "
            >
              Register today to unlock the Question Bank. Learn more,
              prepare better, achieve higher.
            </p>

            <button
              className="
                absolute
                left-[20px]
                top-[105px]
                flex
                h-[45px]
                w-[calc(100%-40px)]
                max-w-[313px]
                items-center
                justify-between
                rounded-[53px]
                bg-[#FF941E]
                px-[12px]
                pl-[18px]

                lg:h-[50px]
                lg:px-[26px]
              "
            >
              <span
                className="
                  min-w-0
                  truncate
                  font-['Roboto']
                  text-[14px]
                  font-semibold
                  leading-[100%]
                  text-white

                  lg:text-[18px]
                "
              >
                Question Bank Registration
              </span>

              <span
                className="
                  flex
                  h-[34px]
                  w-[34px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                "
              >
                <ArrowRight
                  size={21}
                  strokeWidth={2.5}
                  className="text-black"
                />
              </span>
            </button>
          </div>
        </div>

        {/* ================================================= */}
        {/* COLUMN 3 - SHAKTISHREE */}
        {/* ================================================= */}
        <div
  className="
    relative
    h-[440px]
    w-full
    overflow-hidden
    rounded-[15px]
    bg-[#004374]
     sm:h-[400px]
    md:h-[420px]
    lg:h-[440px]
    2xl:h-[440px]
  "
>
  {/* Background Image */}
  <img
    src={column4Bg}
    alt=""
    className="
    pointer-events-none
      absolute
      inset-0
      h-full
      w-full
      object-cover
      opacity-[0.10]
    "
  />
  {/* Content */}
  <div
    className="
      relative
      left-[22px]
      right-[22px]
      top-[28px]
      z-10
       w-[calc(100%-44px)]

      sm:left-[20px]
      sm:top-[25px]
      sm:w-[calc(100%-40px)]

      md:left-[22px]
      md:top-[28px]
      md:w-[calc(100%-44px)]

      lg:left-[22px]
      lg:top-[28px]
      lg:w-[calc(100%-44px)]
    
    "
  >
    {/* Logo */}
    <img
      src={shaktishreeLogoWhite}
      alt="Shaktishree"
      className="
      block
        h-[55px]
        w-[170px]
        object-contain
        object-left
          sm:h-[50px]
        sm:w-[155px]

        md:h-[52px]
        md:w-[160px]

        lg:h-[55px]
        lg:w-[170px]
      "
    />
    <p
  className="
   relative
   top-[20px]
        block
        w-full
        max-w-[395px]
        whitespace-normal
        break-words
        font-['Outfit']
        text-[15px]
        font-normal
        leading-[19px]
        text-white
         sm:text-[13px]
        sm:leading-[18px]

        md:text-[14px]
        md:leading-[19px]

        lg:text-[15px]
        lg:leading-[19px]
  "
>
  Shaktishree empowers young women with confidence, safety, and
  leadership. From self-defense to mentorship, it’s a movement
  shaping fearless futures.
</p>
{/* Discover Text */}
<p
  className="
    relative
    top-[40px]
    mt-[14px]
    block
    w-full
    max-w-[395px]
    whitespace-normal
    break-words
    font-['Outfit']
    text-[17px]
    font-semibold
    leading-[20px]
    text-white
     sm:text-[14px]
        sm:leading-[19px]

        md:text-[15px]
        md:leading-[20px]

        lg:text-[17px]
        lg:leading-[20px]
  "
>
  Click to discover how Shaktishree is transforming campuses across
  Odisha.
</p>
{/* Join Now Button */}
<button
  className="
    relative
    top-[100px]
    mt-[18px]
    flex
    h-[43px]
    w-[160px]
    items-center
    justify-between
    rounded-[52px]
    bg-white
    px-[14px]
     sm:h-[40px]
        sm:w-[150px]

        md:h-[42px]
        md:w-[155px]

        lg:h-[43px]
        lg:w-[160px]
        lg:px-[14px]
  "
>
  <span
    className="
      font-['Roboto']
      text-[15px]
      font-semibold
      leading-[100%]
      text-[#363535]
       sm:text-[13px]

          md:text-[14px]

          lg:text-[15px]
    "
  >
    Join Now
  </span>

  <span
    className="
      flex
      h-[27px]
      w-[27px]
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-[#F5860C]
       sm:h-[26px]
          sm:w-[26px]

          md:h-[27px]
          md:w-[27px]
    "
  >
    <ArrowRight
      size={16}
      strokeWidth={2.5}
      className="text-white"
    />
  </span>
</button>
  </div>
</div>

        
      </div>
    </section>
  );
};

export default GovernmentLinks;