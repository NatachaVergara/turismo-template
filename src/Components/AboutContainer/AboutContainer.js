import React from 'react'
import aboutImg from '../../assets/images/about-img.png'
import { Link } from 'react-router-dom'

const AboutContainer = () => {
    return (
        // <!-- about section start -->
        <div className="about_section layout_padding border-top border-dark">
            <div className="container-fluid">
                <div className="row d-flex flex-column-reverse  flex-md-row">
                    <div className="col-md-6">
                        <div className="about_taital_main p-3 p-md-none">
                            <h1 className="about_taital mt-5 mt-md-none">Sobre A-World</h1>
                            <p className="about_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus iure quibusdam consequuntur, unde esse! Voluptatum harum rem nihil officia, sint repudiandae totam. Facere blanditiis unde repellat nulla vel in.
                                Tempore velit nesciunt hic vero adipisci asperiores similique ut dolorem soluta nulla corporis praesentium expedita repudiandae odit, earum at est ab pariatur magni ipsum facere voluptates. Reprehenderit accusantium doloribus sit.
                                Quaerat molestias id dicta quas perferendis voluptates atque ipsam iusto neque dolorum fugit accusamus praesentium eaque nemo eum, reiciendis minima! Quos officiis, quo consectetur ad necessitatibus aut veniam eligendi recusandae!
                            </p>
                            <div className="readmore_bt"><Link to="/">Leer más</Link></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div><img src={aboutImg} alt='...' className="about_img " /></div>
                    </div>
                </div>
            </div>
        </div>
        // {/* <!-- about section end --> */}
    )
}

export default AboutContainer