import React, { useRef, useState } from 'react'
import Techbrands from './Techbrands'
import './feed.css'
import { NavLink } from 'react-router-dom'
import FeaturedCourses from './FeaturedCourses'
import WallOfLove from './WallOfLove'

const techBrandImages = [
    'image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png', 'image6.png', 'image7.png', 'image8.png', 'image9.png', 'image10.png',
    'image11.png', 'image12.png', 'image13.png', 'image14.png', 'image15.png', 'image16.png', 'image17.png', 'image18.png', 'image19.png', 'image20.png',
    'image21.png', 'image22.png', 'image23.png', 'image24.png', 'image25.png', 'image26.png', 'image27.png', 'image28.png', 'image29.png', 'image30.png',
    'image31.png', 'image32.png', 'image33.png', 'image34.png', 'image35.png', 'image36.png', 'image37.png', 'image38.png', 'image39.png', 'image40.png',
    'image41.png', 'image42.png', 'image43.png', 'image44.png', 'image45.png', 'image46.png', 'image47.png', 'image48.png', 'image49.png', 'image50.png',
    'image51.png', 'image52.png', 'image53.png', 'image54.png', 'image55.png', 'image56.png', 'image57.png', 'image58.png', 'image59.png', 'image60.png',
    'image61.png', 'image62.png', 'image63.png', 'image64.png', 'image65.png', 'image66.png', 'image67.png', 'image68.png', 'image69.png', 'image70.png',
    'image71.png', 'image72.png'
]

const Feed = () => {

    const [featuredCourseToggle, setFeaturedCourseToggle] = useState({
        allCourse: "flex",
        dataScience: "none",
        master: "none",
        btnClass: {
            all: "active",
            science: "",
            master: ""
        }
    })


    return (
        <React.Fragment>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-12 col-sm-12 py-3 px-5">
                        <div>
                            <h1>Learning Is Better With</h1>
                        </div>
                        <div>
                            <h2>Carosol</h2>
                        </div>
                        <div>
                            <p className='py-2 text-secondary fw-bold fs-5'>
                                Launch your career in Data Science & Web Development
                                Earn up to ₹ 40 LPA at leading companies
                                Pay us after you land your dream job
                            </p>
                        </div>

                        <div className='py-3'>
                            <button className='btn btn-danger fw-bold fs-5 py-3 px-5'>EXPLORE COURSE</button>
                        </div>
                        <div className='text-center text-secondary fw-bold'>
                            <div>
                                Recognized as emerging Leaders in Tech Education
                                award-imgaward-img
                            </div>


                            <div className='row pt-2'>
                                <div className="col-4">
                                    <img src="Images/award-1.png" className='img-fluid' alt="award-1" />
                                </div>
                                <div className="col-4">
                                    <img src="Images/award-2.png" className='img-fluid' alt="award-1" />
                                </div>
                                <div className="col-4">
                                    <img src="Images/award-3.png" className='img-fluid' alt="award-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 border border-1">
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
                                <lable style={{ fontSize: "14px", fontWeight: "500" }}>Course Interest*</lable>
                                <div className="col">
                                    <select class="form-input w-100 fs-6 p-2">
                                        <option>Certification in Fullstack Data Science and AI</option>
                                        <option>Certification in Fullstack Web Development</option>
                                        <option>Master in CS: Data Science and Artificial Intelligence</option>
                                        <option>Master in Computer Science: Software Engineering</option>
                                    </select>
                                </div>
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
            </div>

            <div className="container my-5 py-5" style={{ backgroundColor: "pink" }}>

                <div className="row text-center py-2">
                    <h1>Fuel your career with our 700+ hiring partners</h1>
                </div>

                <div className="row text-center py-2">
                    <h5>Get closer to your dream company</h5>
                    <h5>Our graduates are working with leading tech brands</h5>
                </div>

                {/* <div className="row"> */}
                <div id='carouselExampleControls' className=" carousel d-flex justify-content-center">
                    <div class="carousel col-lg-9 col-sm-12">
                        <div class="carousel-inner p-3 bg-white">
                            <div class="carousel-item active">
                                {/* <img src="..." class="d-block w-100" alt="..." /> */}
                                <Techbrands techBrandImages={techBrandImages} minIndex={0} maxIndex={15} />
                            </div>
                            <div class="carousel-item">
                                {/* <img src="..." class="d-block w-100" alt="..." /> */}
                                <Techbrands techBrandImages={techBrandImages} minIndex={16} maxIndex={31} />
                            </div>
                            <div class="carousel-item">
                                {/* <img src="..." class="d-block w-100" alt="..." /> */}
                                <Techbrands techBrandImages={techBrandImages} minIndex={32} maxIndex={47} />
                            </div>
                            <div class="carousel-item">
                                {/* <img src="..." class="d-block w-100" alt="..." /> */}
                                <Techbrands techBrandImages={techBrandImages} minIndex={48} maxIndex={63} />
                            </div>
                            <div class="carousel-item">
                                {/* <img src="..." class="d-block w-100" alt="..." /> */}
                                <Techbrands techBrandImages={techBrandImages} minIndex={64} maxIndex={79} />
                            </div>
                        </div>

                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>

                </div>

                <div className='text-center'>
                    <button className='btn btn-danger fw-bold fs-4 mt-4'>Download Placement Report</button>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 pt-5 mt-5">
                        <h1 className='py-4'>Transforming learnings and advancing careers in tech.</h1>
                        <p className='text-secondary'>We are revolutionising the way skills, experiences, and learning outcomes are delivered online. Join the largest tech community and fast forward your career with AlmaBetter.</p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img src="Images/medium_Group.png" className='img-fluid' alt="img" />
                    </div>
                </div>
            </div>

            <div className="container">

                <div className="row">
                    <h1>Featured Courses</h1>
                    <p className='text-Secondary'>The most hands-on, practical, and intensive coding-led courses to fulfill your ambitions.</p>
                    <ul className='featured-courses'>
                        <li><button className={`btn btn-outline-danger btn-sm px-4 m-2 py-2 ${featuredCourseToggle.btnClass.all}`} aria-current="page"
                            onClick={() => {
                                setFeaturedCourseToggle({
                                    ...featuredCourseToggle,
                                    allCourse: "flex",
                                    dataScience: "none",
                                    master: "none",
                                    btnClass: {
                                        all: "active",
                                        science: "",
                                        master: ""
                                    }
                                });

                            }}>All</button></li>
                        <li><button className={`btn btn-outline-danger btn-sm px-4 m-2 py-2 ${featuredCourseToggle.btnClass.science}`}
                            onClick={() => {
                                setFeaturedCourseToggle({
                                    ...featuredCourseToggle,
                                    allCourse: "none",
                                    dataScience: "flex",
                                    master: "none",
                                    btnClass: {
                                        all: "",
                                        science: "active",
                                        master: ""
                                    }
                                })
                            }}>PG Certifications</button></li>
                        <li><button className={`btn btn-outline-danger btn-sm m-2 px-4 py-2 ${featuredCourseToggle.btnClass.master}`}
                            onClick={() => {
                                setFeaturedCourseToggle({
                                    ...featuredCourseToggle,
                                    allCourse: "none",
                                    dataScience: "none",
                                    master: "flex",
                                    btnClass: {
                                        all: "",
                                        science: "",
                                        master: "active"
                                    }
                                })
                            }}>Master's Degree</button></li>
                    </ul>
                </div>

                <div className="row justify-content-center">
                    <FeaturedCourses courseToggle={featuredCourseToggle} />
                </div>
            </div>

            <div className="container my-4">
                <div className="row">
                    <div className="col-lg-3 col-sm-4 col-md-4">
                        <h2>Wall of Love</h2>
                    </div>
                    <div className="col-lg-1 col-md-2 col-sm-2">
                       <div className="col-lg-6 col-md-5 col-sm-5">
                       <img src="Images/walloflove/heart.png" className='img-fluid' alt="heart" />
                       </div>
                        
                    </div>
                </div>
                <div className="row">
                    <WallOfLove />
                </div>
            </div>

        </React.Fragment>

    )
}

export default Feed