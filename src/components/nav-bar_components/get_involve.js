import React from "react";
import styles from './nav-bar_components_style/get_involve.module.scss'
const GetInvolve=()=>{

    return(
        <div className={styles.subnav_div}> 
            <section className={styles.subnav_div__section}>
                <ul className={styles.subnav_div__section__ul}>
                    <li>
                        <a href='/'>
                            Get Involved
There are lots of different ways that you can support us. We're a charity and we couldn't continue our work without your help.
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            Become a Mind campaigner
Work with us to campaign for a better deal for those of us with mental health problems.
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default GetInvolve