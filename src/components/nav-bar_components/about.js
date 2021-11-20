import React from "react";
import styles from './nav-bar_components_style/about.module.scss'

const About= () => {
return(
    <div className={styles.subnav_div}>
        <section className={styles.subnav_div__section}>
            <ul className={styles.subnav_div__section__ul}>
                <li>
                    <a href='/'>
                        About us
We won't give up until everyone experiencing a mental health problem gets support and respect.
                    </a>
                </li>
                <li>
                    <a href='/'>
                        What we do
We provide advice and support to empower anyone experiencing a mental health problem. We campaign to improve services, raise awareness and promote understanding.
                    </a>
                </li>
            </ul>
        </section>
    </div>
)
}

export default About