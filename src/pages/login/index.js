import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Login(){
    const navigate = useNavigate()
    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: ""
    })
    
    const HandleLogin = (event) =>{
      event.preventDefault()

      axios({
        url: "http://localhost:5000/api/v1/auth/login",
        method: "POST",
        data: dataLogin
      })
      .then((response) => {
        localStorage.setItem('@userLogin', JSON.stringify(response.data.data))
        navigate('/')
      })
      .catch((error) => {
        navigate('/login')
      })
      }

      useEffect(()=>{
        navigate('/login')
        // eslint-disable-next-line
      },[])
    
    return(
        <>
        <main className="h-[100vh] w-full">
        <section className="h-full flex justify-center items-center flex-wrap">
          <div className=" bg-gray-100 h-[60] flex items-center flex-wrap">
            <div className="w-[30vw] flex flex-wrap">
              <img className="h-full w-full" src={require("../../assets/img/background1purple.png")} alt="img-h" />
            </div>

            <form onSubmit={HandleLogin}>
            <div className="form mx-4">
              <h1 className="text-4xl text-center font-semibold mb-5">Log In</h1>
              <div className="form-group mb-5">
                <label >Username</label>
                <input onChange={(e) =>{
                  setDataLogin({
                    ...dataLogin,
                    email: e.target.value
                  })
                }} 
                type="text" 
                placeholder="Input your username" 
                className="input input-bordered w-full max-w-xs form-control" />
              </div>
              <div className="form-group mb-5">
                <label >Password</label>
                <input 
                  onChange={(e) =>{
                  setDataLogin({
                    ...dataLogin,
                    password: e.target.value
                  })
                }} 
                 type="password" 
                 placeholder="Input your password" 
                 className="input input-bordered w-full max-w-xs form-control" />
              </div>
              <div className="button w-100">
                <button type="submit" className="btn btn-warning text-white hover:btn-primary btn-wide">Sign In</button>
              </div>
            </div>
            </form>
          </div>
        </section>
      </main>
        </>
    )
}

export default Login