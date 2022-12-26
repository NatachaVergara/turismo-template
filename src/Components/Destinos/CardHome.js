import React from 'react'
import styles from './DestinosContainer.module.scss'

const CardHome = ({ title, texto }) => {


    return (
        <div className={styles.card}  data-aos="zoom-in" >
            <div className={styles.content}  >
                <h2 className={styles.title} >{title} </h2>
                <p className={styles.text} > {texto} </p>

            </div>
        </div>
    )
}

export default CardHome