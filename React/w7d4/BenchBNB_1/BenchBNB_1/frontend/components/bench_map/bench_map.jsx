import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

const defaultOptions = {
  center: { lat: 37.7758, lng: -122.435},
  zoom: 12
}
const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
})

class BenchMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map
    this.map = new google.maps.Map(map, defaultOptions);
    window.map = this.map;
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.singleBench) {
      this.props.fetchBench(this.props.benchId)
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter('bounds', bounds)
    })
    google.maps.event.addListener(this.map, "click", event => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick();
    })
  }


  componentDidUpdate() {
    if (this.props.singleBench) {
      const targetBenchKey = Object.keys(this.props.benches)[0];
      const targetBench = this.props.benches[targetBenchKey];
      this.MarkerManager.updateMarkers([targetBench]);
      this.map.setCenter({lat: targetBench.lat, lng: targetBench.lng});
      this.map.setZoom(18);
    } else {
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: "benches/new",
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  handleMarkerClick(bench) {
    this.props.history.push(`benches/${bench.id}`);
  }

  render() {
    return(
      <div id="map-container" ref="map"/>
    )
  }
}

export default withRouter(BenchMap);
