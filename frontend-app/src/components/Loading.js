import React from 'react';

const Loading = () => {
    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className="spinner-grow text-dark" style={{width: '40px', height: '40px', margin: '10px'}} role="status"/>
            <div className="spinner-grow text-dark" style={{width: '40px', height: '40px', margin: '10px'}} role="status"/>
            <div className="spinner-grow text-dark" style={{width: '40px', height: '40px', margin: '10px'}} role="status"/>
        </div>
    )
}

export default Loading