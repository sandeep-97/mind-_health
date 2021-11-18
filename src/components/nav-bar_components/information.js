import React from 'react'
import styles from './nav-bar_components_style/information.module.scss'

const Information = () => {
    return (
        <div className={styles.subnav_div}>
            <section className={styles.subnav_div__section}>
                <ul className={styles.subnav_div__section__ul}>
                    <li>
                        information and support
                    </li>
                    <li>
                        coronavirus
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Information
