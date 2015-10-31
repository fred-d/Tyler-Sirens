import React  from 'react';
import Google from 'maps';
import d3     from 'd3';

export default class Map extends React.Component {
    componentDidMount() {
        this.map = new Google.Map(this.refs.map, {
            center: {
                lat: 32.35,
                lng: -95.3
            },
            zoom: 13
        });
        
        fetch('https://tyler-sirens-api.tylerwebdev.io/all').then(data => data.json()).then(data => {
            var points = data.features
                .map(feature => new Google.LatLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]));
            
            this.heatmap = new Google.visualization.HeatmapLayer({
                data: points,
                map: this.map,
                radius: 20,
                maxIntensity: 10
            });
        });
    }
    
    render() {
        return (
            <div className="map" ref="map"></div>
        );
    }
}
