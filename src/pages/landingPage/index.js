import Header from "../../component/header";
import Footer from "../../component/footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="p-[20px] sm:p-[100px] w-[100%] bg-white-500">
        <div className="flex py-[30px] w-[100%]">
          <div className="p-[10px]">
            <h1 className="text-[50px] py-[10px]">
              Talenta terbaik negeri untuk perubahan revolusi 4.0
            </h1>
            <h2 className="block py-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </h2>
            <button className="btn px-[10px] bg-purple-500 rounded py-[10px] object-bottom text-[#FFFFFF] font-bold">
              Mulai Dari Sekarang
            </button>
          </div>
          <div className="flex justify-end w-[100%] py-[10px]  max-sm:hidden sm:visible">
            <img src={require("../../assets/img/background1.png")} />
          </div>
        </div>
        <div className="flex py-[30px] w-[100%]">
          <div className="flex justify-start w-[100%] py-[10px] max-sm:hidden sm:visible">
            <img src={require("../../assets/img/background2.png")} />
          </div>
          <div className="p-[10px]">
            <h1 className="text-[50px] py-[10px]">
              Kenapa harus mencari talent di peworld
            </h1>
            <ul className="list-disc p-[10px]">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
        <div className="flex py-[30px] w-[100%]">
          <div className="p-[10px]">
            <h1 className="text-[50px] py-[10px]">Skill Talent</h1>
            <h2 className="block py-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </h2>
            <div className="flex justify-evenly py-[10px]">
              <ul className="list-disc">
                <li>Java</li>
                <li>Kotlin</li>
                <li>PHP</li>
                <li>JavaScript</li>
              </ul>
              <ul className="list-disc">
                <li>Golang</li>
                <li>C++</li>
                <li>Ruby</li>
                <li>10+ Bahasa Lainnya</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end w-[100%] py-[10px] max-sm:hidden sm:visible">
            <img src={require("../../assets/img/background3.png")} />
          </div>
        </div>
        <div className="fourth section w-[100%]">
          <h1 className="py-[30px] text-center font-bold text-[25px]">
            Their Opinion About Peworld
          </h1>
          <div className="flex justify-around">
            <div className="border-[1px] border-gray shadow-2xl p-[20px]">
              <div className="flex justify-center">
                <img
                  src={require("../../assets/img/background1.png")}
                  className="w-[100px] h-[100px] rounded-full"
                />
              </div>
              <h1 className="text-center font-bold text-[30px]">Fulan</h1>
              <h2 className="text-center text-gray-500 text-[20px] py-[10px]">
                Web Developer
              </h2>
              <h3 className="w-[200px] py-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </h3>
            </div>
            {/* <div className="border-[1px] border-gray shadow-2xl p-[20px]">
              <div className="flex justify-center">
                <img
                  src={require("../../assets/img/background1.png")}
                  className="w-[100px] h-[100px] rounded-full"
                />
              </div>
              <h1 className="text-center font-bold text-[30px]">Fulan</h1>
              <h2 className="text-center text-gray-500 text-[20px]">
                Web Developer
              </h2>
              <h3 className="w-[200px] py-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </h3>
            </div> */}
            {/* <div className="border-[1px] border-gray shadow-2xl p-[20px]">
              <div className="flex justify-center">
                <img
                  src={require("../../assets/img/background1.png")}
                  className="w-[100px] h-[100px] rounded-full"
                />
              </div>
              <h1 className="text-center font-bold text-[30px]">Fulan</h1>
              <h2 className="text-center text-gray-500 text-[20px]">
                Web Developer
              </h2>
              <h3 className="w-[200px] py-[10px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </h3>
            </div> */}
          </div>
        </div>
        <div className="flex justify-between border-[1px] rounded-tl-lg rounded-br-lg bg-[#5E50A1] px-[30px] py-[20px] my-[100px] w-[100%]">
          <h1 className="text-[10px] p-[10px] sm:text-[30px] text-[#FFFFFF] w-[200px]">
            Lorem ipsum dolor sit amet
          </h1>
          <div className="flex items-center">
            <button className="bg-[#FFFFFF] text-[10px] sm:text-[20px] rounded p-[10px] text-[#5E50A1]">
              Mulai dari sekarang
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
