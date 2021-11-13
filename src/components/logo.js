import React from "react";
import styles from './components_styles/logo.module.scss'

const Logo =()=>{

    // creating reuse component of logo
    return (
        <div  className={styles.logo}>
            <h1 className={styles.logo__heading}>logo</h1>
        </div>
    )
}

export default Logo