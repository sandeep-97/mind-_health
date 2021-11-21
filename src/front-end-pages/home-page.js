import React,{useState} from "react";
import Donate from "../components/donate-button-link";
import GetHelp from "../components/help-button-link";
import Logo from "../components/logo";
import About from "../components/nav-bar_components/about";
import Consult from "../components/nav-bar_components/consult";
import GetInvolve from "../components/nav-bar_components/get_involve";
import Information from "../components/nav-bar_components/information";
import NewsSubnav from "../components/nav-bar_components/news_subnav";
import '../style/home-page.scss'

const HomePage =()=>{

    // this useState controlls the nav state 
    const [open,setOpen]=useState({
        informationNav:false,
        aboutNav:false,
        newsNav:false,
        involveNav:false,
        consultNav:false
    })

    // this function sets the state value of the nave components when to visible by
    // controlling their boolean
    const monitoringNavState=(navSate)=>{
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
    }
    // this function stop default refreshing page when anchor tag is pressed
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
                            information
                        </a>
                        {open.informationNav?<Information />:null}
                    </li>
                    <li>
                        <a href='/' onClick={()=>monitoringNavState('about')} >
                            about us
                        </a>
                        {open.aboutNav?<About/>:null}
                    </li>
                    <li>
                        <a href='/' onClick={()=>monitoringNavState('news')}>
                            news
                        </a>
                        {open.newsNav?<NewsSubnav />:null}
                    </li>
                    <li>
                        <a href='/' onClick={()=>monitoringNavState('involve')}>
                            get involve
                        </a>
                        {open.involveNav?<GetInvolve/>:null}
                    </li>
                    <li>
                        <a href='/' onClick={()=>monitoringNavState('consult')}>
                            consult
                        </a>
                        {open.consultNav?<Consult/>:null}
                    </li>
                </ul>
                
            </section>
            <section className='body-section'>

            </section>
            
        </div>
    )
}

export default HomePage