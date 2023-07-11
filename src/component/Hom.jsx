import React, { useState, useEffect} from 'react';
//import Form from './Form';
import Modal from "react-modal";
import axios from "axios";
import profile from "../Asset/profile.png";
import {TfiTwitterAlt} from 'react-icons/tfi';
import {BiHomeCircle} from 'react-icons/bi';
import { BiSearchAlt2 } from 'react-icons/bi';
//import {IoNotificationsOutline} from 'react-icons/i';
import {HiOutlineMail} from 'react-icons/hi';
import {LiaClipboardListSolid} from 'react-icons/lia';
import {PiBookmarkSimple} from 'react-icons/pi';
import {VscVerified} from 'react-icons/vsc';
import {CgProfile} from 'react-icons/cg';
import {CiCircleMore} from 'react-icons/ci';
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {AiFillCodepenCircle} from "react-icons/ai";
import {RiGroup2Fill} from "react-icons/ri";

 function Hom() {
    const [tweets, setTweets] = useState(null);
    const [modal, setModal] = useState(false);
    const [input, setInput] = useState({
        tweet:"",})

    const openModal = () => {
        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    }

  const onChangeHandler = (e) =>{
   setInput({...input, [e.target.id]: e.target.value})
  }

const onSubmit = async (e) => {
    e.preventDefault();
    setTweets();

 try{
    await axios
    .post("http://localhost:8000/api/createTweet", input)
    .then((res) =>{

        console.log(res.data);
       
        
        alert("You have successfully added a new tweet!")
    });
} catch (err) {

}

};

const getTweet =  () =>{ 
    try{
         axios.get("http://localhost:8000/api/getAllTweet")
        .then((res) => {
            setTweets(res.data.tweet);
            console.log(res.data, 'error')
        })
    } catch (err) {}
 };

 useEffect(getTweet, []);

//console.log(tweets?.map((item) => item.tweet))

  return (
    <div className="flex w-full h-full bg-black">
        <div className="w-[25%] ml-10  gap-32">
          <div className="m-5">
            <TfiTwitterAlt className="text-white w-[2rem] h-[2rem] m-[10px]" />
            <span className="flex gap-2 m-5">
                <BiHomeCircle className="text-white w-[2rem] h-[2rem] mt-[20px]" />
                <p className="text-white font-bold p-4 text-[25px] ">Home</p>
            </span>
            <span className="flex gap-2 m-5">
                <BiSearchAlt2 className="text-white w-[2rem] h-[2rem]" />
                <p className="text-white text-[25px]">Explore</p>
            </span>
            <span>
                {/* <IoNotificationsOutline className="text-white w-[2rem] h-[2rem] mb-[20px]" /> */}
                <p className="text-white p-4 text-[25px]">Notifications</p>
            </span>
            <span className="flex gap-2 m-5">
               <HiOutlineMail className="text-white w-[2rem] h-[2rem]" />
               <p className="text-white text-[25px]">Messages</p>
            </span>
            <span className="flex gap-2 m-5">
                <LiaClipboardListSolid className="text-white w-[2rem] h-[2rem]" />
                <p className="text-white text-[25px]">Lists</p>
            </span> 
            <span className="flex gap-2 m-5">
                <PiBookmarkSimple className="text-white w-[2rem] h-[2rem]" />
                <p className="text-white text-[25px]">Bookmarks</p>
            </span>
            <span className="flex gap-2 m-5">
                <VscVerified className="text-white w-[2rem] h-[2rem]" />
                <p className="text-white text-[25px]">Verified</p>
            </span>
            <span className="flex gap-2 m-5">
                <CgProfile className="text-white w-[2rem] h-[2rem]" />
                <p className="text-white text-[25px]">Profile</p>
            </span>
            <span className="flex gap-2 m-5">
                 <CiCircleMore className="text-white w-[2rem] h-[2rem]" />
                 <p className="text-white text-[25px]">More</p>
            </span>
            <button type="button" className="bg-blue-500 text-white font-bold w-[15rem]
            h-[3rem] rounded-[30px]">Tweet</button>
            <span>
                <img src={profile} alt="" className="w-[4rem] h-[4rem] rounded-[30px] my-4 mx-9" />
            </span>

          </div>
        </div>

        <div className="w-[40%] border-slate-300 border-[0.1px]">
            <header className="sticky top-[0] z-50 border-slate-400 border-[1px] border-t-black w-full h-[8rem]">
                <p className="text-white font-bold text-[30px]">Home</p>
                <span className="flex pt-[20px]">
                    <li><a href="Foryou" className="text-white text-[25px] w-[50%] font-medium ml-[4rem]">Foryou</a></li>
                    <li><a href="Following" className="text-white text-[25px] w-[50%] ml-[20rem] font-light list-none">Following</a></li>
                </span>
            </header>
           <div>
            <span className="flex">
                <img src={profile} alt="" className="w-[3vw] h-[6vh] rounded-full my-1 mx-1" />
                <button onClick={openModal} className="bg-black text-blue-600 flex mt-5 border text-lg  border-slate-400 rounded-[20px] w-[10vw] h-[4vh] mx-1 my-1 font-medium"> <MdOutlineKeyboardArrowDown className="text-blue-600 text-lg"/>Everyone
                </button>
            </span>
      

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
    className="absolute top-[100px] mx-4 rounded-[5px] lg:top-auto mt-[20vh] left-0 lg:left-[32%] lg:right-[35%] justify-between right-0 h-auto pb-12 overflow-y-auto overflow-auto bg-black z-50 outline-none border-0 flex flex-col shadow-[5px_5px_30px_0px #00000040]"
    isOpen={modal}
    shouldCloseOnOverlayclick={true}
    onRequestClose={closeModal}
    ariaHideApp={false}
    >

    <div className="rounded-[30px]"> 
        <form className="bg-slate-900 w-[15vw] h-[20vh] rounded-[20px] border border-slate-500"> 
            <h1 className="text-white font-bold text-xl justify-center py-3 px-3">Choose audience</h1>
            <div className="gap-4">
              <span className="flex">
               <AiFillCodepenCircle  className="text-blue-500 w-[4vw] h-[6vh] font-bold"/> 
               <p className="text-white font-bold text-lg">Everyone</p>
              </span>
              <div className="flex">
                 <RiGroup2Fill    className="text-blue-500 w-[4vw] h-[6vh] font-bold"/>
                 <span className="gap-1">
                 <p className="text-white font-bold text-lg">Twitter Circle</p>
                 <p className="text-white font-bold">0<a href="#" className="text-slate-500 font-light">People</a>Edit</p>
                 </span>
                </div>
            </div>
           
      </form>
    </div>
    </Modal>
    <div>
       <form onSubmit={onSubmit} className="w-full h-20 text-slate-300 bg-black font-medium text-xl px-8 py-3" placeholder="">
        <input type="text"
        id="tweet"
        value={input.text}
        onChange={onChangeHandler}
         placeholder="What's happening?" 
         className="w-full justify-center h-[10vh] bg-black border border-black " />

       <button className="bg-blue-500 text-white font-medium w-[8vw] h-[4vh] ml-[30rem] rounded-full">Tweet</button>
       </form>
    </div>
    
    
    <hr />
    <div className="flex pt-8 gap-4 flex-col">
        {tweets?.map((tweet) => (
            <div key={tweet.id} className="text-white">
                {tweet.tweet} <br />
                {tweet.date}

                <hr />
            </div>
        ))}

    </div>
     <hr />
     </div>


     </div>

        <div className="w-[35%] h-full">
            <div className="ml-[5rem] my-[1rem]">
                <input type="search" 
                placeholder="Search Twitter"
                 className=" bg-slate-900 w-[25rem] h-[3rem]  rounded-[30px] pl-8 " />
                 <BiSearchAlt2 className="w-[3.7vw] h-[3.7vh] text-slate-400  -m-9 pl-11 py-1" />
            </div>
            
            <div className="bg-slate-900 w-[25vw] h-[8rem] rounded-[14px] ml-[5rem] mt-[8vh]">
                <p className="text-white font-bold px-3 py-2">Get Verified</p>
                <p className="text-white font-semibold px-3 py-1">Subscribe to unlock new features.</p>
                <button className="bg-blue-600 text-white w-[9rem] h-[2rem] font-bold rounded-[25px] mt-3  ml-4 py-1">Get Verified</button>
            </div>

            <div className="bg-slate-900 w-[25vw] h-[70vh] rounded-[14px] ml-[5rem] mt-[3vh]">
               <h2 className="text-white font-bold px-3 py-2 text-[25px]">Trends for You</h2>
               <span>
                 <a href="href" className="text-[#bcbcbc] font-medium text-[20px] px-4">Sports.Trending</a>
                 <a href="href" className="text-[#bcbcbc] font-medium text-[30px] pl-[13rem]">...</a> <br />
                 <a  href="href" className="text-white font-bold text-[20px] px-4">Martial</a>
                <p className="text-[#bcbcbc] text-[17px] px-4">14.5k Tweets</p>
               </span>

               <span>
                 <a href="href" className="text-[#bcbcbc] font-medium text-[20px] px-4">Sports.Trending</a>
                 <a href="href" className="text-[#bcbcbc] font-medium text-[30px] pl-[13rem]">...</a> <br />
                 <a  href="href" className="text-white font-bold text-[20px] px-4">Martial</a> 
                <p className="text-[#bcbcbc] text-[17px] px-4">14.5k Tweets</p>
               </span>

               <span>
                 <a href="href" className="text-[#bcbcbc] font-medium text-[20px] px-4">Sports.Trending</a>
                 <a href="href" className="text-[#bcbcbc] font-medium text-[30px] pl-[13rem]">...</a> <br />
                 <a  href="href" className="text-white font-bold text-[20px] px-4">Martial</a>
                <p className="text-[#bcbcbc] text-[17px] px-4">14.5k Tweets</p>
               </span>

               <span>
                 <a href="href" className="text-[#bcbcbc] font-medium text-[20px] px-4">Sports.Trending</a>
                 <a href="href" className="text-[#bcbcbc] font-medium text-[30px] pl-[13rem]">...</a> <br />
                 <a  href="href" className="text-white font-bold text-[20px] px-4">Martial</a>
                <p className="text-[#bcbcbc] text-[17px] px-4">14.5k Tweets</p>
               </span>

               <span>
                 <a href="href" className="text-[#bcbcbc] font-medium text-[20px] px-4">Sports.Trending</a>
                 <a href="href" className="text-[#bcbcbc] font-medium text-[30px] pl-[13rem]">...</a> <br />
                 <a  href="href" className="text-white font-bold text-[20px] px-4">Martial</a>
                <p className="text-[#bcbcbc] text-[17px] px-4">14.5k Tweets</p> 
               </span>
            </div>

        </div>

    </div>
  )
}

export default Hom;
