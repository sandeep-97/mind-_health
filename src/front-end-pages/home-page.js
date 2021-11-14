import React from "react";
import Donate from "../components/donate-button-link";
import GetHelp from "../components/help-button-link";
import Logo from "../components/logo";
import '../style/home-page.scss'

const HomePage =()=>{

    return (
        <div>
            <section className='section_heading'>
                <div className='div_logo'>
                    <Logo />
                </div>
                <div className='div_help'>
                    <GetHelp />
                </div>
                <div className='div_donate'>
                    <Donate />
                </div>   
            </section>

            <section className='nav_section'>
                <ul className='nav_list'>
                    <li> 
                        information
                    </li>
                    <li>
                        about us
                    </li>
                    <li>
                        news
                    </li>
                    <li>
                        get involve
                    </li>
                    <li>
                        shop
                    </li>
                </ul>
            </section>
            
        </div>
    )
}

export default HomePage