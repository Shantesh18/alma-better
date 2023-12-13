import React from 'react'

const LearningCommunity = ({group}) => {
  return (
    <>
        <div className="row">
            <div className="col-lg-7 my-auto p-5">
                <h1>{group.header}</h1>
                <p className='text-secondary fs-5'>{group.details}</p>
            </div>
            <div className="col-lg-5 p-5">
                <img src={group.imgUrl} className='img-fluid' alt="group" />
            </div>
        </div>
    </>
  )
}

export default LearningCommunity