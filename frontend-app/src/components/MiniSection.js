import React from 'react'
import './css/home.css'

const MiniSection = (props) => {
    const data = props.data;
    const newsApiLogo = 'data:image/png;base64,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'
    if(data.totalResults >= 5){
        return(
            <div style={{display:'flex', flexDirection:'row'}}>
                <div className='section-news'>
                    <img src={data.articles[0].urlToImage!==null?data.articles[0].urlToImage:newsApiLogo} alt="" width={500} height={300}/>
                    <text className='author'>
                        {data.articles[0].author?data.articles[0].author:data.articles[0].source.name}
                    </text>
                    <text className='title'>
                        <a href={data.articles[0].url} target="_blank" rel="noreferrer">
                            {data.articles[0].title}
                        </a>
                    </text>
                </div>
                <div className='section-news second'>
                    <img src={data.articles[1].urlToImage!==null?data.articles[1].urlToImage:newsApiLogo} alt="" width={250} height={150}/>
                    <text className='author'>
                        {data.articles[1].author?data.articles[1].author:data.articles[1].source.name}
                    </text>
                    <text className='title second'>
                        <a href={data.articles[1].url} target="_blank" rel="noreferrer">
                            {data.articles[1].title}
                        </a>
                    </text>
                    <hr />
                    <text className='author'>
                        {data.articles[2].author?data.articles[2].author:data.articles[2].source.name}
                    </text>
                    <text className='title second'>
                        <a href={data.articles[2].url} target="_blank" rel="noreferrer">
                            {data.articles[2].title}
                        </a>
                    </text>
                </div>
                <div className='section-news second'>
                    <img src={data.articles[3].urlToImage!==null?data.articles[3].urlToImage:newsApiLogo} alt="" width={250} height={150}/>
                    <text className='author'>
                        {data.articles[3].author?data.articles[3].author:data.articles[3].source.name}
                    </text>
                    <text className='title second'>
                        <a href={data.articles[3].url} target="_blank" rel="noreferrer">
                            {data.articles[3].title}
                        </a>
                    </text>
                    <hr />
                    <text className='author'>
                        {data.articles[4].author?data.articles[4].author:data.articles[4].source.name}
                    </text>
                    <text className='title second'>
                        <a href={data.articles[4].url} target="_blank" rel="noreferrer">
                            {data.articles[4].title}
                        </a>
                    </text>
                </div>
            </div>
        )
    }else{
        return(
            <>
                <h3 style={{display: 'flex', justifyContent: 'center', color:'black', fontWeight: 'bold', padding:'15px'}}>No results</h3>
            </>
        );
    }
}

export default MiniSection
