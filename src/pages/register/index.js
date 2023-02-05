// import Header from "../../component/header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [validate, setValidate] = useState({ error: false, message: "" });
  const Navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    console.log(registerForm);
    // axios({
    //   url: "",
    //   method: "POST",
    //   data: registerForm,
    // })
    //   .then((res) => {
    //     console.log(res.data.data);
    //     Navigate("/");
    //   })
    //   .catch((err) => {
    //     setValidate({ error: true, message: err.message });
    //   });
  };

  return (
    <>
      {/* <Header /> */}
      <form onSubmit={handleRegister}>
        <div className="h-[100vh] px-[20px] py-[30px] bg-slate-200 sm:flex justify-evenly">
          {validate.error && (
            <div className="alert alert-error shadow-lg my-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{validate.message}</span>
              </div>
            </div>
          )}
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
            <div className="header my-[20px]  visible sm:hidden">
              <img src={require("../../assets/img/app-logo.png")} alt="" />
            </div>
            <h1 className="text-[30px] font-bold">Sign Up</h1>
            <h2>Lorom ipsum dolor si amet uegas anet.</h2>
            <div className="my-[10px]">
              <label className="block">Nama</label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    name: e.target.value,
                  })
                }
                className="block border-[1px] mb-[16px] w-[100%] md:w-[100%]"
                type="text"
              ></input>
              <label className="block ">Email</label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    email: e.target.value,
                  })
                }
                className="block border-[1px] mb-[16px] w-[100%] md:w-[100%]"
                type="email"
              ></input>
              <label className="block">No. Handphone</label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    phone: e.target.value,
                  })
                }
                className="block border-[1px] mb-[16px] w-[100%] md:w-[100%]"
                type="phone"
              ></input>
              <label className="block">Kode Sandi</label>
              <input
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    password: e.target.value,
                  })
                }
                className="block border-[1px] mb-[16px] w-[100%] md:w-[100%]"
                type="password"
              ></input>
              <label className="block">konfirmasi kode sandi</label>
              <input
                className="block border-[1px] mb-[16px] w-[100%] md:w-[100%]"
                type="password"
              ></input>
              <button className="btn width-[100%] bg-yellow-500 w-[100%] rounded">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
