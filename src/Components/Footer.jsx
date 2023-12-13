import React from 'react'

function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-white">
                <div className="row p-5">

                    <div className="col-lg-3">

                        <div className='col-lg-8'>
                            <img src="Images/almabetterLogo2.png" className='img-fluid' alt="logo" />
                        </div>

                        <div className='py-3'>
                            <p>Contact Us</p>
                            <p>admissions@almabetter.com
                              08046008400</p>
                        </div>

                        <div>
                            <p>Official Address</p>
                            <p>4th floor, 133/2, Janardhan Towers, Residency Road, Bengaluru, Karnataka, 560025</p>
                        </div>

                        <div>
                            <p>Communication Address</p>
                            <p>4th floor, 315 Work Avenue, Siddhivinayak Tower, 152, 1st Cross Rd., 1st Block, Koramangala, Bengaluru, Karnataka, 560034</p>
                        </div>
                    </div>

                    <div className="col-lg-2">
                        <h5>Comany</h5>
                        <p><a href="#" className='text-secondary text-decoration-none'>Success Stories</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>About Us</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>Hire From Us</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>Careers</a></p>
                    </div>

                    <div className="col-lg-3">
                        <h5>Courses</h5>
                        <p><a href="#" className='text-secondary text-decoration-none'>Certification in Full Stack Data Science and AI</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>Certification in Full Stack Web Development</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>Masters in CS: Data Science and Artificial Intelligence</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>Masters in Computer Science: Software Engineering</a></p>
                    </div>

                    <div className="col-lg-2">
                        <h5>Resources</h5>
                        <p><a href="#" className='text-secondary text-decoration-none'>Events</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none' >Blog</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>Events</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>Community</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>Placement Statistics</a></p>
                    </div>

                    <div className="col-lg-2">
                        <h5>Join AlmaBetter</h5>
                        <p><a href="#" className='text-secondary text-decoration-none'>Sign Up</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>Become an Affiliate</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>Become A Coach</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>Coach Login</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>Refer and Earn</a></p>
                    </div>
                </div>

                <div className="row px-5">
                    
                    <div className="col-lg-6">
                    <h5>Follow Us</h5>
                        <a href="#" className='fw-bol fs-2 me-5'><i class="fa-brands fa-square-facebook text-white"></i></a>
                        <a href="#" className='fw-bol fs-2 me-5'><i class="fa-brands fa-square-x-twitter text-white"></i></a>
                        <a href="#" className='fw-bol fs-2 me-5'><i class="fa-brands fa-square-instagram text-white"></i></a>
                        <a href="#" className='fw-bol fs-2 me-5'><i class="fa-solid fa-envelope text-white"></i></a>
                        <a href="#" className='fw-bol fs-2 me-5'><i class="fa-brands fa-linkedin text-white"></i></a>
                    </div>

                    <div className="col-lg-6">
                        <h5>Policies</h5>
                        <p><a href="#" className='text-secondary text-decoration-none'>Privacy Statement</a></p>
                        <p><a href="#" className='text-secondary text-decoration-none'>Terms of Use</a></p>
                    </div>
                </div>

                <div className="row px-5">
                Made with heart in Bengaluru, India
                    <hr />
                    <p>&copy;Shantesh</p>
                </div>
            </div>
        </>
    )
}

export default Footer