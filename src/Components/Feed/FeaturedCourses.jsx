import React from 'react'
const featuredCourses = [
  {
    name: "Certification in Full Stack Data Science and AI",
    description: "Become a job-ready Data Science professional in 30 weeks. Join the largest tech community in India. Pay only after you get a job above 5 LPA.",
    duration: "6 months",
    qulification: "For Final year students & Graduates",
    time: "Part-time, online live classes",
    assurance: "100% Job Assurance"
  },
  {
    name: "Certification in Full Stack Data Science and AI",
    description: "Become a job-ready Data Science professional in 30 weeks. Join the largest tech community in India. Pay only after you get a job above 5 LPA.",
    duration: "6 months",
    qulification: "For Final year students & Graduates",
    time: "Part-time, online live classes",
    assurance: "100% Job Assurance"
  },
  {
    name: "Masters in Computer Science: Software Engineering",
    description: "Join India's only Pay after placement Master's degree in Computer Science. Get an assured job of 5 LPA and above. Accredited by ECTS and globally recognised in EU, US, Canada and 60+ countries.",
    duration: "15 months",
    qulification: "For Graduates",
    time: "Part-time, online live classes",
    assurance: "100% Job Assurance"
  },
  {
    name: "Masters in Computer Science: Software Engineering",
    description: "Join India's only Pay after placement Master's degree in Computer Science. Get an assured job of 5 LPA and above. Accredited by ECTS and globally recognised in EU, US, Canada and 60+ countries.",
    duration: "15 months",
    qulification: "For Graduates",
    time: "Part-time, online live classes",
    assurance: "100% Job Assurance"
  }
]
function FeaturedCourses({courseToggle}) {
  return (
    <>

    <div className="row" id='all-course' style={{display:courseToggle.allCourse}}>
      {
        featuredCourses.map((element) => {
          return (
            
              <div className='col-lg-4 col-md-6 col-sm-12 my-3'>
                <div class="card">
                  <div className='px-3'>
                    <h5 className='pt-3'>
                      {element.name}
                    </h5>
                    <hr />
                  </div>

                  <div class="card-body">
                    <p class="card-text">{element.description}</p>

                    <div className="row py-2">

                      <div className="col-6 row">
                        <div className="col-3 d-flex align-items-center">
                          <i class="fa-regular fa-clock fs-4" style={{ color: "#ff0000" }}></i>
                        </div>
                        <div className="col-9 text-secondary d-flex align-items-center" style={{fontSize:"14px"}}>
                          {element.duration}
                        </div>
                      </div>

                      <div className="col-6 row">
                        <div className="col-3 d-flex align-items-center">
                          <i class="fa-solid fa-graduation-cap fs-4" style={{ color: "#ff0000" }}></i>
                        </div>
                        <div className="col-9 text-secondary d-flex align-items-center" style={{fontSize:"14px"}}>
                          {element.qulification}
                        </div>
                      </div>
                    </div>

                    <div className="row py-2">

                      <div className="col-6 row">
                        <div className="col-3 d-flex align-items-center">
                          <i class="fa-solid fa-desktop fs-4" style={{ color: "#ff0000" }}></i>
                        </div>
                        <div className="col-9 text-secondary d-flex align-items-center" style={{fontSize:"14px"}}>
                          {element.time}
                        </div>
                      </div>

                      <div className="col-6 row">
                        <div className="col-3 d-flex align-items-center">
                          <i class="fa-solid fa-trophy fs-4" style={{ color: "#ff0000" }}></i>
                        </div>
                        <div className="col-9 text-secondary d-flex align-items-center" style={{fontSize:"14px"}}>
                          {element.assurance}
                        </div>
                      </div>

                    </div>

                    <a href="#" class="btn btn-danger w-100 my-2 fw-bold">Explore Course</a>
                  </div>
                </div>
              </div>
            
          )
        })
      }
      </div>
   

     <div className="row" id='datascience-course' style={{display:courseToggle.dataScience}}>
      {
        featuredCourses.map((element) => {
          if(element.name==="Certification in Full Stack Data Science and AI")
          return (
            
              <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                <div class="card">
                  <div className='px-3'>
                    <h4 className='pt-3'>
                      {element.name}
                    </h4>
                    <hr />
                  </div>

                  <div class="card-body">
                    <p class="card-text">{element.description}</p>

                    <div className="row py-2">

                      <div className="col-6 row">
                        <div className="col-3 d-flex align-items-center">
                          <i class="fa-regular fa-clock fs-4" style={{ color: "#ff0000" }}></i>
                        </div>
                        <div className="col-9 text-secondary d-flex align-items-center" style={{fontSize:"14px"}}>
                          {element.duration}
                        </div>
                      </div>

                      <div className="col-6 row">
                        <div className="col-3 d-flex align-items-center">
                          <i class="fa-solid fa-graduation-cap fs-4" style={{ color: "#ff0000" }}></i>
                        </div>
                        <div className="col-9 text-secondary d-flex align-items-center" style={{fontSize:"14px"}}>
                          {element.qulification}
                        </div>
                      </div>
                    </div>

                    <div className="row py-2">

                      <div className="col-6 row">
                        <div className="col-3 d-flex align-items-center">
                          <i class="fa-solid fa-desktop fs-4" style={{ color: "#ff0000" }}></i>
                        </div>
                        <div className="col-9 text-secondary d-flex align-items-center" style={{fontSize:"14px"}}>
                          {element.time}
                        </div>
                      </div>

                      <div className="col-6 row">
                        <div className="col-3 d-flex align-items-center">
                          <i class="fa-solid fa-trophy fs-4" style={{ color: "#ff0000" }}></i>
                        </div>
                        <div className="col-9 text-secondary d-flex align-items-center" style={{fontSize:"14px"}}>
                          {element.assurance}
                        </div>
                      </div>

                    </div>

                    <a href="#" class="btn btn-danger w-100 my-2 fw-bold">Explore Course</a>
                  </div>
                </div>
              </div>
            
          )
        })
      }
      </div>

       <div className="row" id='master-course' style={{display:courseToggle.master}}>
      {
        featuredCourses.map((element) => {
          if(element.name==="Masters in Computer Science: Software Engineering")
          return (
            
              <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                <div class="card">
                  <div className='px-3'>
                    <h4 className='pt-3'>
                      {element.name}
                    </h4>
                    <hr />
                  </div>

                  <div class="card-body">
                    <p class="card-text">{element.description}</p>

                    <div className="row py-2">

                      <div className="col-6 row">
                        <div className="col-3 d-flex align-items-center">
                          <i class="fa-regular fa-clock fs-4" style={{ color: "#ff0000" }}></i>
                        </div>
                        <div className="col-9 text-secondary d-flex align-items-center" style={{fontSize:"14px"}}>
                          {element.duration}
                        </div>
                      </div>

                      <div className="col-6 row">
                        <div className="col-3 d-flex align-items-center">
                          <i class="fa-solid fa-graduation-cap fs-4" style={{ color: "#ff0000" }}></i>
                        </div>
                        <div className="col-9 text-secondary d-flex align-items-center" style={{fontSize:"14px"}}>
                          {element.qulification}
                        </div>
                      </div>
                    </div>

                    <div className="row py-2">

                      <div className="col-6 row">
                        <div className="col-3 d-flex align-items-center">
                          <i class="fa-solid fa-desktop fs-4" style={{ color: "#ff0000" }}></i>
                        </div>
                        <div className="col-9 text-secondary d-flex align-items-center" style={{fontSize:"14px"}}>
                          {element.time}
                        </div>
                      </div>

                      <div className="col-6 row">
                        <div className="col-3 d-flex align-items-center">
                          <i class="fa-solid fa-trophy fs-4" style={{ color: "#ff0000" }}></i>
                        </div>
                        <div className="col-9 text-secondary d-flex align-items-center" style={{fontSize:"14px"}}>
                          {element.assurance}
                        </div>
                      </div>

                    </div>

                    <a href="#" class="btn btn-danger w-100 my-2 fw-bold">Explore Course</a>
                  </div>
                </div>
              </div>
            
          )
        })
      }
      </div>
    
    </>

  )
}

export default FeaturedCourses