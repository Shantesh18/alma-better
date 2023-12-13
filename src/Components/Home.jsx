import React from 'react'

const Home = () => {
  return (
   <>
    <div class="box"></div>

<div class="text">
    <p style="margin: 0;">Home
        <i class="fa fa-chevron-right icon"></i>
        Courses
        <i class="fa fa-chevron-right icon"></i>
        <span className='text-danger'>
            Full Stack Web Devlopment
        </span>
    </p>
</div>
<p class="b-box">Pay after placement</p>
<div class="container">
    <div class="row">
        <div class="col-md-6 col-12">
            <div class="heading">
                <h1 class="text-3xl normal-case leading-8 head-txt">Certification in Full Stack Web Development</h1>
            </div>
            <div class="flex items-center justify-center gap-2 rounded-3  p-2 cal-bg">
                <span class="cal"><img src="img/calender.svg" class="cal-img" alt="calender"/>
                    Cohort Slider Starts on 24th November</span>
            </div>
            <p class="collab"><b>In Collaboration with :</b></p>
            <img src="img/c1.png" alt="company1" class="company-img"/>
            <button
                class="flex cursor-pointer items-center rounded-3 border-danger bg-transparent text-danger fw-bold btn-video"><i
                    class="fa fa-play" style={{color:" #880C25;margin-right: 10px"}}></i>What Video</button>
            <div class="details">
                <div class="row">
                    <div class="my-2 h-5 w-5 mt-4 gap-4 details1">
                        <span class="text-body">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                class="text-[#20A898] right-icon" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z">
                                </path>
                            </svg>
                            <lable style="color: rgb(108 108 108);">Advanced Certification from E&ICT Academy, IIT
                                Guwahati.</lable>
                        </span>
                    </div>
                </div>
                <form class="c-body">
                            <div className="col text-center">
                                <input class="form-input w-75 my-2 fs-5" type="text" placeholder="Enter Full Name" />
                            </div>

                            <div className="col text-center">
                                <input class="form-input w-75 my-2 fs-5" type="text" placeholder="Enter Your Email" />
                            </div>

                            <div className="col text-center">
                                <lable style={{ fontSize: "14px", fontWeight: "500" }}>Course Interest*</lable>
                                <div className="col text-center">
                                    <select class="form-input w-75 fs-5">
                                        <option>Certification in Fullstack Data Science and AI</option>
                                        <option>Certification in Fullstack Web Development</option>
                                        <option>Master in CS: Data Science and Artificial Intelligence</option>
                                        <option>Master in Computer Science: Software Engineering</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col text-center">
                                <lable style={{ fontSize: "14px", fontWeight: "500" }}>Graduation Year*</lable>
                                <div className="col text-center">
                                    <select class="form-input w-75 fs-5">
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



                            <lable style={{ fontSize: "14px", fontWeight: "500" }}>Are You Currently Working ?</lable>
                            <div style={{ margin: "5px" }}>
                                <input type="radio" value="yes" />&nbsp;
                                <lable style={{ fontSize: "14px", fontWeight: "500" }}>Yes</lable>&nbsp;&nbsp;
                                <input type="radio" value="no" />&nbsp;
                                <lable style={{ fontSize: "14px", fontWeight: "500" }}>No</lable>
                            </div>
                            <input type="text" class="form-input mobile-no" placeholder="+91" />
                            <input type="number" class="form-input mobile-no-I" placeholder="Mobile Number" />
                            <button type="submit" class="btn2" href="#">SUBMIT</button>
                            <p class="note">By continuing, you confirm that you have read and agreed to AlmaBetter’s
                                <span style={{ color: "#f00037" }}>Terms</span> and <span style={{ color: "#f00037" }}>Privacy
                                    policy</span>
                            </p>
                        </form>

                <div class="row">
                    <div class="my-2 h-5 w-5 m-0 gap-4 ">
                        <span class="text-body">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                class="text-[#20A898] right-icon" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z">
                                </path>
                            </svg>
                            <lable style={{color:"rgb(108 108 108)"}}>6 months part-time program with online classes
                            </lable>
                        </span>
                    </div>
                </div>
                <div class="row">
                    <div class="my-2 h-5 w-5 m-0 gap-4">
                        <span class="text-body">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                class="text-[#20A898] right-icon" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z">
                                </path>
                            </svg>
                            <lable style={{color: "rgb(108 108 108)"}}>Revised curriculum for post Chat-GPT era</lable>
                        </span>
                    </div>
                </div>
                <div class="row">
                    <div class="my-2 h-5 w-5 m-0 gap-4">
                        <span class="text-body">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                class="text-[#20A898] right-icon" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z">
                                </path>
                            </svg>
                            <lable style={{color: "rgb(108 108 108)"}}> No coding experience required</lable>
                        </span>
                    </div>
                </div>
                <div class="row">
                    <div class="my-2 h-5 w-5 m-0 gap-4">
                        <span class="text-body">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"
                                class="text-[#20A898] right-icon" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z">
                                </path>
                            </svg>
                            <lable style={{color: "rgb(108 108 108)"}}>Suitable for final years, graduates and early
                                professionals.
                            </lable>
                        </span>
                    </div>
                </div>

            </div>

            <div class="row">
                <div style="display: flex;">
                    <a href="#" class="btn1"
                        style={{boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"}}>EXPLORE
                        PROGRAM</a>
                    <a href="#" class="btn1" style="background-color: transparent; color: red;">ENROLL NOW</a>

                </div>
                {/* <!-- <div class="col-md-6 col-sm-6"> -->
                <!-- </div> -->
                <!-- <div class="col-md-6 col-sm-6"> -->
                <!-- </div> --> */}
            </div>

            <div class="row">
                <div class="col-4 count-div">
                    <h1 class="count">700+</h1>
                    <p class="count-txt">Hiring Partners</p>
                </div>
                <div class="col-4 count-div">
                    <h1 class="count">8 LPA</h1>
                    <p class="count-txt">Avg Salary</p>
                </div>
                <div class="col-4 count-div">
                    <h1 class="count">25 LPA</h1>
                    <p class="count-txt">Highest Salary</p>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-12">
            <div>
                {/* <!-- <div class="relative ml-auto h-full w-full space-y-5 overflow-hidden lg:overflow-visible lg:py-12"> --> */}
                <div class="login">
                    <div class="card-head">
                        <div class="card-heading">
                            <h3>Request Callback</h3>
                            <p>Fill out the form below !</p>
                        </div>
                        <div class="call-icon">
                            <i class="fa-solid fa-phone fs-2"></i>
                        </div>
                    </div>
                    <div class="card-body">
                        
                    </div>
                </div>
                <div class="row count-row">
                    <div class="col-4 count-div">
                        <h1 class="count">700+</h1>
                        <p class="count-txt">Hiring Partners</p>
                    </div>
                    <div class="col-4 count-div">
                        <h1 class="count">8 LPA</h1>
                        <p class="count-txt">Avg Salary</p>
                    </div>
                    <div class="col-4 count-div">
                        <h1 class="count">25 LPA</h1>
                        <p class="count-txt">Highest Salary</p>
                    </div>
                </div>
                {/* <!-- </div> --> */}
            </div>
        </div>
    </div>
    <div class="row">
        <h5 class="note2">Learn from the top 1% instructors and mentors from leading tech companies</h5>
        {/* <!-- <div class="company-logo" style="text-align: center;">
        <img src="img/c1.svg" class="img-company-logo">
        <img src="img/c2.svg" class="img-company-logo">
        <img src="img/c3.svg" class="img-company-logo">
        <img src="img/c4.svg" class="img-company-logo">
        <img src="img/c5.svg" class="img-company-logo">
    </div> --> */}
        <div class="company-logo" style="text-align: center;">
            <img src="img/c1.svg" class="img-company-logo col-lg-2 col-md-2 col-sm-2  m-3 w-5"/>
            <img src="img/c2.svg" class="img-company-logo col-lg-2 col-md-2 col-sm-2  m-3 w-5"/>
            <img src="img/c3.svg" class="img-company-logo col-lg-2 col-md-2 col-sm-2  m-3 w-5"/>
            <img src="img/c4.svg" class="img-company-logo col-lg-2 col-md-2 col-sm-2  m-3 w-5"/>
            <img src="img/c5.svg" class="img-company-logo col-lg-2 col-md-2 col-sm-2  m-3 w-5"/>
        </div>
    </div>
</div>


{/* <!-- mrunalii --> */}

<div class="navbar1 border-bottom border-3" id="navbar1">
    <div class="logo mx-4">
        <img src="img/logo.svg" alt="logo"/>
    </div>
    <i class="fa-solid fa-angle-left arrow" onclick="right()"></i>
    <div class="menu">
        <ul id="move">
            <li><a href="#" id="educators">Educators</a></li>
            <li><a href="#">Career Impact</a></li>
            <li><a href="#">Curriculum</a></li>
            <li><a href="#">Why AlmaBetter?</a></li>
            <li><a href="#">Hiring Partners</a></li>
            <li><a href="#">Program Fee</a></li>
            <li class="me-5"><a href="#">FAQs</a></li>
            <button type="button" class="btn text-light fw-bold my-2 ms-5 shadow-lg"
                style="background-color: rgb(240,0,55);">EXPLORE PROGRAM</button>
        </ul>
    </div>
    <i class="fa-solid fa-angle-right arrow" onclick="left()"></i>
</div>

<div class="container container_class">
    <div class="row">
        <div class="col-sm-12">
            <h2 class="text-dec">Meet your
                Educators & Mentors</h2>
            <p class="text-secondary">Get taught by educators from top educational institutions and companies</p>
        </div>
    </div>

    <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators ">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top  text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Lalit Kumar Digala</h5>
                                <p class="fw-bold ps-3">Cloud Engineer AI at Google</p>
                            </div>
                            <div>
                                <img src="./img/image (2).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image.png" class="card-body card_body_img">
                                </img>
                            </div>
                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top bg-dark text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Sayan Dey</h5>
                                <p class="fw-bold ps-3">Data Science Consultant</p>
                            </div>
                            <div>
                                <img src="./img/image (6).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (1).png" class="card-body card_body_img">
                                </img>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12 card3">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Avinash Singh</h5>
                                <p class="fw-bold ps-3">Data Engineer</p>
                            </div>
                            <div>
                                <img src="./img/image (7).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image.jpg" class="card-body card_body_img">
                                </img>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>
                </div>

                <div class="row mt-4 row2">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Ravi Ranjan</h5>
                                <p class="fw-bold ps-3">Data Scientist</p>
                            </div>
                            <div>
                                <img src="./img/image (25).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (26).png" class="card-body card_body_img">
                                </img>
                            </div>
                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top bg-dark text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Mohammed Haseebuddin</h5>
                                <p class="fw-bold ps-3">Data Scientist</p>
                            </div>
                            <div>
                                <img src="./img/image (2).jpg" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (27).png" class="card-body card_body_img">
                                </img>
                            </div>
                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Purushotam Singh</h5>
                                <p class="fw-bold ps-3">Data Scientist</p>
                            </div>
                            <div>
                                <img src="./img/image (3).jpg" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (28).png" class="card-body card_body_img">
                                </img>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top bg-dark text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Utkarsh Gupta </h5>
                                <p class="fw-bold ps-3">Lead Operation Research</p>
                            </div>
                            <div>
                                <img src="./img/image (29).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (30).png" class="card-body w-100 card_body_img">
                                </img>
                            </div>
                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Soumya Jain</h5>
                                <p class="fw-bold ps-3">Lead Assistant Manager</p>
                            </div>
                            <div>
                                <img src="./img/image (31).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (4).jpg" class="card-body card_body_img">
                                </img>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top bg-dark text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Siddharth Devapujula</h5>
                                <p class="fw-bold ps-3">Staff Data Scientist</p>
                            </div>
                            <div>
                                <img src="./img/image (32).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (5).jpg" class="card-body card_body_img">
                                </img>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top bg-dark text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Shubhanshi Sharma</h5>
                                <p class="fw-bold ps-3">Risk Management Analysis II</p>
                            </div>
                            <div>
                                <img src="./img/image (33).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image.webp" class="card-body card_body_img">
                                </img>
                            </div>
                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Soumyajyoti Banrjee</h5>
                                <p class="fw-bold ps-3">Senior Data Scientist</p>
                            </div>
                            <div>
                                <img src="./img/image (34).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (35).png" class="card-body card_body_img">
                                </img>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top bg-dark text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Pinak Kapalay</h5>
                                <p class="fw-bold ps-3">Assistance Manager Data Science</p>
                            </div>
                            <div>
                                <img src="./img/image (36).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (37).png" class="card-body card_body_img">
                                </img>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>
                </div>
            </div>


            <div class="carousel-item">
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Rochit Jain </h5>
                                <p class="fw-bold ps-3">Data Scientist</p>
                            </div>
                            <div>
                                <img src="./img/image (38).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (39).png" class="card-body w-100 card_body_img">
                                </img>
                            </div>
                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top bg-dark text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Krishnendu Mandal</h5>
                                <p class="fw-bold ps-3">Manager</p>
                            </div>
                            <div>
                                <img src="./img/image (40).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (41).png" class="card-body card_body_img">
                                </img>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Aayush Sacheti</h5>
                                <p class="fw-bold ps-3">AI Researcher II</p>
                            </div>
                            <div>
                                <img src="./img/image (42).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (43).png" class="card-body card_body_img">
                                </img>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Sayed Adnan</h5>
                                <p class="fw-bold ps-3">Business Data Analyst</p>
                            </div>
                            <div>
                                <img src="./img/image (44).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (45).png" class="card-body card_body_img">
                                </img>
                            </div>
                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top bg-dark text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Shivam Dutta</h5>
                                <p class="fw-bold ps-3">Founder and CEO</p>
                            </div>
                            <div>
                                <img src="./img/image (46).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (47).png" class="card-body card_body_img">
                                </img>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Alok Anand</h5>
                                <p class="fw-bold ps-3">Co-founder (7 Yrs Experience)</p>

                            </div>
                            <div>
                                <img src="./img/image (48).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (49).png" class="card-body card_body_img">
                                </img>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top bg-dark text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Sarthak Gupta </h5>
                                <p class="fw-bold ps-3">Business Analyst</p>
                            </div>
                            <div>
                                <img src="./img/image (6).jpg" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (50).png" class="card-body w-100 card_body_img">
                                </img>
                            </div>
                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Ashok Tankala</h5>
                                <p class="fw-bold ps-3">Leadership and Executive Coach</p>
                            </div>
                            <div>
                                <img src="./img/image (51).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (52).png" class="card-body card_body_img">
                                </img>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top bg-dark text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Sankalp Jain</h5>
                                <p class="fw-bold ps-3">Senior Data Scientist</p>
                            </div>
                            <div>
                                <img src="./img/image (53).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (54).png" class="card-body card_body_img">
                                </img>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top bg-dark text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Vikash Srivastava</h5>
                                <p class="fw-bold ps-3">Co-founder & CPTO (7 Yrs Experience)</p>
                            </div>
                            <div>
                                <img src="./img/image (55).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (56).png" class="card-body card_body_img">
                                </img>
                            </div>
                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm smallCards">
                            <div class="card-img-top text-light card_top">
                                <h5 class="fw-bold ps-3 pt-3">Ajay Kumar</h5>
                                <p class="fw-bold ps-3">Assistant Vice President</p>
                            </div>
                            <div>
                                <img src="./img/image (57).png" alt="" class="rounded_img"/>
                            </div>
                            <div class="card_body_div">
                                <img src="./img/image (58).png" class="card-body card_body_img"/>
                            </div>

                            <i class="fa-brands fa-linkedin card_icons"></i>

                        </div>

                    </div>


                </div>
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>

<div class="container container_class">
    <div class="row ">
        <h2 class="text-dec">
            Transforming careers with guaranteed outcomes</h2>
        <p class="text-secondary">We don't just give certification but outcomes!</p>
    </div>

    <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm cards">
                            <div class="card-img-top bg-dark text-light rounded-3 career_card_top ">

                                <p class=" p-3"><i>"The program offered here is robust, well-guided and most
                                        importantly, has proven to work."</i></p>
                            </div>
                            <div>
                                <img src="./img/image (9).png" alt="" class="career_rounded_img"/>
                            </div>
                            <div class="card-body career_card_body_div">
                                <h5>Vanshika Raj </h5>
                                <p>Data Analyst</p>
                                <img src="./img/arrowDown.svg" alt=""/>
                                <p>Senior Machine Learning Engineer</p>
                                <img src="./img/image (8).png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12 career_card2">
                        <div class="card shadow-sm cards">
                            <div class="card-img-top bg-dark text-light rounded-3 career_card_top ">

                                <p class=" p-3"><i>"I have given around 30 mock interviews. Imagine, 1 interview
                                        consists of 3 rounds so this exercise was essentially the same as giving 10
                                        real interviews."</i></p>
                            </div>
                            <div>
                                <img src="./img/image (10).png" alt="" class="career_rounded_img"/>
                            </div>
                            <div class="card-body career_card_body_div">
                                <h5>Soumyajit Das </h5>
                                <p>Design Engineer</p>
                                <img src="./img/arrowDown.svg" alt=""/>
                                <p>Business Analyst</p>
                                <img src="./img/image (11).png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12 career_card3">
                        <div class="card shadow-sm cards">
                            <div class="card-img-top bg-dark text-light rounded-3 career_card_top ">

                                <p class=" p-3 "><i>"I was assigned a personal career coach during the placement
                                        drive. My career coach helped me build an excellent resume that highlighted
                                        all my talents and fetched me my dream job."</i></p>
                            </div>
                            <div>
                                <img src="./img/image (12).png" alt="" class="career_rounded_img"/>
                            </div>
                            <div class="card-body career_card_body_div">
                                <h5>Sudhanshu Rawat</h5>
                                <p>Fresher</p>
                                <img src="./img/arrowDown.svg" alt=""/>
                                <p>Junior Data Scientist</p>
                                <img src="./img/image (1).jpg" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="carousel-item">
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm cards">
                            <div class="card-img-top bg-dark text-light rounded-3 career_card_top ">

                                <p class=" p-3"><i>"If I were to name one value for which AlmaBetter stands for, it
                                        would be 'Excellence'. I'm saying this because the course was excellently
                                        designed and executed."</i></p>
                            </div>
                            <div>
                                <img src="./img/image (13).png" alt="" class="career_rounded_img"/>
                            </div>
                            <div class="card-body career_card_body_div">
                                <h5>Soumya Jain </h5>
                                <p>Data Analyst</p>
                                <img src="./img/arrowDown.svg" alt=""/>
                                <p>Assistant Manager Analytics</p>
                                <img src="./img/image (14).png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm cards">
                            <div class="card-img-top bg-dark text-light rounded-3 career_card_top ">

                                <p class=" p-3"><i>"AlmaBetter stands for Reliability. I say this because the
                                        AlmaBetter team holds full confidence in their students and is determined to
                                        get them placed at good companies. "</i></p>
                            </div>
                            <div>
                                <img src="./img/image (15).png" alt="" class="career_rounded_img"/>
                            </div>
                            <div class="card-body career_card_body_div">
                                <h5>Raj Mishra </h5>
                                <p>Computer Vision Engineer</p>
                                <img src="./img/arrowDown.svg" alt=""/>
                                <p>Data Science Engineer (BFSI)</p>
                                <img src="./img/image (16).png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm cards">
                            <div class="card-img-top bg-dark text-light rounded-3 career_card_top ">

                                <p class=" p-3 "><i>"My journey at AlmaBetter was like a time-series sequence with a
                                        fluctuating seasonality but an increasing trend."</i></p>
                            </div>
                            <div>
                                <img src="./img/image (17).png" alt="" class="career_rounded_img"/>
                            </div>
                            <div class="card-body career_card_body_div">
                                <h5>Devashish Bose</h5>
                                <p>Fresher (BE - CSE)</p>
                                <img src="./img/arrowDown.svg" alt=""/>
                                <p>Decision Science Analyst</p>
                                <img src="./img/image (18).png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="row mt-4">
                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm cards">
                            <div class="card-img-top bg-dark text-light rounded-3 career_card_top ">

                                <p class=" p-3"><i>"My journey at AlmaBetter was enlightening, and I never imagined
                                        that pursuing a career in Data Science can be so fun and adventurous. "</i>
                                </p>
                            </div>
                            <div>
                                <img src="./img/image (19).png" alt="" class="career_rounded_img"/>
                            </div>
                            <div class="card-body career_card_body_div">
                                <h5>Dilavar Singh</h5>
                                <p>System Engineer</p>
                                <img src="./img/arrowDown.svg" alt=""/>
                                <p>Data Science Engineer</p>
                                <img src="./img/image (20).png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm cards">
                            <div class="card-img-top bg-dark text-light rounded-3 career_card_top ">

                                <p class=" p-3"><i>"When it comes to teaching methodology, the way of teaching and
                                        learning adopted at AlmaBetter is very different from traditional
                                        institutes."</i></p>
                            </div>
                            <div>
                                <img src="./img/image (21).png" alt="" class="career_rounded_img"/>
                            </div>
                            <div class="card-body career_card_body_div">
                                <h5>Rajesh More</h5>
                                <p>Data Scientist</p>
                                <img src="./img/arrowDown.svg" alt=""/>
                                <p>Senior Data Scientist</p>
                                <img src="./img/image (22).png" alt="" style="height: 60px;margin-left: 55px;"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="card shadow-sm cards">
                            <div class="card-img-top bg-dark text-light rounded-3 career_card_top ">

                                <p class=" p-3 "><i>"AlmaBetter believes in imparting practical knowledge to
                                        students and not just theoretical concepts. Thus, capstone projects are a
                                        major part of the curriculum. "</i></p>
                            </div>
                            <div>
                                <img src="./img/image (23).png" alt="" class="career_rounded_img"/>
                            </div>
                            <div class="card-body career_card_body_div">
                                <h5>Yagnik Pandya</h5>
                                <p>Operation Analyst</p>
                                <img src="./img/arrowDown.svg" alt=""/>
                                <p>Data Science Engineer</p>
                                <img src="./img/image (24).png" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-lg-6 col-sm-12">

            <button type="button" class="text-light fw-bold mt-5 shadow-lg btn_program">EXPLORE
                PROGRAM
            </button>

        </div>
        <div class="col-lg-6 col-sm-12">
            <button type="button"
                class="btn border-danger border-2 text-danger fw-bold mb-5 shadow-lg btn_broucher">DOWNLOAD
                BROUCHURE
            </button>
        </div>
    </div>

</div>
{/* <!-- added -->
<!-- main part  --> */}
<div class="container-fluid main-bg">
    <div>
        <h2>Curriculum that makes you job ready</h2>
        <img src="./img/img1.svg" />
        <p style="margin-top: 3%;">We have designed our curriculum and learning pedagogy based on what top tech
            companies expect when you
            join them after you graduate. The curriculum focuses on learning by doing including solving real world
            problems and working on real industry level projects.</p>
    </div>
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-lg-4">
                <div class="d-flex">
                    <h1 class="bg-danger text-light text-center circle">1</h1>
                    <h2 style="margin-left: 30px;">Foundation Track.</h2>
                </div>

                <img src="./img/img1.svg" style="margin-left: 80px;" />

            </div>
            <div class="col-lg-6">
                <p style="border: 2px dotted red;" class="mt-4 w-100"></p>
            </div>
            <div class="col-lg-2">
                <h3 class="text-danger"> <i class="fa-regular fa-clock" style="font-size: 20px; color: red;"></i> 6
                    months.</h3>
            </div>

        </div>
        <div class="container">
            <p class="my-5">AlmaBetter's Full stack developer course begins by cementing your foundation in web
                development
                concepts.
            </p>

            <div class="row">
                <div class="col-lg-6">
                    <div class="card card-bg">
                        <div class="card-body">
                            <div style="display: flex; justify-content: space-between;">
                                <h5 style="color: rgb(219,211,234);">INTRODCTION TO COMPUTER <br/> PROGRAMMING </h5>
                                <i class="fa-regular fa-clock"
                                    style="font-size:10px; color:rgb(19, 182, 149); font-weight: bold;"><span> 1
                                        Month</span></i>
                            </div>
                            <p>Add-On: Pair Programming using GitHub AI Copilot </p>

                        </div>
                    </div>
                    <div class="card card-bg">
                        <div class="card-body">
                            <div style="display: flex; justify-content: space-between;">
                                <h5 style="color: rgb(219,211,234);">Design and Analysis of Algorithms</h5>
                                <i class="fa-regular fa-clock"
                                    style="font-size:10px; color:rgb(19, 182, 149); font-weight: bold;"><span> 1
                                        month</span></i>
                            </div>
                            <p>Add-On : Coding mastery with ChatGPT</p>

                        </div>
                    </div>
                    <div class="card card-bg">
                        <div class="card-body">
                            <div style="display: flex; justify-content: space-between;">
                                <h5 style="color: rgb(219,211,234);">Front-end Development</h5>
                                <i class="fa-regular fa-clock"
                                    style="font-size:10px; color:rgb(19, 182, 149); font-weight: bold;"><span> 2
                                        month</span></i>
                            </div>
                            <p>Add-On : Creating Intelligent Frontend Solutions with AI Technologies</p>

                        </div>
                    </div>
                    <div class="card card-bg">
                        <div class="card-body">

                            <div style="display: flex; justify-content: space-between;">
                                <h5 style="color: rgb(219,211,234);">Backend Development</h5>
                                <i class="fa-regular fa-clock"
                                    style="font-size:10px; color:rgb(19, 182, 149); font-weight: bold;"><span> 1
                                        month</span></i>
                            </div>
                            <p>Add-On : Developing applications with LangChain.js</p>

                        </div>
                    </div>
                    <div class="card card-bg">
                        <div class="card-body">

                            <div style="display: flex; justify-content: space-between;">
                                <h5 style="color: rgb(219,211,234);">Practical Software Engineering</h5>
                                <i class="fa-regular fa-clock"
                                    style="font-size:10px; color:rgb(19, 182, 149); font-weight: bold;"><span> 1
                                        month</span></i>
                            </div>
                            <p>Add-On : Automate CI/CD processes using ChatGPT</p>

                        </div>
                    </div>
                    <div class="card card-bg">
                        <div class="card-body">

                            <div style="display: flex; justify-content: space-between;">
                                <h5 style="color: rgb(219,211,234);">Distributed System with High level <br/> Designs
                                </h5>
                                <i class="fa-regular fa-clock"
                                    style="font-size:10px; color:rgb(19, 182, 149); font-weight: bold;"><span> 1
                                        month</span></i>
                            </div>
                            <p>Specialisation Module - Optional</p>

                        </div>
                    </div>
                    <div class="card card-bg">
                        <div class="card-body">

                            <div style="display: flex; justify-content: space-between;">
                                <h5 style="color: rgb(219,211,234);">Cloud Computing</h5>
                                <i class="fa-regular fa-clock"
                                    style="font-size:10px; color:rgb(19, 182, 149); font-weight: bold;"><span> 1
                                        month</span></i>
                            </div>
                            <p>Specialisation Module - Optional</p>

                        </div>
                    </div>
                    <div class="card card-bg">
                        <div class="card-body">

                            <div style="display: flex; justify-content: space-between;">
                                <h5 style="color: black;">Product Management for Software Engineers</h5>
                                <i class="fa-regular fa-clock"
                                    style="font-size:10px; color:rgb(19, 182, 149); font-weight: bold;"><span> 15
                                        Days</span></i>
                            </div>
                            <p>Add-On : Coding mastery with ChatGPT</p>

                        </div>
                    </div>

                </div>
                <div class="col-lg-6">
                    <div class="card colu-2">
                        <div class="card-body">
                            <h6 class="m-3">Topics</h6>
                            <ul>
                                <li>Product Management Basics</li>
                                <li>Product Management Essentials</li>
                                <li>Product Management Advanced</li>
                                <li>Foundations of Product Management</li>
                                <li>Product Thinking</li>
                                <li>Product Design</li>
                                <li>Product Analysis</li>
                                <li>Product Roadmap</li>
                                <li>Product Discovery</li>
                                <li>Product Prioritisation</li>
                                <li>Product Launch and Marketing</li>
                                <li>Frameworks Used by Product Managers</li>
                                <li>Project Management and Delivery</li>
                                <li>Data Analytics Tools: Practical Usage</li>
                                <li>Advanced-Data Analytics Techniques</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>



            <div class="d-flex justify-content-center">
                <button class="btn btn-danger btn-lg">EXPLORE CURRICULUM </button>
            </div>
        </div>
    </div>


    <div class="container mt-5">
        <div>
            <div class="d-flex">
                <h1 class="bg-danger text-light text-center circle-1">2</h1>
                <h2>Unclock your Web Development Certification</h2>
            </div>
            <img src="./img/img1.svg" style="margin-left: 80px;" />
        </div>
        <div class="row mt-5">
            <div class="col-lg-3 mx-5">
                <h2>IIT Guwahati</h2>


            </div>
            <div class="col-lg-2">
                <h2>AlmaBetter</h2>
            </div>
        </div>
        <div class="line"></div>
        <div class="mb-8 flex gap-4 space-x-1 overflow-scroll rounded-xl p-2" role="tablist"
            aria-orientation="horizontal"></div>

        <div class="row">
            <div class="col-lg-5">
                <div class="d-flex">
                    <div class="mt-5"><img src="./img/img11.svg" alt=""/></div>
                    <div class="mt-5 mx-5">
                        <h6>Advanced Certification from E&ICT <br/> Academy, IIT Guwahati</h6>
                        <p>Upon successfully completing this <br/> program, you’ll earn an Advanced
                            <br/>Certiification in
                            Full Stack
                            Web <br/> Development that is jointly offered by E&ICT Academy, IIT <br/> Guwahati as the
                            Knowledge Partner.
                        </p>
                    </div>
                </div>

                <div class="d-flex">
                    <div class="mt-3"><img src="./img/img12.svg" alt=""/></div>
                    <div class="mt-3 mx-5">
                        <h6>Guest lectures from IIT G faculty</h6>
                        <p>Access to lectures from top faculties of IIT Guwahati</p>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="mt-3"><img src="./img/thumb2_a997684801.svg" alt=""/></div>
                    <div class="mt-3 mx-5">
                        <h6>2-day campus immersion at IIT Guwahati (optional)</h6>
                        <p>Experiential learning opportunity at IIT Guwahati campus</p>
                    </div>
                </div>


                <div class="calneder d-flex">
                    <img src="./img/calender.svg" alt="" style="margin-left: 10px;"/>
                    <p class="ps-4 pt-2 text-danger">Cohort Slider Starts On 24th November. Only 28 Slots <br/> Left
                    </p>
                </div>

                <div class="d-flex mainbutn">
                    <button class="btn btn-danger me-5  but">DOWNLOAD BROCHURE</button>
                    <button class="btn btn-danger  but2">ENROL NOW </button>
                </div>



            </div>

            <div class="col-lg-7">
                <div style="margin: 50px 0px 0px 50px;" class="img-certi">
                    <img src="./img/certificate.png" alt="" height="350px"/>
                </div>
            </div>




        </div>
    </div>

</div>

{/* <!-- rohit --> */}
<div class="background-img">

    <div class="text-light mx-5 pt-5 start-text">
        <h1>100% Job Assurance with AlmaX Career Track</h1>
        <img src="./img/red lines.svg" alt="img" class="red-design1"/>
        <p>We have designed a dedicated career track along with career
            support services to help you become industry ready and make
            sure you land your dream job!</p>
    </div>
    <div class="d-flex pt-5 mx-4 start-text1">
        <h1 class=" text-light text-center fs-2 round-5 rounded-circle circle">1</h1>
        <h3 class="text-light mx-2">AlmaX Eligibility Requirements</h3>
    </div>
    <img src="./img/red lines.svg" alt="img" class="red-design"/>
    <div class="container card-section mt-3">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12 mt-2">
                <div class="card bg-dark medium-cards h-100 ">
                    <img src="./img/1 (1).png" alt="img"/>
                    <h4 class="text-light pt-3 text-center">Graduation
                        Degree</h4>
                    <p class="px-5 text-secondary text-center">Must be a
                        graduate at the time of AlmaX enrollment.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-12  mt-2">
                <div class="card bg-dark medium-cards h-100">
                    <img src="./img/1 (3).png" alt="img"/>
                    <h4 class="text-light pt-3 text-center">Completed
                        the Foundation Track</h4>
                    <p class="px-5 text-secondary text-center">Completed
                        the foundation track of the course.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 mt-2">
                <div class="card bg-dark medium-cards h-100">
                    <img src="./img/1 (4).png" alt="img"/>
                    <h4 class="text-light pt-3 text-center">AlmaBetter
                        Comprehensibility Assessment Test (AB-CAT)</h4>
                    <p class="px-5 text-secondary text-center">Take
                        entrance exam for AlmaX.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex pt-5 mx-4 start-text1">
        <div class="line1"></div>
        <h1 class=" text-light text-center fs-2 round-5 rounded-circle circle">2</h1>
        <h3 class="text-light mx-2">AlmaX Curriculum</h3>
    </div>
    <img src="./img/red lines.svg" alt="img" class="red-design"/>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 almaxcurriculum">
                <div class="card alma mt-5" style="border-left: 7px solid #F00037;">
                    <div class="row">
                        <div class="col-lg-9 col-md-9 col-sm-9">
                            <div class="text-hover">
                                <h5 class="pt-3 px-3">BUSINESS COMMUNICATION</h5>
                                <p class="px-3 ">Add-On : Optimizing Business
                                    Emails with AI</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 pt-3">
                            <span class="text-success "><i class="fa-solid fa-clock-rotate-left"></i>
                                15days
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card alma mt-2">
                    <div class="row">
                        <div class="col-lg-9 col-md-9 col-sm-9">
                            <h5 class="pt-3 px-3 curriculm">PROFILE AND RESUME
                                BUILDING</h5>
                            <p class="px-3 text-hover">Add-On : AI-Driven Resume
                                Optimizing Techniques</p>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 pt-3">
                            <span class="text-success"><i class="fa-solid fa-clock-rotate-left"
                                    style="color: #428a38;"></i>
                                15days
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card alma mt-2">
                    <div class="row">
                        <div class="col-lg-9 col-md-9 col-sm-9">
                            <h5 class="pt-3 px-3 curriculm">INTERVIEW PREP & MOCK
                                INTERVIEW</h5>
                            <p class="px-3 text-hover">Add-On : Interview
                                preparation assistance with our own AI
                                tool "WiseChat"</p>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 pt-3">
                            <span class="text-success "><i class="fa-solid fa-clock-rotate-left"
                                    style="color: #428a38;"></i>
                                1Month
                            </span>
                        </div>
                    </div>
                </div>
                <div class="card alma mt-2">
                    <div class="row">
                        <div class="col-lg-9 col-md-9 col-sm-9">
                            <h5 class="pt-3 px-3 curriculm">CODING & TECHNICAL
                                REVISION</h5>
                            <p class="px-3 text-hover">Add-On :Automated Coding
                                Challenges with AI</p>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 pt-3">
                            <span class="text-success "><i class="fa-solid fa-clock-rotate-left"
                                    style="color: #428a38;"></i>
                                1Month
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card col-lg-6 col-md-6 col-sm-12 card-topic ">
                <div class="row">
                    <h5 class="pt-3 px-3">Topics</h5>
                    <div style="color: rgb(108 108 108);">
                        <ul>
                            <li>
                                <p>Build highly optimized Resumes andCover Letters</p>
                            </li>
                            <li>
                                <p>Build your LinkedIn Profile</p>
                            </li>
                            <li>
                                <p>Build your GitHub Portfolio</p>
                            </li>
                            <li>
                                <p>Build your own website</p>
                            </li>
                            <li>
                                <p>Review of your portfolio </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button class="btn text-light fw-bold mt-5 alma-btn" type="button">EXPLORE CURRICULUM</button>
    <div class="d-flex pt-5 mx-4 start-text1">
        <h1 class=" text-light text-center fs-2 round-5 rounded-circle circle">3</h1>
        <h3 class="text-light mx-2">AlmaX Career Services</h3>
    </div>
    <img src="./img/red lines.svg" alt="img" class="red-design"/>
    <div class="container card-section mt-2 pt-5 win">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 mt-3">
                <div class="card bg-dark h-100 career-service">
                    <img src="./img/1 (2).png" alt="img"/>
                    <h4 class="text-light text-center">Placement Support</h4>
                    <p class="px-5 text-secondary text-center">Complete
                        support from our dedicated placement team until
                        you get a job</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mt-3">
                <div class="card bg-dark h-100 career-service">
                    <img src="./img/1 (9).png" alt="img" style="height: 70px;width: 70px;margin-top: 30px;"/>
                    <h4 class="text-light text-center">Resume Building</h4>
                    <p class="px-5 text-secondary text-center">Resume
                        sharing in our network of 700+ hiring partners</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mt-3">
                <div class="card bg-dark h-100 career-service">
                    <img src="./img/1 (5).png" alt="img" style="height: 70px;width: 70px;margin-top: 30px;"/>
                    <h4 class="text-light text-center">AlmaX Job
                        Application</h4>
                    <p class="px-5 text-secondary text-center">End to
                        end application tracking of multiple interview
                        rounds</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 mt-3">
                <div class="card bg-dark h-100 career-service">
                    <img src="./img/1 (6).png" alt="img" style="height: 70px;width: 70px;margin-top: 30px;"/>
                    <h4 class="text-light text-center">Mock Interviews</h4>
                    <p class="px-5 text-secondary text-center">Professional
                        mock interviews assistance</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mt-3">
                <div class="card bg-dark h-100 career-service">
                    <img src="./img/1 (2).png" alt="img" style="height: 70px;width: 70px;margin-top: 30px;"/>
                    <h4 class="text-light text-center">Dedicated Career
                        Coach</h4>
                    <p class="px-5 text-secondary text-center">Expert
                        career coaches to guide you throughout the
                        program</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 mt-3">
                <div class="card bg-dark h-100 career-service">
                    <img src="./img/1 (4).png" alt="img" style="height: 70px;width: 70px;margin-top: 30px;"/>
                    <h4 class="text-light pt-2 text-center">Growth
                        Champion</h4>
                    <p class="px-5 text-secondary text-center">Know
                        learning strategies and get mentorship from our
                        top Alumni's</p>
                </div>
            </div>
        </div>
    </div>
    <div class="d-flex pt-5 mx-4 start-text1">
        <h1 class=" text-light text-center fs-2 round-5 rounded-circle circle">4</h1>
        <h3 class="text-light mx-2">Land your dream job at one of the
            leading tech companies</h3>
    </div>
    <img src="./img/red lines.svg" alt="img" class="red-design"/>
    <div class="container col-lg-12 col-md-12 col-sm-12">
        <div class="company">
            <img src="./img/companies.png" alt="img"/>
        </div>
        <p class="text-light text-center my-5 paragraph">Go to Program
            Fee section to know Career Services Fee.</p>
        <button class="btn btn-danger fw-bold alma-btn" type="button">EXPLORE PROGRAM</button>
    </div>
</div>

{/* <!-- footer --> */}
<div class="container-fluid" id="footer">
    <div class="container-fluid">
        <img src="./img/logo.png" alt="" width="150px"/>
        <div class="info" style="padding-left: 0">
            <ul>
                <li>Contact Us</li>
                <li>
                    <p>admissions@almabetter.com</p>
                </li>
                <li>
                    <p>08046008400</p>
                </li>
            </ul>
        </div>
        <div class="add">
            <ul>
                <li>Official Address</li>
                <li>
                    <p>
                        4th floor, 133/2, Janardhan Towers, Residency Road, Bengaluru,
                        Karnataka, 560025
                    </p>
                </li>
            </ul>
        </div>
        <div class="c-add">
            <ul>
                <li>Communication Address</li>
                <li>
                    <p>
                        4th floor, 315 Work Avenue, Siddhivinayak Tower, 152, 1st Cross
                        Rd., 1st Block, Koramangala, Bengaluru, Karnataka, 560034
                    </p>
                </li>
            </ul>
        </div>
        <div class="apps">
            <ul>
                <li>Follow us</li>
                <div class="row-icons">
                    <i class="fa-brands fa-facebook" style="color: #ffffff;"></i>
                    <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
                    <i class="fa-brands fa-linkedin" style="color: #ffffff;"></i>
                    <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
                    <i class="fa-brands fa-youtube" style="color: #ffffff;"></i>
                    <i class="fa-brands fa-telegram" style="color: #ffffff;"></i>
                </div>
            </ul>
        </div>
    </div>
    <div class="container-fluid">
        <ul>
            <li>
                <h3>Company</h3>
            </li>
            <li>Success Stories</li>
            <li>About Us</li>
            <li>Hire From Us</li>
            <li>Careers</li>
        </ul>
    </div>
    <div class="container-fluid">
        <ul>
            <li>
                <h3>Courses</h3>
            </li>
            <li>Certification in Full Stack Data Science and AI</li>
            <li>Certification in Full Stack Web Development</li>
            <li>Masters in CS: Data Science and Artificial Intelligence</li>
            <li>Masters in Computer Science: Software Engineering</li>
            <li>Diploma in Computer Science Course</li>
        </ul>
    </div>
    <div class="container-fluid">
        <ul>
            <li>
                <h3>Resources</h3>
            </li>
            <li>Blog</li>
            <li>Events</li>
            <li>Community</li>
            <li>Placement Statistics</li>
        </ul>
    </div>
    <div class="container-fluid">
        <ul>
            <li>
                <h3>Join AlmaBetter</h3>
            </li>
            <li>Sign Up</li>
            <li>Become A Coach</li>
            <li>Coach Login</li>
        </ul>
    </div>
</div>
{/* <script>
    var l = 0;
    var r = 0;
    function left() {
        l = l - 100;
        r = r + 100;
        document.getElementById("move").style.left = l + "px";
        document.getElementById("move").style.right = r + "px";

    }
    function right() {
        r = r - 100;
        l = l + 100;
        document.getElementById("move").style.right = r + "px";
        document.getElementById("move").style.left = l + "px";
        // while(document.getElementById('educators').innerText == 'Educators');
    }
    </script> */}
   </>
  )
}

export default Home;