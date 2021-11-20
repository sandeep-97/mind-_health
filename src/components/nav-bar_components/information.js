import React from 'react'
import styles from './nav-bar_components_style/information.module.scss'

const Information = () => {
    return (
        <div className={styles.subnav_div}>
            <section className={styles.subnav_div__section}>
                <ul className={styles.subnav_div__section__ul}>
                    <li>
                        <a href='/'>
                            Patrick blogs about his first schizoaffective episode, inequalities in the mental health system and looking after his mental health.
                        </a>
                    </li>
                    <li>
                        <a href='/'>
                            We're fighting for mental health. For support. For respect. For you.
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Information
