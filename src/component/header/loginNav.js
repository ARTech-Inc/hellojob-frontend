import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="p-[20px] flex justify-between">
        <img
          src={require("../../assets/img/app-logo.png")}
          className="m-[10px]"
          alt=""
        />
        <div className="flex">
          <Link
            to={"/login"}
            className="btn px-[10px] border-[2px] border-[#5E50A1] font-bold text-[#5E50A1] mx-[10px] rounded"
          >
            Masuk
          </Link>
          <button className="btn px-[10px] border-[1px] bg-[#5E50A1] font-bold text-[#FFFFFF] mx-[10px] rounded">
            <Link to="/loginOption">Daftar</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
