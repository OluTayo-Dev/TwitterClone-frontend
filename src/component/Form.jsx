import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";


export default function Form({isOpen, toggle}) {
  const [modal,setModal] = useState(false);



  const openModal = () =>{
    setModal(true);
  };
  const closeModal = () =>{
    setModal(false);
  };
    const [input, setInput] = useState({
      firstName: "",
      email: "",
      password: "",
    }) 

    const navigate = useNavigate();

const onChangeHandler = (e) =>{
    setInput({...input, [e.target.id]: e.target.value});
};

const onSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8000/api/register", input)
      .then((res) =>{
        console.log(res.data)
        navigate("/Hom")
        alert("User registered successfully");
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
            backgroundColor: "opacity",
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
        <form onSubmit={onSubmit} className="w-[30rem] h-[37rem] justify-center rounded-[30px]"> 
            <div className="flex gap-[1rem]">
             <button onClick={toggle} className="text-white text-[25px] px-4">x</button>
                <p className="text-white text-[20px]">Step 1 of 5</p>
            </div>
            <h1 className="text-white font-bold text-center text-[25px]">Create your account</h1>
            <input type="text"
             id="firstName"
             className=" bg-black w-[90%] h-[11%] mx-9 m-3 rounded-[8px] px-2 gap-[10rem] text-slate-400  border-blue-400 border-4"
             onChange={onChangeHandler}
               placeholder=""
                />  <br />
            <input type="email"
             id="email"
             value={input.email}
             className=" bg-black w-[90%] h-[11%]  mx-9 m-3 rounded-[8px] px-2 text-slate-400  border-blue-400 border-4"
             onChange={onChangeHandler}
              placeholder="Email" 
              /> <br />

              <input type="password" 
              placeholder="password" 
              id="password"
              value={input.password}
              onChange={onChangeHandler}
              className="bg-black w-[90%] h-[11%] mx-9 m-3 rounded-[8px] px-2 text-slate-400 border-blue-400 border-4"
              />  <br />

            <label className="text-white font-bold pl-10">Date of birth</label>
            <p className="text-slate-400 pl-10">This will not be shown publicly. Confirm your own age, even if this
                account is for a business, a pet, or something else
            </p>
          <div className="flex w-[90%] h-[10%] mx-10 gap-4">
             <span>
                <select className=" bg-black w-[12vw] h-[6vh] rounded-[5px] text-slate-400 text-[15px] border-blue-600 border-4 pb-5 mt-3">
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
                </select>
              </span>
              <span>
                <select className="bg-black w-[6vw] h-[6vh] rounded-[5px] text-slate-400 text-[15px] border-blue-600 border-4 pb-5 mt-3">
                    <option>Day</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                </select>
              </span>
              <span>
                <select className="bg-black w-[8vw] h-[6vh] rounded-[5px] text-slate-400 text-[15px] border-blue-600 border-4 pb-5 mt-3">
                    <option>Year</option>
                    <option>Day</option>
                    <option>1990</option>
                    <option>1991</option>
                    <option>1992</option>
                    <option>1993</option>
                    <option>1994</option>
                    <option>1995</option>
                    <option>1996</option>
                    <option>1997</option>
                    <option>1998</option>
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                    <option>2006</option>
                    <option>2007</option>
                    <option>2008</option>
                    <option>2009</option>
                    <option>2010</option>
                    <option>2011</option>
                    <option>2012</option>
                    <option>2013</option>
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
              </span>
            </div>
            <button type="button" className="bg-white w-[90%] h-[10%] font-bold rounded-[30px] mx-[3rem] mt-[1rem]"   onClick={onSubmit}>sign up</button>

        </form>
    </div>
    </Modal>
  )
}
