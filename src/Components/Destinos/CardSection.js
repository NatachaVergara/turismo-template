/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './DestinosContainer.module.scss'



const CardSection = ({ titulo, paises, img, id }) => {

    return (
        <>
            <div className={`card my-5 mx-3 `} style={{ width: "30rem" }}>
                <img src={img} className="card-img-top" style={{ height: "20rem" }} alt="..." />

                <div className={`${styles.cardbody} card-body`} >
                    <h5 className={`${styles.text} fs-1 text-center`}>{titulo} </h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    <ul className="list-group list-group-flush" style={{ height: "15rem" }}>
                        {paises && paises.map((p, i) => (
                            <li key={i} className="list-group-item">
                                <Link to={`/destino/${p}`}>{p}</Link>
                            </li>

                        ))}
                    </ul>
                    <div className=" text-center">
                        <h5>Contacto</h5>
                        <a href="#" className="card-link"><box-icon type='solid' name='envelope' animation='tada-hover'></box-icon> </a>
                        <a href="#" className="card-link"><box-icon type='logo' name='whatsapp' animation='tada-hover'></box-icon></a>
                    </div>
                </div>
            </div>
        </>



    )
}

export default CardSection