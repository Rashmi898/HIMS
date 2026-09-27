

import odishaGovtLogo from "../assets/odisha-govt-logo.png";
import himsLogo from "../assets/hims-logo.png";
import cmProfile from "../assets/cm-profile.png";
import secondOfficialProfile from "../assets/second-official-profile.png";

const MainHeader = () => {
  return (
    <header className="h-[90px] w-full bg-white">
      <div
        className="
          flex
          h-full
          w-full
          items-center
          justify-between
          pl-[16px]
          pr-[16px]
          min-[640px]:pl-[30px]
          min-[640px]:pr-[30px]
          min-[768px]:pl-[50px]
          min-[768px]:pr-[50px]
          min-[1024px]:pl-[80px]
          min-[1024px]:pr-[80px]
          min-[1280px]:pl-[100px]
          min-[1280px]:pr-[100px]
          min-[1536px]:pl-[125px]
          min-[1536px]:pr-[125px]
        "
      >
        {/* ================= LEFT SIDE ================= */}
        <div className="flex shrink-0 items-center">
          {/* Odisha Government Logo */}
          <img
            src={odishaGovtLogo}
            alt="Odisha Government"
            className="
              h-[45px]
              w-[40px]
              object-contain
              min-[1024px]:h-[56.01px]
              min-[1024px]:w-[50px]
            "
          />

          {/* HIMS Logo */}
          <img
            src={himsLogo}
            alt="HIMS"
            className="
              relative
              left-[42px]
              h-[42px]
              w-[130px]
              object-contain
              min-[1024px]:left-[40px]
              min-[1024px]:h-[50px]
              min-[1024px]:w-[156px]
            "
          />
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-[12px]
            min-[1280px]:gap-[18px]
            min-[1536px]:gap-[20px]
          "
        >
          {/* ================= CM PROFILE ================= */}
          <div
            className="
              flex
              h-[80px]
              w-auto
              items-center
            "
          >
            {/* CM Profile Image */}
            <img
              src={cmProfile}
              alt="Hon'ble Chief Minister"
              className="
                h-[60px]
                w-[60px]
                object-contain
                min-[1024px]:h-[80px]
                min-[1024px]:w-[80px]
              "
            />

            {/* CM Details */}
            <div
              className="
                ml-[8px]
                hidden
                min-[768px]:block
                min-[1024px]:ml-[10px]
              "
            >
              <p
                className="
                  whitespace-nowrap
                  font-['Poppins']
                  text-[11px]
                  font-bold
                  leading-[100%]
                  text-black
                  min-[1024px]:text-[14px]
                "
              >
                Sri Mohan Charan Majhi
              </p>

              <p
                className="
                  mt-[5px]
                  whitespace-nowrap
                  font-['Poppins']
                  text-[9px]
                  font-medium
                  leading-[100%]
                  text-black
                  min-[1024px]:mt-[4px]
                  min-[1024px]:text-[12px]
                "
              >
                Hon'ble Chief Minister
              </p>
            </div>
          </div>

          {/* ================= SECOND OFFICIAL ================= */}
          <div
            className="
              flex
              h-[80px]
              w-auto
              items-center
            "
          >
            {/* Profile Image */}
            <img
              src={secondOfficialProfile}
              alt="Sri Suryabanshi Suraj"
              className="
                h-[60px]
                w-[60px]
                object-contain
                min-[1024px]:h-[80px]
                min-[1024px]:w-[80px]
              "
            />

            {/* Details */}
            <div
              className="
                ml-[8px]
                hidden
                min-[768px]:block
                min-[1024px]:ml-[10px]
              "
            >
              <p
                className="
                  whitespace-nowrap
                  font-['Poppins']
                  text-[11px]
                  font-bold
                  leading-[100%]
                  text-black
                  min-[1024px]:text-[14px]
                "
              >
                Sri Suryabanshi Suraj
              </p>

              <p
                className="
                  mt-[5px]
                  whitespace-nowrap
                  font-['Poppins']
                  text-[9px]
                  font-medium
                  leading-[100%]
                  text-black
                  min-[1024px]:mt-[4px]
                  min-[1024px]:text-[12px]
                "
              >
                Hon'ble Minister of Higher Education
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
