import UnLogin from "./unLoginNav";
import LoginNav from "./loginNav";
import { useEffect, useState } from "react";

const Header = () => {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem('@userLogin')){
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])

  return(
    <>
      { isLogin ? (<LoginNav setIsLogin={setIsLogin}/>) : <UnLogin/> }
    </>
  )
};

export default Header;
