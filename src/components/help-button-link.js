import React from "react";
import styles from './components_styles/help-button-link.module.scss'

const GetHelp = ()=>{

    // creating reuse component of the help button
    return (
        <div className={styles.help}>
            <a href="a" className={styles.help__a}>
                get help now
            </a>
        </div>
    )
}

export default GetHelp