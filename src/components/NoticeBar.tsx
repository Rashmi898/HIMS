import { X } from "lucide-react";

const NoticeBar = () => {
  return (
    <section
      className="
        relative
        flex
        h-[80px]
        w-full
        items-center
        justify-center
        bg-[#ECECEC]

        sm:h-[70px]

        md:h-[60px]
      "
    >
      {/* Text */}
      <p
        className="
          w-full
          px-[20px]
          text-center
          font-['Outfit']
          text-[14px]
          font-normal
          leading-[100%]
          tracking-[0%]
          text-[#000000]

          sm:px-[30px]
          sm:text-[16px]

          md:max-w-[1077px]
          md:px-0
          md:text-[18px]
        "
      >
        Infra-Grant Proposals should not be submitted through FMS from 7th
        January, 2026. Further information would be communicated soon.
      </p>

      {/* Cross */}
      <button
        type="button"
        className="
          absolute
          right-[10.26%]
          flex
          h-[26px]
          w-[26px]
          items-center
          justify-center
          rounded-full
          bg-[#FFB059]
        "
      >
        <X
          size={14}
          strokeWidth={2}
          className="text-black"
        />
      </button>
    </section>
  );
};

export default NoticeBar;