import React from 'react'
import styles from './nav-bar_components_style/news_subnav.module.scss'

const NewsSubnav = () => {
    return (
        <div className={styles.subnav_div}>
            <section className={styles.subnav_div__section}>
                <ul className={styles.subnav_div__section__ul}>
                    <li>
                        <a href='/'>
                            Mind have over 160 shops across England and Wales raising money to fund vital mental health support services. 
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            Browse our online range, including our range of mental health resources, Pause for Mind, Christmas cards and Calendars.
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default NewsSubnav
