import bell from '../../assets/img/bell.png'
import mail from '../../assets/img/mail.png'
import avatar from '../../assets/img/avatar.png'
import { Navigate, Link } from 'react-router-dom'

function LoginNav({setIsLogin}){
    setIsLogin(true)
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
                        <li><a
                        onClick={()=>{
                            localStorage.removeItem('@userLogin')
                            setIsLogin(false)
                        }}
                        >Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginNav
