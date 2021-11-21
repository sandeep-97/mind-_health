import React from "react";
import styles from './nav-bar_components_style/consult.module.scss'

const Consult=()=>{

    return(
        <div className={styles.subnav_div}>
            <section className={styles.subnav_div__section}>
                <ul className={styles.subnav_div__section__ul}>
                    <li>
                        <a href='/'>
                            Coronavirus and work
Tips, guidance and blogs to support your organisation.
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            consult
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Consult