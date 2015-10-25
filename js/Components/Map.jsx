import React  from 'react';
import Google from 'maps';

export default class Map extends React.Component {
    componentDidMount() {
        this.map = new Google.Map(this.refs.map, {
            center: {
                lat: 32.35,
                lng: -95.3
            },
            zoom: 13
        });
        
        this.map.data.loadGeoJson('http://localhost:8000/all');
    }
    
    render() {
        return (
            <div className="map" ref="map"></div>
        );
    }
}
