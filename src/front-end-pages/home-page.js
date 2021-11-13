import React from "react";
import Donate from "../components/donate-button-link";
import GetHelp from "../components/help-button-link";
import Logo from "../components/logo";


const HomePage =()=>{

    return (
        <div>
            <section>
                
                <Logo />
                <GetHelp />
                <Donate />
                
            </section>
            <section>
                <ul>
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