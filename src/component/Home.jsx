import React, { useState} from 'react';
import FormTwo from './FormTwo'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import profile from "../Asset/profile.png";
import Football from "../Asset/Football.png";
import Football2 from "../Asset/Football2.png";
import ManUtd from "../Asset/ManUtd.jpg";
import {TfiTwitterAlt} from 'react-icons/tfi';
import {BiSearchAlt2} from 'react-icons/bi';
import {FiSettings} from 'react-icons/fi';
import {FcGoogle} from 'react-icons/fc';
import {DiApple} from 'react-icons/di';

export default function Home() {
 
  const  [openModal, setOpenModal] = useState(true);
  const [input, setInput] = useState({
    firstName: "",
    email: "",
    password: "",

  })


 
  const navigate = useNavigate();

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const onSubmit= async (e) =>{
   e.preventDefault();
    try{
      await axios.post("http://localhost:8000/api/register", input)
      .then((res) =>{
        console.log(res.data)
        setInput(res.data)
        navigate("/Hom");
        alert("User registered successfully");
      })
    } catch (err) {
      console.log(err);
    }
  
  };
  

  return (
    <div>
        <header className=" sticky bg-blue-500 w-full h-[10vh] ">
            <div className="flex gap-3 justify-end">
                <button  className="bg-[#fff] text-black font-bold w-[10vw] h-[7vh] rounded-[30px] mt-5">Sign up</button>
                <button onClick={toggleModal} className="bg-[#fff] text-black font-bold w-[10vw] h-[7vh] rounded-[30px] mt-5 ">Login</button>
                <FormTwo  isOpen={!openModal} toggle={toggleModal} />
            </div>
        </header>
      <div className="flex w-full bg-black">
        <div className="w-[25%]">
            <div className="py-5 gap-3 ml-[3rem]">
               <TfiTwitterAlt  className="text-white w-[2rem] h-[2rem] m-[10px]"/>
               <span className="flex">
                 <BiSearchAlt2 className="text-white w-[2rem] h-[2rem] mt-[20px]" /> 
                 <p className="text-white font-bold p-4  text-[25px]">Explore</p>
               </span>
               <span className="flex">
                  <FiSettings className="text-white w-[2rem] h-[2rem] mb-[20px]" />
                  <p className="text-white font-bold text-[25px] mx-4  mt-[1px]">Settings</p>
                </span>
            </div>
        </div>
        <div className="w-[40%] border-slate-300 border-2 border-t-black cursor-pointer">
          <header className=" bg-black w-full h-10">
            <span className="flex">
              <p className="text-white font-bold text-[25px] p-5">Explore</p>
              <FiSettings className="text-white w-[1.5rem] h-[1.5rem] ml-[31rem] mt-4" />
            </span>
          </header>
            <span className="flex mt-5 gap-1">
              <img src={profile} alt="" className="w-[4rem] h-[4rem] rounded-[30px] my-4 mx-9" />
              <p className="text-white font-bold text-[20px] pt-11">How to Show Empathy? </p>
              <p className="text-slate-500 font-light text-[17px] pt-11">@Temitayo734487 .21h</p>
              <button className="text-slate-500 font-light text-[40px] pl-[3rem]">...</button>
            </span>
            <span>
              <img src={Football} alt="" className=" w-[37rem] h-[27rem] ml-[3rem] mt-8 rounded-[15px]" />
            </span>
            <span className="flex mt-5 gap-1">
              <img src={ManUtd} alt="" className="w-[4rem] h-[4rem] rounded-[30px] my-4 mx-9" />
              <p className="text-white font-bold text-[20px] pt-11">Manchester United </p>
              <p className="text-slate-500 font-light text-[17px] pt-11">@Temitayo734487 .21h</p>
              <button className="text-slate-500 font-light text-[40px] pl-[3rem]">...</button>
            </span>
            <span>
              <img src={Football2} alt="" className=" w-[37rem] h-[35rem] ml-[3rem] mt-8 rounded-[15px]" />
            </span>
        </div>
        <div className="w-[35%]">
            <form  onSubmit={onSubmit} className="border-slate-400 border-[0.3px] rounded-[10px] my-[20px] mx-[40px] w-[27.5rem]">
              <h1 className="text-white font-bold text-[25px] p-3">New to Twitter?</h1>
              <p className="text-slate-400 font-light p-3">Sign up now to get your own personalized timeline!</p>
              <button className="bg-white text-black text-[18px] rounded-[35px] w-[25rem] h-[3rem] font-medium text-center ml-3 flex pt-3 px-14"><FcGoogle className="w-[3vw] h-[3vh] " />Sign up with Google</button>
              <button className="bg-white text-black rounded-[35px] w-[25rem] h-[3rem] font-bold text-center flex mt-3 pt-3 px-20 ml-3"><DiApple className="w-[3vw] h-[3vh]" />Sign up with Apple</button>
              <button  className="bg-white text-black rounded-[35px] font-bold w-[25rem] h-[3rem] text-center m-[12px]">Create account</button>
              <p className="text-slate-400  p-4 text-[15px]">By signing up, you agree to the <a href="text" className="text-blue-700">Terms of Service</a> and<br />
              <a href="text" className="text-blue-700">Privacy Policy</a> including<a href="text" className="text-blue-700">Cookie Use</a></p>
            </form>

            <main className="ml-[50px]"> 
              <span className="flex gap-4">
                <a href="text" className="text-slate-400">Terms of Service</a>
                 <a href="text" className="text-slate-400">Privacy Policy</a>
                  <a href="text" className="text-slate-400">Cookie Policy</a>
              </span>
              <span className="flex gap-4">
                <a href="text" className="text-slate-400">Accessibility</a>
                 <a href="text" className="text-slate-400">Adds Info</a>
                  <a href="text" className="text-slate-400">More ***</a>
                   <a href="text" className="text-slate-400">&copy; 2023 X Corp</a>
              </span>
            </main>
        </div>

      </div>
    </div>
  )
}
