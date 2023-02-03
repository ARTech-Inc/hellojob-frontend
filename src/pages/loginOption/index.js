import { Link } from "react-router-dom";

const LoginOption = () => {
  return (
    <>
      <div className="bg-hero bg-cover h-[100vh]">
        <img
          src={require("../../assets/img/app-logo-white.png")}
          className="w-[100px] pt-[50px] pl-[20px]"
        />
        <h1 className="pt-[50px] px-[20px] pb-[100px] font-bold text-[#FFFFFF] text-[30px]">
          Temukan developer berbakat & terbaik di berbagai bidang keahlian
        </h1>
        <div className="visible sm:hidden">
          <div className="flex justify-center pt-[100px]">
            <Link to="/register">
              <button className="rounded bg-[#FFFFFF] mx-[10px] w-[100%]">
                Daftar sebagai pekerja
              </button>
            </Link>
          </div>
          <div className="flex justify-center py-[10px]">
            <h1>Atau sebagai</h1>
          </div>
          <div className="flex justify-center">
            <Link to="/registerHire">
              <button className="rounded bg-[#FFFFFF] mx-[10px] w-[100%]">
                Daftar sebagai perekrut
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default LoginOption;
