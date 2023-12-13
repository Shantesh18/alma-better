import React from 'react';
import Doubts from './Doubts'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
// import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';

import './full-stack.css'

function Fullstack() {
  return (
    <>
    <div className="container-fluid m-0 mt-3 px-4 ">
      <p className='text-secondary fw-bold'><span>Home</span>&nbsp;<span>{`>`}</span>&nbsp;<span>Courses</span>&nbsp;<span>{`>`}</span>&nbsp;<span className='text-red'>Full Stack Web Development</span></p>
    </div>

    <div className="container-fluid m-0 px-4">
    <h6 className='py-4'> <span className="bg-black text-white p-2 px-5 " style={{clipPath:"polygon( 0% 0%, 100% 0%, 80% 100%, 0% 100%)"}}> Pay after placement</span></h6>
    </div>

    <div className="container-fluid m-0 p-0 overflow-hidden w-100 position-relative">
  
    <div className="polygon-div"></div>
    <div  className="container">
      <div className=""></div>

      <div className="row py-5">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <div className="heading">
            <h1 className="text-3xl normal-case leading-8 head-txt">Certification in Full Stack Web Development</h1>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-3  p-2 cal-bg" >
            <span className="cal text-danger"><img src="./images/calender.svg" className="cal-img" alt="calender"/>
                Cohort Slider Starts on 24th November</span>
          </div>
          <p className="collab"><b>In Collaboration with :</b></p>
          <img src="./images/c1.png" alt="company1" className="company-img"/>
          <button className="flex cursor-pointer items-center rounded-3 border-danger bg-transparent text-danger fw-bold btn-video">
          <i className="fa-solid fa-play" style={{color: "#880C25",marginRight: "10px"}}></i>What Video</button>
          <div className="details">
            <div className="row">
              <div className="my-2 h-5 w-5 mt-4 gap-4 details1">
                <span className="text-body" >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-[#20A898] right-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                  <span style={{color: "rgb(108 108 108)"}}>Advanced Certification from E&ICT Academy, IIT Guwahati.</span>
                </span>
              </div>
            </div>

            <div className="row">
              <div className="my-2 h-5 w-5 m-0 gap-4 ">
                <span className="text-body" >
                  <svg  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-[#20A898] right-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                  <span style={{color: "rgb(108 108 108)"}}>6 months part-time program with online classes</span>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="my-2 h-5 w-5 m-0 gap-4">
                <span className="text-body" >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-[#20A898] right-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                  <span style={{color: "rgb(108 108 108)"}}>Revised curriculum for post Chat-GPT era</span>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="my-2 h-5 w-5 m-0 gap-4">
                <span className="text-body" >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-[#20A898] right-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                  <span style={{color: "rgb(108 108 108)"}}> No coding experience required</span>
                </span>
              </div>
            </div>
            <div className="row">
              <div className="my-2 h-5 w-5 m-0 gap-4">
                <span className="text-body" >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-[#20A898] right-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path></svg>
                  <span style={{color: "rgb(108 108 108)"}}>Suitable for final years, graduates and early professionals.
                  </span>
                </span>
              </div>
            </div>
            
          </div>

          <div className="row">
            <div style={{display: "flex"}}>
              <p className="btn1" style={{boxshadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"}}>EXPLORE PROGRAM</p>
              <p className="btn1" style={{backgroundColor: "transparent", color: "red"}}>ENROLL NOW</p>
            
            </div>
            
          </div>

          <div className="row">
            <div className="col-4 count-div">
                <h1 className="count">700+</h1>
                <p className="count-txt">Hiring Partners</p>
            </div>
            <div className="col-4 count-div">
                <h1 className="count">8 LPA</h1>
                <p className="count-txt">Avg Salary</p>
            </div>
            <div className="col-4 count-div">
              <h1 className="count">25 LPA</h1>
              <p className="count-txt">Highest Salary</p> 
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-12 bg-white col-sm-12 border border-1">
                        <div>
                            <div className="request row px-2 py-3" style={{ backgroundImage: "linear-gradient(to right,#f00037,#9b0024)" }}>
                                <div className="col-9 text-white">
                                    <h2>Request CallBack</h2>
                                    <h5>Fill out the form below!</h5>
                                </div>
                                <div className="col-3 mt-2"><h1>
                                    <i class="fa-solid fa-phone fw-bold rounded-circle bg-white p-3" style={{ color: "#ff0a0a", fontSize: "32px" }}></i>
                                </h1>
                                </div>
                            </div>
                        </div>

                        <form class="c-body p-3">
                            <div className="col my-3">
                                <input class="form-input w-100 fs-6 p-2" type="text" placeholder="Enter Full Name" />
                            </div>

                            <div className="col my-3">
                                <input class="form-input w-100 fs-6 p-2" type="text" placeholder="Enter Your Email" />
                            </div>

                            <div className="col my-3">
                                <lable style={{ fontSize: "14px", fontWeight: "500" }}>Graduation Year*</lable>
                                <div className="col">
                                    <select class="form-input w-100 fs-6 p-2">
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col my-3">
                                <input type="text" class="form-input fs-6 w-25 p-2" placeholder="+91" />
                                <input type="number" class="form-input fs-6 w-75 p-2" placeholder="Mobile Number" />
                            </div>

                            <div className=" my-3">
                                <button type="submit" class="btn btn-danger w-100 fs-5 fw-bold p-2" href="#">SUBMIT</button>
                            </div>


                            <p class="note">By continuing, you confirm that you have read and agreed to AlmaBetter’s
                                <span style={{ color: "#f00037" }}>Terms</span> and <span style={{ color: "#f00037" }}>Privacy
                                    policy</span>
                            </p>
                        </form>
                    </div>
      </div>
      <div className="row">
        <h5 className="note2">Learn from the top 1% instructors and mentors from leading tech companies</h5>
        
        <div className=" d-flex flex-wrap justify-content-center my-3 " style={{}}>
          <img src="./images/c1.svg" alt="compani-logo1" className="img-company-logo col-lg-2 col-md-2 col-sm-2 mx-3"/>
          <img src="./images/c2.svg" alt="compani-logo2" className="img-company-logo col-lg-2 col-md-2 col-sm-2 mx-3"/>
          <img src="./images/c3.svg" alt="compani-logo3" className="img-company-logo col-lg-2 col-md-2 col-sm-2 mx-3"/>
          <img src="./images/c4.svg" alt="compani-logo4" className="img-company-logo col-lg-2 col-md-2 col-sm-2 mx-3"/>
          <img src="./images/c5.svg" alt="compani-logo5" className="img-company-logo col-lg-2 col-md-2 col-sm-2 mx-3"/>
      </div>
      </div>
      </div> 
    </div>
   

    

    

     
    {/* </div> */}
    <Doubts/>

    </>
  )
}

export default Fullstack;
