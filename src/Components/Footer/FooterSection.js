/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const FooterSection = () => {
    return (
        // <!-- footer section start -->
        <div className="footer_section layout_padding">
            <div className="container">
                <p className='fs-5 fw-bold text-light text-center mt-5'>Si queres recibir novedades o descuentos subscribite </p>
                <div className="input_btn_main">
                    <input type="email" className="mail_text" placeholder="Ingrese su email" name="email" />
                    <div className="subscribe_bt"><a href="#">Subscribirse</a></div>
                </div>
                <div className="location_main">
                    <div className="call_text"><i className="bi bi-telephone fs-2 "></i></div>
                    <div className="call_text"><a href="#">+54 1234567890</a></div>
                    <div className="call_text"><i className="bi bi-envelope-at fs-2"></i></div>
                    <div className="call_text"><a href="#">turismo@gmail.com</a></div>
                </div>
                <div className="social_icon">
                    <ul>
                        <li><a href="#" className='text-light social_icons'><i className="bi bi-facebook fs-2 m-1"></i></a></li>
                        <li><a href="#" className='text-light social_icons'><i className="bi bi-twitter fs-2 m-1"></i></a></li>
                        <li><a href="#" className='text-light social_icons'><i className="bi bi-instagram fs-2 m-1"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        // {/* <!-- footer section end --> */}
    )
}

export default FooterSection