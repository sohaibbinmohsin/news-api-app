import React, {useState} from 'react';
import './css/navbar.css';

const Navbar = () => {
    let con = ''
    const cap = (name) => {
        let name1 = name.split('/')
        name = name1[(name1.length)-1]
        con = name
        if(name === ''){
            con = 'united-states'
            return "United States"
        }
        else if(name === 'uae'){
            return "UAE"
        }
        else{
            let breakName = name
            breakName = breakName.split("-")
            let answer = ""
            for(let i = 0; i < breakName.length; i++){
                answer += breakName[i].charAt(0).toUpperCase() + breakName[i].substring(1) + " "
            }
            return answer
        }
    }
    const [Country, setCountry] = useState(cap(window.location.pathname))
    const [navBar, setNavBar] = useState(false);
    let screenWidth = window.screen.width;
    let more = <li>
        <a href='/'>More</a>
        <ul style={{height:'105px'}}>
            <li><a href={'/section/technology/'  + con}>Technology</a></li>
            <li><a href={'/search/' + con}>Search</a></li>
        </ul>
    </li>

    let normal = <>
        <li><a href={'/section/technology/'  + con}>Technology</a></li>
        <li><a href={'/search/' + con}>Search</a></li>
    </>
    const changeNavBarColor = () => {
        if(window.scrollY > 70){
            setNavBar(true)
        }else{
            setNavBar(false)
        }
    }
    window.addEventListener('scroll', changeNavBarColor);
    
    return (
        <div>
            <nav className={navBar? 'nav-bar active': 'nav-bar'}>
                <div className="logo">
                    <a href="/">Global News</a>
                </div>
                <ul>
                    <li className="country">
                        <a href="/" style={{background:'rgb(48, 97, 255)', borderRadius:'5px', border:'solid 1px white', color:'white'}}>{Country}</a>
                        <ul>
                            <li><a href='/argentina' onClick={() => setCountry('Argentina')}>Argentina</a></li>
                            <li><a href='/australia' onClick={() => setCountry('Australia')}>Australia</a></li>
                            <li><a href='/austria' onClick={() => setCountry('Austria')}>Austria</a></li>
                            <li><a href='/belgium' onClick={() => setCountry('Belgium')}>Belgium</a></li>
                            <li><a href='/brazil' onClick={() => setCountry('Brazil')}>Brazil</a></li>
                            <li><a href='/bulgaria' onClick={() => setCountry('Bulgaria')}>Bulgaria</a></li>
                            <li><a href='/canada' onClick={() => setCountry('Canada')}>Canada</a></li>
                            <li><a href='/china' onClick={() => setCountry('China')}>China</a></li>
                            <li><a href='/columbia' onClick={() => setCountry('Columbia')}>Columbia</a></li>
                            <li><a href='/cuba' onClick={() => setCountry('Cuba')}>Cuba</a></li>
                            <li><a href='/czech-republic' onClick={() => setCountry('Czech Republic')}>Czech Republic</a></li>
                            <li><a href='/egypt' onClick={() => setCountry('Egypt')}>Egypt</a></li>
                            <li><a href='/france' onClick={() => setCountry('France')}>France</a></li>
                            <li><a href='/germany' onClick={() => setCountry('Germany')}>Germany</a></li>
                            <li><a href='/greece' onClick={() => setCountry('Greece')}>Greece</a></li>
                            <li><a href='/hong-kong' onClick={() => setCountry('Hong Kong')}>Hong Kong</a></li>
                            <li><a href='/hungary' onClick={() => setCountry('Hungary')}>Hungary</a></li>
                            <li><a href='/india' onClick={() => setCountry('India')}>India</a></li>
                            <li><a href='/indonesia' onClick={() => setCountry('Indonesia')}>Indonesia</a></li>
                            <li><a href='/ireland' onClick={() => setCountry('Ireland')}>Ireland</a></li>
                            <li><a href='/israel' onClick={() => setCountry('Israel')}>Israel</a></li>
                            <li><a href='/italy' onClick={() => setCountry('Italy')}>Italy</a></li>
                            <li><a href='/japan' onClick={() => setCountry('Japan')}>Japan</a></li>
                            <li><a href='/latvia' onClick={() => setCountry('Latvia')}>Latvia</a></li>
                            <li><a href='/lithuania' onClick={() => setCountry('Lithuania')}>Lithuania</a></li>
                            <li><a href='/malaysia' onClick={() => setCountry('Malaysia')}>Malaysia</a></li>
                            <li><a href='/mexico' onClick={() => setCountry('Mexico')}>Mexico</a></li>
                            <li><a href='/morocco' onClick={() => setCountry('Morocco')}>Morocco</a></li>
                            <li><a href='/netherlands' onClick={() => setCountry('Netherlands')}>Netherlands</a></li>
                            <li><a href='/new-zealand' onClick={() => setCountry('New Zealand')}>New Zealand</a></li>
                            <li><a href='/nigeria' onClick={() => setCountry('Nigeria')}>Nigeria</a></li>
                            <li><a href='/norway' onClick={() => setCountry('Norway')}>Norway</a></li>
                            <li><a href='/philippines' onClick={() => setCountry('Philippines')}>Philippines</a></li>
                            <li><a href='/poland' onClick={() => setCountry('Poland')}>Poland</a></li>
                            <li><a href='/romania' onClick={() => setCountry('Romania')}>Romania</a></li>
                            <li><a href='/russia' onClick={() => setCountry('Russia')}>Russia</a></li>
                            <li><a href='/saudia-arabia' onClick={() => setCountry('Saudia Arabia')}>Saudia Arabia</a></li>
                            <li><a href='/serbia' onClick={() => setCountry('Serbia')}>Serbia</a></li>
                            <li><a href='/germany' onClick={() => setCountry('Germany')}>Singapore</a></li>
                            <li><a href='/slovakia' onClick={() => setCountry('Slovakia')}>Slovakia</a></li>
                            <li><a href='/slovenia' onClick={() => setCountry('Slovenia')}>Slovenia</a></li>
                            <li><a href='/south-africa' onClick={() => setCountry('South Africa')}>South Africa</a></li>
                            <li><a href='/south-korea' onClick={() => setCountry('South Korea')}>South Korea</a></li>
                            <li><a href='/sweden' onClick={() => setCountry('Sweden')}>Sweden</a></li>
                            <li><a href='/switzerland' onClick={() => setCountry('Switzerland')}>Switzerland</a></li>
                            <li><a href='/taiwan' onClick={() => setCountry('Taiwan')}>Taiwan</a></li>
                            <li><a href='/thailand' onClick={() => setCountry('Thailand')}>Thailand</a></li>
                            <li><a href='/turkey' onClick={() => setCountry('Turkey')}>Turkey</a></li>
                            <li><a href='/uae' onClick={() => setCountry('UAE')}>UAE</a></li>
                            <li><a href='/ukraine' onClick={() => setCountry('Ukraine')}>Ukraine</a></li>
                            <li><a href='/united-kingdom' onClick={() => setCountry('United Kingdom')}>United Kingdom</a></li>
                            <li><a href="/united-states" onClick={() => setCountry('United States')}>United States</a></li>
                            <li><a href='/venuzuela' onClick={() => setCountry('Venuzuela')}>Venuzuela</a></li>
                        </ul>
                    </li>
                    <li><a href={'/section/business/' + con}>Business</a></li>
                    <li><a href={'/section/entertainment/'  + con}>Entertainment</a></li>
                    <li><a href={'/section/general/'  + con}>General</a></li>
                    <li><a href={'/section/health/'  + con}>Health</a></li>
                    <li><a href={'/section/science/'  + con}>Science</a></li>
                    <li><a href={'/section/sports/'  + con}>Sports</a></li>
                    {screenWidth <= 1440 ? more : normal}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
