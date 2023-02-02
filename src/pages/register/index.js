// import Header from "../../component/header";

const Register = () => {
  return (
    <>
      {/* <Header /> */}
      <div></div>
      <div className="h-[100vh] px-[20px] py-[30px] bg-slate-200 sm:flex justify-evenly">
        <div className="invisible w-[0px] h-[0px] max-sm:hidden sm:visible p-[10px] w-[30vw] h-[90vh] bg-hero bg-no-repeat">
          <img
            src={require("../../assets/img/app-logo-white.png")}
            className="h-[20px] w-[60px] m-[20px]"
          />
          <h1 className="font-bold m-[20px] text-[35px] text-[#FFFFFF]">
            Temukan developer berbakat & terbaik di berbagai bidang keahlian
          </h1>
          {/* <img
            src={require("../../assets/img/background1purple.png")}
            className="h-[100%] w-[100%]"
            alt=""
          /> */}
          {/* <div className="bg-purple-500 h-[100%] w-[100%] z-[1] inset-0"></div> */}
        </div>
        <div className="p-[10px]">
          <div className="header my-[20px]  visible sm:invisible">
            <img src={require("../../assets/img/app-logo.png")} alt="" />
          </div>
          <h1 className="text-[30px] font-bold">Sign Up</h1>
          <h2>Lorom ipsum dolor si amet uegas anet.</h2>
          <div className="input my-[10px]">
            <label className="block">Nama</label>
            <input
              className="block border-[1px] mb-[16px] w-[100%] md:w-[100%]"
              type="text"
            ></input>
            <label className="block ">Email</label>
            <input
              className="block border-[1px] mb-[16px] w-[100%] md:w-[100%]"
              type="email"
            ></input>
            <label className="block">No. Handphone</label>
            <input
              className="block border-[1px] mb-[16px] w-[100%] md:w-[100%]"
              type="phone"
            ></input>
            <label className="block">Kode Sandi</label>
            <input
              className="block border-[1px] mb-[16px] w-[100%] md:w-[100%]"
              type="password"
            ></input>
            <label className="block">konfirmasi kode sandi</label>
            <input
              className="block border-[1px] mb-[16px] w-[100%] md:w-[100%]"
              type="password"
            ></input>
          </div>
          <button className="btn width-[100%] bg-yellow-500 w-[100%] rounded">
            Daftar
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
