const Footer = () => {
  return (
    <>
      <div className="bg-[#5E50A1]">
        <div className="block p-[50px]">
          <img
            src={require("../../assets/img/app-logo-white-small.png")}
            className="my-[10px]"
          />
          <h1 className="w-[300px] text-[#FFFFFF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </h1>
          <hr className="my-[20px]"></hr>
          <div className="flex justify-between text-[#FFFFFF]">
            <h1>2020 HelloJob. All right reserved</h1>
            <div className="flex ">
              <a className="px-[10px]">Telepon</a>
              <a className="px-[10px]">Email</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
