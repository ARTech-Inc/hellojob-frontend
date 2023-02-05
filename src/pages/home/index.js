import LoginNav from "../../component/header/loginNav"
import {Link} from 'react-router-dom'
import Footer from "../../component/footer"

function Home(){
    return(
        <>
            <LoginNav/>
            <section className="header bg-[#5E50A1] px-[6vw] py-3">
                <h2 className="container text-white text-xl font-semibold">Top Jobs</h2>
            </section>

            <section className="container search mx-auto">
                <div className="w-full shadow-xl mt-5 flex space-x-7 p-3 items-center content-between rounded-md">
                    <input type="text" placeholder="Search for any skill" className="input flex-1"></input>
                    <img src={require("../../assets/img/search.png")} alt="search" />
                    
                    <div className="dropdown dropdown-end px-2">
                        <label tabIndex={0} className="btn btn-ghost">Sort</label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to={"/home"}>Sortir berdasarkan skill</Link>
                                <Link to={"/home"}>Sortir berdasarkan freelance</Link>
                                <Link to={"/home"}>Sortir berdasarkan fulltime</Link>
                            </ul>
                    </div>
                    <button className="btn bg-[#5E50A1] rounded-md">Search</button>
                </div>
            </section>
            
            <section className="workers container rounded-md mx-auto shadow-lg p-3 my-10 flex-col justify-between">
                <div className="flex items-center justify-between">
                    <div className="flex">
                    <img className="w-full mx-5 " src={require("../../assets/img/avatar2.png")} alt="" />
                    <div className="flex-col">
                        <h2 className="text-md font-semibold">Louis Tomlinson</h2>
                        <p className="text-[0.8rem]">Web Developer - Freelance </p>
                        <div className="flex space-x-1 pt-1">
                            <img className="w-5" src={require("../../assets/img/map-pin.png")}/>
                            <p className="text-[0.8rem]">Yogyakarta</p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">PHP</button>
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">Javascript</button>
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">HTML</button>
                        </div>
                    </div>
                </div>
                <button className="btn bg-[#5E50A1]">Lihat Profile</button>
                </div>
                
                <div className="flex items-center justify-between mt-10">
                    <div className="flex">
                    <img className="w-full mx-5" src={require("../../assets/img/avatar2.png")} alt="" />
                    <div className="flex-col">
                        <h2 className="text-md font-semibold">Louis Tomlinson</h2>
                        <p className="text-[0.8rem]">Web Developer - Freelance </p>
                        <div className="flex space-x-1 pt-1">
                            <img className="w-5" src={require("../../assets/img/map-pin.png")}/>
                            <p className="text-[0.8rem]">Yogyakarta</p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">PHP</button>
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">Javascript</button>
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">HTML</button>
                        </div>
                    </div>
                </div>
                <button className="btn bg-[#5E50A1]">Lihat Profile</button>
                </div>

                <div className="flex items-center justify-between mt-10">
                    <div className="flex">
                    <img className="w-full mx-5" src={require("../../assets/img/avatar2.png")} alt="" />
                    <div className="flex-col">
                        <h2 className="text-md font-semibold">Louis Tomlinson</h2>
                        <p className="text-[0.8rem]">Web Developer - Freelance </p>
                        <div className="flex space-x-1 pt-1">
                            <img className="w-5" src={require("../../assets/img/map-pin.png")}/>
                            <p className="text-[0.8rem]">Yogyakarta</p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">PHP</button>
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">Javascript</button>
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">HTML</button>
                        </div>
                    </div>
                </div>
                <button className="btn bg-[#5E50A1]">Lihat Profile</button>
                </div>

                <div className="flex items-center justify-between mt-10">
                    <div className="flex">
                    <img className="w-full mx-5" src={require("../../assets/img/avatar2.png")} alt="" />
                    <div className="flex-col">
                        <h2 className="text-md font-semibold">Louis Tomlinson</h2>
                        <p className="text-[0.8rem]">Web Developer - Freelance </p>
                        <div className="flex space-x-1 pt-1">
                            <img className="w-5" src={require("../../assets/img/map-pin.png")}/>
                            <p className="text-[0.8rem]">Yogyakarta</p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">PHP</button>
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">Javascript</button>
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">HTML</button>
                        </div>
                    </div>
                </div>
                <button className="btn bg-[#5E50A1]">Lihat Profile</button>
                </div>

                <div className="flex items-center justify-between mt-10">
                    <div className="flex">
                    <img className="w-full mx-5" src={require("../../assets/img/avatar2.png")} alt="" />
                    <div className="flex-col">
                        <h2 className="text-md font-semibold">Louis Tomlinson</h2>
                        <p className="text-[0.8rem]">Web Developer - Freelance </p>
                        <div className="flex space-x-1 pt-1">
                            <img className="w-5" src={require("../../assets/img/map-pin.png")}/>
                            <p className="text-[0.8rem]">Yogyakarta</p>
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">PHP</button>
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">Javascript</button>
                            <button className="bg-yellow-400 border-none text-[0.7rem] px-3 py-1 rounded-md mt-3 text-white font-bold">HTML</button>
                        </div>
                    </div>
                </div>
                <button className="btn bg-[#5E50A1]">Lihat Profile</button>
                </div>
            </section>

            <Footer/>
            
        </>
    )
}

export default Home