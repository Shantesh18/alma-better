import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-white p-2 text-black sticky-top shadow-sm">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="Images/almabetterLogo.png" className='w-75' alt="logo"  />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item course px-2">
                                <a class="nav-link" href="#">
                                    Courses
                                </a>
                                <ul class="course-menu p-3 bg-white">
                                    <div className="row">
                                        <div className="col-lg-3 course-item-group">
                                            <li><a class="course-item active" href="#">Certifications</a></li>
                                            <li><a class="course-item" href="#">Master's Degree</a></li>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="row py-2">
                                            <span>
                                            <i className="fa-solid fa-graduation-cap" style={{color: "#e00000"}}></i>
                                            &nbsp; &nbsp;
                                               For College Students, Graduates & Working Professionals
                                               &nbsp; &nbsp; &nbsp; &nbsp;
                                            <i class="fa-solid fa-id-card-clip" style={{color: "#e00000"}}></i>&nbsp;&nbsp;
                                            Outcomes : 5-25 LPA Job
                                            </span>
                                            
                                            </div>
                                            <div className="row gap-3">

                                                <div className="col-lg-5 p-3 border border-1 rounded-1">
                                                    <div className="col-lg-12 my-2">
                                                        <h5>Certification In Full Stack Data Science And AI</h5>
                                                    </div>
                                                    <div className="col-lg-12 d-flex my-2">
                                                        <div className='text-secondary'>6 Months</div>
                                                        <div><ul><li className='text-secondary'>Online Live Classes</li></ul></div>
                                                    </div>
                                                    <div className="col-lg-12 my-2">
                                                        <div><p>Accreated By</p></div>
                                                        <div className='row'>
                                                            <div className="col-2">
                                                                <img src="Images/IIT-logo.jpeg" className='img-fluid col-8' alt="logo" /> 
                                                            </div>
                                                            <div className="col-8">
                                                            <span><h5>IIT GUWAGATI</h5></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 my-3">
                                                        <button className='btn btn-outline-danger'>100% Job Assurance</button>
                                                    </div>
                                                </div>

                                                <div className="col-lg-5 p-3 border border-1 rounded-1">
                                                    <div className="col-lg-12 my-2">
                                                    <NavLink to="full-stack-webdevolopment" className='text-decoration-none text-danger' >
                                                    <h5 >Certification In Full Stack Data Science And AI</h5>
                                                    </NavLink>
                                                       
                                                    </div>
                                                    <div className="col-lg-12 d-flex my-2">
                                                        <div className='text-secondary'>6 Months</div>
                                                        <div><ul><li className='text-secondary'>Online Live Classes</li></ul></div>
                                                    </div>
                                                    <div className="col-lg-12 my-2">
                                                        <div><p>Accreated By</p></div>
                                                        <div className='row'>
                                                            <div className="col-2">
                                                                <img src="Images/IIT-logo.jpeg" className='img-fluid col-8' alt="logo" /> 
                                                            </div>
                                                            <div className="col-8">
                                                            <span><h5>IIT GUWAGATI</h5></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 my-3">
                                                        <button className='btn btn-outline-danger'>100% Job Assurance</button>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6"></div>
                                            </div>
                                        </div>
                                    </div>

                                </ul>
                            </li>
                            <li class="nav-item px-2 dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Practice
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item pb-2" href="#">Free Tutorials</a></li><hr className='m-0 p-0'/>
                                    <li><a class="dropdown-item py-2" href="#">Articals</a></li><hr className='m-0 p-0'/>
                                    <li><a class="dropdown-item py-2" href="#">Coding Problems</a></li><hr className='m-0 p-0'/>
                                    <li><a class="dropdown-item py-2" href="#">Free Quizes</a></li><hr className='m-0 p-0'/>
                                    <li><a class="dropdown-item pt-2" href="#">Learning Videos</a></li>

                                </ul>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link" href="#">Events</a>
                            </li>
                            <li class="nav-item px-2 dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Placements
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item pb-2" href="#">Success Stories</a></li><hr className='m-0 p-0'/>
                                    <li><a class="dropdown-item pt-2" href="#">Placement Statistics</a></li>
                                </ul>
                            </li>
                            <li class="nav-item px-2">
                                <NavLink className="text-decoration-none" to="community">Community</NavLink>
                            </li>

                            <li class="nav-item px-2">
                                <a class="nav-link" href="#">Hire From Us</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link" href="#">Refer & Earn</a>
                            </li>

                        </ul>

                        <button class="btn btn-outline-danger px-3 fw-bold border-2" type="submit">SIGN IN</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar