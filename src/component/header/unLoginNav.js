import { Link } from "react-router-dom";

const UnLogin = ({ setIslogin }) => {
  return (
    <>
      <div className="p-[20px] flex justify-between">
        <img
          src={require("../../assets/img/app-logo.png")}
          className="m-[10px]"
          alt=""
        />
        <div className="flex">
          <button className="btn px-[10px] border-[2px] border-[#5E50A1] font-bold text-[#5E50A1] mx-[10px] rounded">
            <Link to="/login">Masuk</Link>
          </button>
          <button className="btn px-[10px] border-[1px] bg-[#5E50A1] font-bold text-[#FFFFFF] mx-[10px] rounded">
            <Link to="/registerOption">Daftar</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default UnLogin;
