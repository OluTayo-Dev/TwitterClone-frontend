import React, { useState} from 'react';
//import Form from './Form';
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

 function Hom() {
    const [input, setInput] = useState("");


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
            <main className="z-0">
                <textarea placeholder="What's happening?...." className="bg-slate-800 w-full h-1/2 text-slate-400 font-medium text-center text-2xl pt-6">

                </textarea>
            </main>
            <button>Tweet</button>

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
