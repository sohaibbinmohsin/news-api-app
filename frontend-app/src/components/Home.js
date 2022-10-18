import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import MiniSection from './MiniSection';
import Loading from './Loading';
import './css/home.css';

const Home = () => {
    const { country } = useParams()
    const apiKey = '8262dd7e3da54ebda05d0163e92d7ac7';
    let c = 'united-states'
    const short = {
        'argentina' : 'ar',
        'australia' : 'au',
        'austria' : 'at',
        'belgium' : 'be',
        'brazil' : 'br',
        'bulgaria' : 'bg',
        'canada' : 'ca',
        'colombia' : 'cn',
        'cuba' : 'cu',
        'czech-republic' : 'cz',
        'egypt' : 'eg',
        'france' : 'fr',
        'germany' : 'de',
        'greece' : 'gr',
        'hong-kong' : 'hk',
        'hungary' : 'hu',
        'india' : 'in',
        'indonesia' : 'id',
        'ireland' : 'ie',
        'israel' : 'il',
        'italy' : 'it',
        'japan' : 'jp',
        'latvia' : 'lv',
        'lithuania' : 'lt',
        'malaysia' : 'my',
        'mexico' : 'mx',
        'morocco' : 'ma',
        'netherlands' : 'nl',
        'new-zealand' : 'nz',
        'nigeria' : 'ng',
        'norway' : 'no',
        'philippines' : 'ph',
        'poland' : 'pl',
        'portugal' : 'pt',
        'romania' : 'ro',
        'russia' : 'ru',
        'saudi-arabia' : 'sa',
        'serbia' : 'rs',
        'singapore' : 'sg',
        'slovakia' : 'sk',
        'slovenia' : 'si',
        'south-africa' : 'za',
        'south-korea' : 'kr',
        'sweden' : 'se',
        'switzerland' : 'ch',
        'taiwan' : 'tw',
        'thailand' : 'th',
        'turkey' : 'tr',
        'uae' : 'ae',
        'ukraine' : 'ua',
        'united-kingdom' : 'gb',
        'united-states' : 'us',
        'venuzuela' : 've'
    }

    const shortForm = () => {
        if(country){
            c = country
            return short[country]
        }
        else{
            return 'us'
        }
    }

    const url1 = `https://newsapi.org/v2/top-headlines?country=${shortForm(country)}&category=business&pageSize=5&apiKey=${apiKey}`
    const url2 = `https://newsapi.org/v2/top-headlines?country=${shortForm(country)}&category=entertainment&pageSize=5&apiKey=${apiKey}`
    const url3 = `https://newsapi.org/v2/top-headlines?country=${shortForm(country)}&category=general&pageSize=5&apiKey=${apiKey}`
    const url4 = `https://newsapi.org/v2/top-headlines?country=${shortForm(country)}&category=health&pageSize=5&apiKey=${apiKey}`
    const url5 = `https://newsapi.org/v2/top-headlines?country=${shortForm(country)}&category=science&pageSize=5&apiKey=${apiKey}`
    const url6 = `https://newsapi.org/v2/top-headlines?country=${shortForm(country)}&category=sports&pageSize=5&apiKey=${apiKey}`
    const url7 = `https://newsapi.org/v2/top-headlines?country=${shortForm(country)}&category=technology&pageSize=5&apiKey=${apiKey}`
    
    let options = {
        method: 'GET'
    };
    const optionsStr = JSON.stringify(options);

    const {data:businessData,responseStatus:businessResponseStatus} = useFetch(url1,optionsStr);
    const {data:entertainmentData,responseStatus:entertainmentResponseStatus} = useFetch(url2,optionsStr);
    const {data:generalData,responseStatus:generalResponseStatus} = useFetch(url3,optionsStr);
    const {data:healthData,responseStatus:healthResponseStatus} = useFetch(url4,optionsStr);
    const {data:scienceData,responseStatus:scienceResponseStatus} = useFetch(url5,optionsStr);
    const {data:sportsData,responseStatus:sportsResponseStatus} = useFetch(url6,optionsStr);
    const {data:technologyData,responseStatus:technologyResponseStatus} = useFetch(url7,optionsStr);
    
    const displayData = (d, res) => {
        if (d === null) {
            return(
                <Loading />
            );        
        }
        else{
            if(res === 200){
                return(<MiniSection data={d} />);
            }
            else {
                return(
                    <>
                        <h3 style={{display: 'flex', justifyContent: 'center', color:'black', fontWeight: 'bold', padding:'15px'}}>Something went wrong</h3>
                    </>
                );
            }
        }
    }

    return(
        <>
            <text className='main-heading'>Top Headlines</text>
            <div style={{margin: '20px'}}>
                <div className='home-section'>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <text className='heading'>Business</text>
                        <text className='section-link'><a href={'/section/business/'+c}>Read More</a></text>
                    </div>
                    <hr />
                    {displayData(businessData, businessResponseStatus)}

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <text className='heading'>Entertainment</text>
                        <text className='section-link'><a href={'/section/entertainment/'+c}>Read More</a></text>
                    </div>
                    <hr />
                    {displayData(entertainmentData, entertainmentResponseStatus)}

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <text className='heading'>General</text>
                        <text className='section-link'><a href={'/section/general/'+c}>Read More</a></text>
                    </div>
                    <hr />
                    {displayData(generalData, generalResponseStatus)}

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <text className='heading'>Health</text>
                        <text className='section-link'><a href={'/section/health/'+c}>Read More</a></text>
                    </div>
                    <hr />
                    {displayData(healthData, healthResponseStatus)}

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <text className='heading'>Science</text>
                        <text className='section-link'><a href={'/section/science/'+c}>Read More</a></text>
                    </div>
                    <hr />
                    {displayData(scienceData, scienceResponseStatus)}

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <text className='heading'>Sports</text>
                        <text className='section-link'><a href={'/section/sports/'+c}>Read More</a></text>
                    </div>
                    <hr />
                    {displayData(sportsData, sportsResponseStatus)}

                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <text className='heading'>Technology</text>
                        <text className='section-link'><a href={'/section/technology/'+c}>Read More</a></text>
                    </div>
                    <hr />
                    {displayData(technologyData, technologyResponseStatus)}
                </div>
            </div>
        </>
    );
}

export default Home
