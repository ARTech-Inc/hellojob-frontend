<<<<<<< HEAD
import bell from '../../assets/img/bell.png'
import mail from '../../assets/img/mail.png'
import avatar from '../../assets/img/avatar.png'

function LoginNav(){
    return(
        <>
            <div className="navbar bg-base-100 px-[5vw]">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">HelloJob</a>
                </div>

                <div className="flex-none">
                    <div className="dropdown dropdown-end px-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <img src={bell} alt="bell" className="h-5 w-5"/>
                        <span className="badge badge-sm indicator-item">0</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                        <span className="font-bold text-sm text-center">You don't have any notification yet</span>
                        </div>
                    </div>
                    </div>

                    <div className="dropdown dropdown-end px-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <img src={mail} alt="bell" className="h-5 w-5"/>
                        <span className="badge badge-sm indicator-item">0</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                        <span className="font-bold text-sm text-center">You don't have any message yet</span>
                        </div>
                    </div>
                    </div>

                    <div className="dropdown dropdown-end px-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src={avatar} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginNav
=======
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
>>>>>>> 4d7f2789077f29d9f6302059a671a9796935c9f6
