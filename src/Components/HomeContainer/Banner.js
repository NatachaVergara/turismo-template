/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Banner = () => {
    return (
        //    {/* <!-- banner section start --> */}

        <div className="banner_section layout_padding">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <h1 className="banner_taital">Turismo</h1>
                            <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are ma available, but the majority have suffered</p>
                            <div className="read_bt"><a href="#">Saber más</a></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <h1 className="banner_taital">Adventura</h1>
                            <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are ma available, but the majority have suffered</p>
                            <div className="read_bt"><a href="#">Saber más</a></div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <h1 className="banner_taital">Diversión</h1>
                            <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are ma available, but the majority have suffered</p>
                            <div className="read_bt"><a href="#">Saber más</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // {/* <!-- banner section end --> */}
    )
}

export default Banner