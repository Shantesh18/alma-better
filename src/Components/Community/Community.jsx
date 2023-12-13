import React from 'react'
import Accelarate from './Accelarate'
import LearningCommunity from './LearningCommunity'
import './community.css'

const group = [
    {
        header: "Learning is better with Community.",
        details: "AlmaBetter believes in community led learning. Enrol for our courses and join a community of serious & passionate tech folks, students, mentors and coaches.",
        imgUrl: "Images/community/Group1.png"
    },
    {
        header: "Level up your skills and knowledge with like minded peers",
        details: "Join spaces and groups as per your own interest areas and career choices. Share knowledge, participate in discussions and post questions.",
        imgUrl: "Images/community/Group2.png"
    },
    {
        header: "Network with fellow learners, mentors & recruiters",
        details: "Network with fellow learners, mentors and even recruiters. Discover peers as per location, colleges, courses and expand your professional & social circle",
        imgUrl: "Images/community/Group3.png"
    }
]

const Community = () => {
    return (
        <>
            <div className="container">
                <p className='text-secondary fw-bold'><span>Home</span>&nbsp;<span>{`>`}</span>&nbsp;<span className='text-danger'>Community</span></p>
            </div>

            <div className="container-fluid my-5">
                <Accelarate />
            </div>

            <div className="container my-5" style={{ backgroundColor: "pink" }}>
                <LearningCommunity group={group[0]} />
            </div>

            <div className="container my-5" style={{ backgroundColor: "pink" }}>
                <LearningCommunity group={group[1]} />
            </div>

            <div className="container my-5" style={{ backgroundColor: "blue" }}>
                <LearningCommunity group={group[2]} />
            </div>

            <div className="container my-5 py-5" style={{ backgroundColor: "pink" }}>
                <div className="row">
                    <div className="col-lg-6 p-5">
                        <p className='text-secondary fs-5'><span></span>AlmaBetter's curriculum is the best curriculum available online. AlmaBetter's program is engaging, comprehensive, and student-centered. If you're serious about accelerating your tech career, you cannot ask for a better platform than AlmaBetter.</p>
                        <div className="row">
                            <div className="col-2">
                                <img src="Images/community/kamya.png" alt="dp" />
                            </div>
                            <div className="col-6 my-auto">
                                <h5 className='pb-0 mb-0'>Kamya Malhotra</h5>
                                <p className='py-0 my-0 text-danger'>Statistical Analyst</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 my-auto">
                        <div className="card p-4 text-center">
                            <h2 className='my-4'>Fast forward your career in tech with AlmaBetter</h2>
                            <button className='btn btn-danger fw-bold fs-5 py-3 my-4'>EXPLORE CORSES</button>
                        </div>

                        <div className="row">
                            <div>
                                <p>Also available on</p>
                            </div>
                            <div className="col-lg-5">
                                <img src="Images/community/googlePlay.png" className='img-fluid' alt="Google Play" />
                            </div>
                            <div className="col-lg-5">
                                <img src="Images/community/appStore.png" className='img-fluid' alt="App Store" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container discord-container my-5 rounded-4 text-white">
                 <div className="row">
                    <div className="col-lg-6 px-4 my-auto">
                        <h1>Learning is better with AlmaBetter Community</h1>
                        <p>Join a community of serious & passionate tech folks, students, mentors and coaches to accelerate your career.</p>
                        <button className='btn btn-outline-danger bg-white'>JOIN OUR DISCORD</button>
                    </div>
                    <div className="col-lg-6 p-0">
                        <img src="Images/community/discord.png" className='img-fluid' alt="discord" />
                    </div>
                 </div>
            </div>
        </>
    )
}

export default Community