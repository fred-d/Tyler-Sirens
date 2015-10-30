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
            zoom: 12
        });
        
        fetch('http://localhost:8000/minMax').then(data => data.json()).then(data => {
            var getNumCalls = cell => cell.properties.calls.length;
            var maxCalls    = d3.max(data.features, getNumCalls);
            var minCalls    = d3.min(data.features, getNumCalls);
            
            var callScale = d3.scale.quantize()
                .domain([minCalls, maxCalls])
                .range(['#4444FF', '#7244D0', '#A144A1', '#D04472', '#FF4444']);
            
            this.map.data.addGeoJson(data);
            this.map.data.setStyle(function(feature) {
                return {
                    fillColor: callScale(feature.getProperty('calls').length),
                    strokeWeight: 0.5,
                    fillOpacity: 1
                };
            })
        });
    }
    
    render() {
        return (
            <div className="map" ref="map"></div>
        );
    }
}
