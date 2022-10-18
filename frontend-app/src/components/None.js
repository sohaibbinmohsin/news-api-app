import React from 'react';

const None = () => {
    return(
        <div style={{overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center',textAlign: 'center', backgroundColor: '#1b1b1b', borderRadius: '10px', position: 'absolute', top:'25%', left:'20%', width: '60%', height: '50%'}}>
            <text style={{color: 'white', fontWeight: 'bold', fontSize: '70px'}}>
                No results found
            </text>
        </div>
    );
}

export default None;