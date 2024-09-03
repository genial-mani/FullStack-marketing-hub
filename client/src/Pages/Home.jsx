import React, { useContext } from "react";
import marketImage from "../Assets/c167419b-e548-4d4e-889c-2614fb3ee49f.png";
import handShake from "../Assets/3d-mini-handshake.png";
import marketing2 from '../Assets/business-3d-businessman-jumping-with-advertising-megaphone.png'
import service1 from '../Assets/a905bcc2-74d3-4ad1-a63f-591cde34ba28.png'
import service2 from '../Assets/c24eb4d2-7187-4f3b-97a6-75c1ce618863.png'
import service3 from '../Assets/28c28307-d823-4f64-9ed4-10aa41c539ea.png'
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";


const Home = () => {
  const {currentUser} = useContext(UserContext);
  return (
    <section className="home-section mt-16">
      <div className="w-full flex flex-col px-3 pt-20 gap-5">
        <div className="content-div flex flex-col gap-2">
          <h2 className="text-center pt-5">
            Elevate Your Product <span className="coloring">Marketing</span> To New Heights And Reach Wider Audience
          </h2>
          {!currentUser && <Link to={'/signup'} className="get-started text-lg px-5 py-3 w-fit rounded-full">Get started</Link>}
          
        </div>
        <div className="services w-full flex gap-3 items-center justify-around">
            <div className="flex flex-col gap-1 items-center rounded-2xl p-2">
              <img src={service1} alt="" />
              <h2 className="text-lg font-semibold">Search and Connect</h2>
            </div>
            <div className="flex flex-col gap-1 items-center rounded-2xl p-2">
              <img src={service2} alt="" />
              <h2 className="text-lg font-semibold">Seamless Collaboration</h2>
            </div>
            <div className="flex flex-col gap-1 items-center rounded-2xl p-2">
              <img src={service3} alt="" />
              <h2 className="text-lg font-semibold">Performance Tracking</h2>
            </div>
            
          </div>
      </div>
      <div className="home-div-2 w-full flex flex-wrap items-end px-3 justify-around">
        <div className="content-div flex flex-col gap-2 items-center justify-center">
          <h2 className="text-center pt-10">
            Where <span className="coloring">Marketing</span> Meets Momentum
          </h2>
          <div className="marketing-2 text-lg px-5 pt-10 py-3 w-fit rounded-2xl items-center justify-center">
            <img src={handShake} alt="" />
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-around items-center">
        <div className="img-div-2 flex items-center justify-center rounded-3xl">
            <img className="" src={marketing2} alt="" />
        </div>
        <div className="img-div rounded-3xl relative">
            <img className=" w-full h-full" src={marketImage} alt="" />
        </div>
        </div>
      </div>
      
    </section>
  );
};

export default Home;
