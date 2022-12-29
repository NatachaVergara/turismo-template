import React from 'react'
import { Link } from 'react-router-dom'
import styles from './DestinosContainer.module.scss'

const CardHome = ({ title, texto }) => {


    return (
        <Link to='/destinos' className={`${styles.card} text-light`} data-aos="zoom-in" >
            <div className={styles.content}  >
                <h2 className={styles.title} >{title} </h2>
                <p className={styles.text} > {texto} </p>

            </div>
        </Link>
    )
}

export default CardHome