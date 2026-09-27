import {
  School,
  University,
  HandHelping,
  GraduationCap,
} from "lucide-react";

const StatsSection = () => {
  return (
    <section className="min-h-[250px] w-full bg-[#0179D3]">
      <div
        className="
          grid
          min-h-[250px]
          w-full
          grid-cols-1
          items-center
          sm:grid-cols-2
          lg:grid-cols-4
          px-[15px]
          sm:px-[30px]
          lg:px-[50px]
          xl:px-[80px]
          2xl:px-[125px]
        "
      >
        {/* ========================= */}
        {/* STAT 1 */}
        {/* ========================= */}

        <div
          className="
            flex
            min-h-[155px]
            items-center
            justify-center
            border-b-[2px]
            border-[#0069B8]
            sm:border-r-[2px]
            sm:border-b-0
            lg:border-r-[2px]
          "
        >
          <div
            className="
              flex
              h-[155px]
              w-full
              max-w-[202px]
              translate-y-[5px]
              flex-col
              items-center
            "
          >
            {/* Icon */}
            <div className="flex h-[60px] w-[60px] items-center justify-center">
              <School
                size={60}
                strokeWidth={1.8}
                className="text-white"
              />
            </div>

            {/* Title */}
            <p
              className="
                mt-[5px]
                h-[33px]
                w-full
                text-center
                font-['Outfit']
                text-[26px]
                font-semibold
                leading-[100%]
                text-white
              "
            >
              Total Universities
            </p>

            {/* Number */}
            <p
              className="
                h-[50px]
                w-full
                text-center
                font-['Outfit']
                text-[50px]
                font-semibold
                leading-[50px]
                text-white
              "
            >
              12
            </p>
          </div>
        </div>

        {/* ========================= */}
        {/* STAT 2 */}
        {/* ========================= */}

        <div
          className="
            flex
            min-h-[155px]
            items-center
            justify-center
            border-b-[2px]
            border-[#0069B8]
            sm:border-b-0
            sm:border-r-[2px]
            lg:border-r-[2px]
          "
        >
          <div
            className="
              flex
              h-[155px]
              w-full
              max-w-[202px]
              flex-col
              items-center
            "
          >
            {/* Icon */}
            <div className="flex h-[60px] w-[60px] items-center justify-center">
              <University
                size={60}
                strokeWidth={1.8}
                className="text-white"
              />
            </div>

            {/* Title */}
            <p
              className="
                mt-[5px]
                h-[33px]
                w-full
                text-center
                font-['Outfit']
                text-[26px]
                font-semibold
                leading-[100%]
                text-white
              "
            >
              Total College
            </p>

            {/* Number */}
            <p
              className="
                h-[50px]
                w-full
                text-center
                font-['Outfit']
                text-[50px]
                font-semibold
                leading-[50px]
                text-white
              "
            >
              18,91
            </p>
          </div>
        </div>

        {/* ========================= */}
        {/* STAT 3 */}
        {/* ========================= */}

        <div
          className="
            flex
            min-h-[155px]
            items-center
            justify-center
            border-b-[2px]
            border-[#0069B8]
            sm:border-r-[2px]
            sm:border-b-0
            lg:border-r-[2px]
          "
        >
          <div
            className="
              flex
              h-[155px]
              w-full
              max-w-[202px]
              flex-col
              items-center
            "
          >
            {/* Icon */}
            <div className="flex h-[60px] w-[60px] items-center justify-center">
              <HandHelping
                size={60}
                strokeWidth={1.8}
                className="text-white"
              />
            </div>

            {/* Title */}
            <p
              className="
                mt-[5px]
                h-[33px]
                w-full
                text-center
                font-['Outfit']
                text-[26px]
                font-semibold
                leading-[100%]
                text-white
              "
            >
              Total Faculty
            </p>

            {/* Number */}
            <p
              className="
                h-[50px]
                w-full
                text-center
                font-['Outfit']
                text-[50px]
                font-semibold
                leading-[50px]
                text-white
              "
            >
              14,000
            </p>
          </div>
        </div>

        {/* ========================= */}
        {/* STAT 4 */}
        {/* ========================= */}

        <div
          className="
            flex
            min-h-[155px]
            items-center
            justify-center
          "
        >
          <div
            className="
              flex
              h-[155px]
              w-full
              max-w-[248px]
              flex-col
              items-center
            "
          >
            {/* Icon */}
            <div className="flex h-[60px] w-[60px] items-center justify-center">
              <GraduationCap
                size={60}
                strokeWidth={1.8}
                className="text-white"
              />
            </div>

            {/* Title */}
            <p
              className="
                mt-[5px]
                h-[33px]
                w-full
                text-center
                font-['Outfit']
                text-[26px]
                font-semibold
                leading-[100%]
                text-white
              "
            >
              Total Students
            </p>

            {/* Number */}
            <p
              className="
                h-[50px]
                w-full
                text-center
                font-['Outfit']
                text-[50px]
                font-semibold
                leading-[50px]
                text-white
              "
            >
              12,595,623
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;