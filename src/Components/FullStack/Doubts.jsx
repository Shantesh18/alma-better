import React, { useState } from 'react'
import DoubtDeatils from './DoubtDeatils';

const Doubts = () => {

    const [activedClass, setActivedClass]=useState("admission");

    const [btnActive, setBtnActive] = useState(
        {
            btn1: "active",
            btn2: "",
            btn3: "",
            btn4: "",
            btn5: "",
        }
    )
    return (
        <>
            <div className="container py-3">
            <h2 className='pb-0'>Clear all your basic doubts with these FAQs</h2>
            <img src="Images/doubts/underline.svg" className='pt-0' alt="underline" />
                <div className="p-3">

                    <button className={`btn btn-outline-success fw-bold fs-5 m-2 ${btnActive.btn1}`}
                    onClick={
                        () => {
                            setBtnActive(
                                {
                                    btn1: "active",
                                    btn2: "",
                                    btn3: "",
                                    btn4: "",
                                    btn5: "",
                                }
                            );
                            setActivedClass("admission");
                        }
                    }>Admission</button>
                    <button className={`btn btn-outline-success fw-bold fs-5 m-2 ${btnActive.btn2}`} onClick={
                        () => {
                            setBtnActive(
                                {
                                    btn1: "",
                                    btn2: "active",
                                    btn3: "",
                                    btn4: "",
                                    btn5: "",
                                }
                            );
                            setActivedClass("certification");
                        }
                    }>IIT G Certification</button>
                    <button className={`btn btn-outline-success fw-bold fs-5 m-2 ${btnActive.btn3}`}
                    onClick={
                        () => {
                            setBtnActive(
                                {
                                    btn1: "",
                                    btn2: "",
                                    btn3: "active",
                                    btn4: "",
                                    btn5: "",
                                }
                            );
                            setActivedClass("learning");
                        }
                    }>Learning</button>
                    <button className={`btn btn-outline-success fw-bold fs-5 m-2 ${btnActive.btn4}`}
                    onClick={
                        () => {
                            setBtnActive(
                                {
                                    btn1: "",
                                    btn2: "",
                                    btn3: "",
                                    btn4: "active",
                                    btn5: "",
                                }
                            );
                            setActivedClass("payAfter");
                        }
                    }>Play After Placement</button>
                    <button className={`btn btn-outline-success fw-bold fs-5 m-2 ${btnActive.btn5}`}
                    onClick={
                        () => {
                            setBtnActive(
                                {
                                    btn1: "",
                                    btn2: "",
                                    btn3: "",
                                    btn4: "",
                                    btn5: "active",
                                }
                            );
                            setActivedClass("placements");
                        }
                    }>Placements</button>
                </div>
            </div>

            <div className="container">
                <DoubtDeatils activeClass={activedClass}/>
            </div>
        </>
    )
}

export default Doubts