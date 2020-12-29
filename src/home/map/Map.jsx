import React, { Component } from 'react'

export default class Map extends Component {
    render() {
        return (
            <div style={{width: '100%', height: '100%'}}>
                <iframe 
                    style={{width: '100%', height: '100%'}}
                    src="/map.html" 
                    title="ifrm" 
                    frameBorder="0"></iframe>
            </div>
        )
    }
}
