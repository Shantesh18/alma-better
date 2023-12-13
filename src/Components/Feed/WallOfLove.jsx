import React, { useState } from 'react'
import './walloflove.css'

const wallOfLove = [
    {
        imgUrl: "",
        name: "shantesh",
        linkedIn: "",
        comment: "lorem20 ugcw futifg tweguf iuwgd uitg87d "
    },
    {
        imgUrl: "",
        name: "Rohit",
        linkedIn: "",
        comment: "lorem20 ugcw futifg tweguf iuwgd uitg87d "
    },
    {
        imgUrl: "",
        name: "Ganesh",
        linkedIn: "",
        comment: "lorem20 ugcw futifg tweguf iuwgd uitg87d "
    },
    {
        imgUrl: "",
        name: "shantesh",
        linkedIn: "",
        comment: "lorem20 ugcw futifg tweguf iuwgd uitg87d "
    },
    {
        imgUrl: "",
        name: "shantesh",
        linkedIn: "",
        comment: "lorem20 ugcw futifg tweguf iuwgd uitg87d "
    },
    {
        imgUrl: "",
        name: "shantesh",
        linkedIn: "",
        comment: "lorem20 ugcw futifg tweguf iuwgd uitg87d "
    },
    {
        imgUrl: "",
        name: "shantesh",
        linkedIn: "",
        comment: "lorem20 ugcw futifg tweguf iuwgd uitg87d "
    },
    {
        imgUrl: "",
        name: "shantesh",
        linkedIn: "",
        comment: "lorem20 ugcw futifg tweguf iuwgd uitg87d "
    },
    {
        imgUrl: "",
        name: "shantesh",
        linkedIn: "",
        comment: "lorem20 ugcw futifg tweguf iuwgd uitg87d "
    },
    {
        imgUrl: "",
        name: "shantesh",
        linkedIn: "",
        comment: "lorem20 ugcw futifg tweguf iuwgd uitg87d "
    },
    {
        imgUrl: "",
        name: "shantesh",
        linkedIn: "",
        comment: "lorem20 ugcw futifg tweguf iuwgd uitg87d "
    },
    {
        imgUrl: "",
        name: "shantesh",
        linkedIn: "",
        comment: "lorem20 ugcw futifg tweguf iuwgd uitg87d "
    }
]

const WallOfLove = () => {

    const [noOfWall, setNoOfWall]=useState(6);
    return (
    <>
            {
                wallOfLove.map((element,index) => {
                    if(index<noOfWall)
                    return (
                        <>
                            <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                                <div class="card comment-cards">
                                    <div className='p-3 d-flex justify-content-around'>
                                       <img src={`Images/walloflove/${element.imgUrl}`} alt="dp" />
                                       <h4>{element.name}</h4>
                                       <a href="#"><i class="fa-brands fa-linkedin fs-3" style={{color: "#0052e0"}}></i></a>
                                    </div>

                                    <div class="card-body">
                                        <p class="card-text">{element.comment}</p>
                                    </div>
                                </div>
                                </div>
                            </>
                            )

                })
           }
           <div className="row">
            <div className="col text-center">
            <button className='btn btn-danger px-4 fw-bold' onClick={()=>setNoOfWall(noOfWall+6)}>View More</button>
            </div>
            
           </div>
      </>
     )
 }

export default WallOfLove