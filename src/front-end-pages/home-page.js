import React,{useState} from "react";
import Donate from "../components/donate-button-link";
import GetHelp from "../components/help-button-link";
import Logo from "../components/logo";
import Information from "../components/nav-bar_components/information";
import '../style/home-page.scss'

const HomePage =()=>{

    const [open,setOpen]=useState({
        informationNav:false,
        aboutNav:false,
        newsNav:false,
        involveNav:false,
        consultNav:false
    })
    console.log('hi')
    const monitoringNavState=(navSate)=>{
        console.log(1)
        switch(navSate){
            case 'information':
                setOpen({
                    ...open,
                    informationNav:!open.informationNav,
                    aboutNav:false,
                    newsNav:false,
                    involveNav:false,
                    consultNav:false
                })
                break
            case 'about':
                setOpen({
                    ...open,
                    aboutNav:!open.aboutNav,
                    informationNav:false,
                    newsNav:false,
                    involveNav:false,
                    consultNav:false
                })
                break
            case 'news':
                setOpen({
                    ...open,
                    newsNav:!open.newsNav,
                    informationNav:false,
                    aboutNav:false,
                    involveNav:false,
                    consultNav:false
                })
                break
            case 'involve':
                setOpen({
                    ...open,
                    involveNav:!open.involveNav,
                    informationNav:false,
                    aboutNav:false,
                    newsNav:false,
                    consultNav:false
                })
                break
            case 'consult':
                setOpen({
                    ...open,
                    consultNav:!open.consultNav,
                    informationNav:false,
                    aboutNav:false,
                    newsNav:false,
                    involveNav:false
                })
                break
            default:
                setOpen(open)
        }
        console.log(open.informationNav)
    }

    const upvote=(e)=>{
        // e.stopPropogation()
        // e.nativeEvent.stopImmediatePropagation();
        e.preventDefault()    
    }

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

            <section className='nav_section' onClick={upvote}>
                <ul className='nav_list'>
                    <li> 
                        <a href='/'   onClick={()=>{monitoringNavState('information')}} >
                            information and support
                        </a>
                    </li>
                    <li>
                        <a href='/' onClick={()=>monitoringNavState('about')} >
                            about us
                        </a>
                    </li>
                    <li>
                        <a href='/' onClick={()=>monitoringNavState('news')}>
                            news
                        </a>
                    </li>
                    <li>
                        <a href='/' onClick={()=>monitoringNavState('involve')}>
                            get involve
                        </a>
                    </li>
                    <li>
                        <a href='/' onClick={()=>monitoringNavState('consult')}>
                            consult
                        </a>
                    </li>
                </ul>
                
            </section>
            <section>
                {open.informationNav?<Information />:null}
            </section>
            
        </div>
    )
}

export default HomePage