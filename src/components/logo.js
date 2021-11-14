import React from "react";
import styles from './components_styles/logo.module.scss'

const Logo =()=>{

    // creating reuse component of logo
    return (
        <div  className={styles.logo}>
            <p className={styles.logo__heading}>logo</p>
        </div>
    )
}

export default Logo