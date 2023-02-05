import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  const [validate, setValidate] = useState({ error: false, message: "" });

  const HandleLogin = (event) => {
    event.preventDefault();

    axios({
      url: "http://localhost:5000/api/v1/auth/login",
      method: "POST",
      data: dataLogin,
    })
      .then((response) => {
        localStorage.setItem("@userLogin", JSON.stringify(response.data.data));
        navigate("/home");
      })
      .catch((err) => {
        setValidate({ error: true, message: err.response.data.message });
        // navigate("/login");
      });
  };

  useEffect(() => {
    navigate("/login");
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <main className="h-[100vh] w-full">
        <section className="h-full flex justify-center items-center flex-wrap">
          <div className=" bg-gray-100 h-[60] flex items-center flex-wrap">
            <div className="w-[30vw] flex flex-wrap">
              <img
                className="h-full w-full "
                src={require("../../assets/img/background1purple.png")}
                alt="img-h"
              />
            </div>

            <form onSubmit={HandleLogin}>
              <div className="form mx-4">
                <h1 className="text-4xl text-center font-semibold mb-5">
                  Log In
                </h1>
                <div className="form-group mb-5">
                  <label>Email</label>
                  <input
                    onChange={(e) => {
                      setDataLogin({
                        ...dataLogin,
                        email: e.target.value,
                      });
                    }}
                    type="email"
                    placeholder="Input your username"
                    className="input input-bordered w-full max-w-xs form-control"
                  />
                </div>
                <div className="form-group mb-5">
                  <label>Password</label>
                  <input
                    onChange={(e) => {
                      setDataLogin({
                        ...dataLogin,
                        password: e.target.value,
                      });
                    }}
                    type="password"
                    placeholder="Input your password"
                    className="input input-bordered w-full max-w-xs form-control"
                  />
                </div>
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
                <div className="button w-100">
                  <button
                    type="submit"
                    className="btn btn-warning text-white hover:btn-primary btn-wide"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
