import Header from "../../component/header";
import Footer from "../../component/footer";

const UserProfile = () => {
  return (
    <>
      <Header />
      <div className="px-[200px] py-[20px] flex justify-center bg-gradient-to-b from-purple-500">
        <div className="border-[1px] bg-white border-gray shadow-2xl p-[20px] mx-[10px]">
          <div className="flex justify-center">
            <img
              src={require("../../assets/img/background1.png")}
              className="w-[100px] h-[100px] rounded-full"
            />
          </div>
          <h1 className="font-bold text-[30px]">Fulan</h1>
          <a className="text-gray-500 text-[20px] block">Web Developer</a>
          <a className="text-gray-500 text-[20px] block">Freelancer</a>
          <a className="text-gray-500 text-[20px] block">
            Purwokerto, Jawa Timur
          </a>
          <a className="text-gray-500 text-[20px] block">0821111111</a>
          <h3 className="w-[200px] py-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu
            lacus fringilla, vestibulum risus at.
          </h3>
          <button className="btn w-[100%] bg-purple-500 rounded">Hire</button>
          <div>
            <h1 className="font-bold text-[20px] py-[10px]">Skill</h1>
            <div className="w-[100%] flex">
              <div className="border-[1px] px-[10px] rounded bg-yellow-500">
                test
              </div>
              <div className="border-[1px] px-[10px] rounded bg-yellow-500">
                test
              </div>
              <div className="border-[1px] px-[10px] rounded bg-yellow-500">
                test
              </div>
              <div className="border-[1px] px-[10px] rounded bg-yellow-500">
                test
              </div>
              <div className="border-[1px] px-[10px] rounded bg-yellow-500">
                test
              </div>
            </div>
          </div>
        </div>
        <div className="border-[1px] bg-white border-gray shadow-2xl p-[20px] mx-[10px]">
          <div className="flex">
            <a className=" text-[30px] px-[10px] hover:border-[1px] font-bold">
              Portofolio
            </a>
            <a className=" text-[30px] px-[10px] hover:border-[1px] font-bold">
              Pengalaman Kerja
            </a>
          </div>
          <div className="hidden" id="portofolio">
            test
          </div>
          <div className="hidden" id="pengalaman-kerja">
            Halo
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
