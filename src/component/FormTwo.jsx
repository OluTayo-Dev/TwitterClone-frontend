import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {GrTwitter} from "react-icons/gr";
import Modal from "react-modal";
import axios from "axios";


export default function FormTwo({isOpen, toggle}) {
  const [modal,setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

 
 
  const openModal = () =>{
    setModal(true);
  };
  const closeModal = () =>{
    setModal(false);
  };
    
  
const onChangeEmail = (e) =>{
    setEmail(e.target.value);
};
const onChangePassword = (e) => {
  setPassword(e.target.value);
}

const onSubmit = async (e) => {
    e.preventDefault();

    const data={
      email : email,
      password : password,
    };

    try{
      await axios.post("http://localhost:8000/api/login", data)
      .then((res) =>{
        console.log(res.data)
        navigate("/Hom")
        alert("Login successful!!");
      })
    } catch (err) {
      console.log(err);
    }
};



  return (
    <Modal
    style={{
        overlay:{
            position: "fixed",
            top: "0%",
            left: "0%",
            right:"0%",
            bottom: "0%",
            backgroundColor: "#00000078",
            zIndex: 100,
        },
    }}
    className="absolute top-[100px] mx-4 rounded-[5px] lg:top-auto mt-[30vh] left-0 lg:left-[32%] lg:right-[35%] justify-between right-0 h-auto pb-12 overflow-y-auto overflow-auto bg-black z-50 outline-none border-0 flex flex-col shadow-[5px_5px_30px_0px #00000040]"
    isOpen={isOpen}
    shouldCloseOnOverlayclick={true}
    onRequestClose={toggle}
    ariaHideApp={false}
    >

    <div className="rounded-[30px]"> 
        <form onSubmit={onSubmit} className="w-[30rem] h-[25rem] justify-center rounded-[30px]"> 
            <div className="flex gap-[1rem]">
             <button onClick={toggle} className="text-white text-[25px] px-4">x</button>
            </div>
            <GrTwitter className=" text-white ml-[13rem] w-[4vw] h-[4vh]" />
            <h1 className="text-white font-bold text-center text-[25px]">Login</h1>
            <input type="email"
             value={email}
         
             className=" bg-black w-[90%] h-[11%]  mx-9 m-3 rounded-[8px] px-2 text-slate-400  border-blue-400 border-4"
             onChange={onChangeEmail}
              placeholder="Email" 
              /> <br />
              <input type="password" 
              placeholder="password" 
              value={password}
              onChange={onChangePassword}
              className="bg-black w-[90%] h-[11%] mx-9 m-3 rounded-[8px] px-2 text-slate-400 border-blue-400 border-4"
              />  <br />
   
           <button type="button" className="bg-white w-[90%] h-[10%] font-bold rounded-[30px] mx-[3rem] mt-[1rem]"   onClick={onSubmit}>Login</button>
        </form>
    </div>
    </Modal>
  )
}
