import Header from "../../component/header";
import Footer from "../../component/footer";

const EditProfile = () => {
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
          <h1 className="font-bold text-[30px]"></h1>
          <a className="text-gray-500 text-[20px] block"></a>
          <a className="text-gray-500 text-[20px] block"></a>
          <a className="text-gray-500 text-[20px] block"></a>
          <a className="text-gray-500 text-[20px] block"></a>
          <h3 className="w-[200px] py-[10px]"></h3>

          <button className="btn w-[100%] bg-purple-500 rounded">
            Edit Password
          </button>
          <button className="btn w-[100%] bg-purple-500 rounded">
            Kembali
          </button>
        </div>
        <div className="border-[1px] bg-white border-gray shadow-2xl p-[20px] mx-[10px]">
          <a className=" text-[30px] py-[10px] font-bold">Data Diri</a>
          <hr className="py-[10px]" />

          <label className="block">Nama Lengkap</label>
          <input className="rounded bg-white border-[1px] w-[100%]"></input>
          <label className="block">job desk</label>
          <input className="rounded bg-white border-[1px] w-[100%]"></input>
          <label className="block">Domisili</label>
          <input className="rounded bg-white border-[1px] w-[100%]"></input>
          <div className="flex">
            <div className="block pr-[10px]">
              <label className="block">Instagram</label>
              <input className="rounded bg-white border-[1px] "></input>
            </div>
            <div className="block pr-[10px]">
              <label className="block">Github</label>
              <input className="rounded bg-white border-[1px]"></input>
            </div>
            <div className="block">
              <label className="block">Gitlab</label>
              <input className="rounded bg-white border-[1px]"></input>
            </div>
          </div>
          <label className="block">Nomor Telepon</label>
          <input className="rounded bg-white border-[1px] h-[]"></input>
          <label className="block">LinkedIn</label>
          <input className="rounded bg-white border-[1px]"></input>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
