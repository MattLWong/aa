import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435},
      zoom: 12
    }

    //what is this.mapNode? creates a new map inside the give HTML container
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west } };
        this.props.updateFilter(bounds);
      }
    )
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches)
  }

  render() {
    return(
      <div id="map-container" ref={ map => this.mapNode = map }>

      </div>
    )
  }
}

export default BenchMap;
