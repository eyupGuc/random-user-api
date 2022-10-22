import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";



function App() {
   const[user,setUser]=useState("");
   const[info,setInfo]=useState({})
  
  const getUser=()=>{
 fetch(url).then((res)=>res.json()).then((data)=>setUser(data.results[0]))
//  console.log("button clicked");
 console.log(user)
  }
  

  useEffect(()=>{
getUser()
  },[])

  useEffect(()=>{

  })



  const{name,dob,email,age,picture,phone}=user;

  const handleHeading=(e)=>{
    console.log(e.target.alt)
    switch(e.target.alt){
      case user:
    }
  }

  return (
    <main>
      <div className="block bcg-orange">
        {/* <img src={cwSvg} alt="cw" id="cw" /> */}
      </div>
      <div className="block">
        <div className="container">
          <img src={picture?.large} alt="random user" className="user-img" />
          <p className="user-title" >My name is {name?.title} {name?.first} {name?.last}</p>
          <p className="user-value"></p>
          <div className="values-list">
            <button className="icon" data-label="name" onClick={handleHeading}>
              <img src={womanSvg} alt="user" id="iconImg"  />
            </button>
            <button className="icon" data-label="email">
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button className="icon" data-label="age">
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button className="icon" data-label="street">
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button className="icon" data-label="phone" onClick={handleHeading}>
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button className="icon" data-label="password">
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button onClick={getUser} className="btn" type="button">
              new user
            </button>
            <button className="btn" type="button">
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              <tr className="body-tr"></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
