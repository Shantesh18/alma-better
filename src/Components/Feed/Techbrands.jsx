import React from 'react'

function Techbrands({ techBrandImages, minIndex, maxIndex }) {
    return (

        <>
            {
                techBrandImages.map((element, i) => {
                    if (i <= maxIndex&& i>=minIndex) {
                        return (
                            <>
                                {/* <div class='col-lg-12'> */}
                                    <img src={`Images/${element}`} className='col-lg-3 col-4 col-md-4 col-sm-6 px-4 my-4 img-fluid' alt={element} />
                                    {/* <img src="Images/image1.png" className='img-fluid bg-danger' alt={element} /> */}
                                {/* </div> */}
                            </>
                        )
                    }
                })
            }

        </>
    )
}

export default Techbrands