import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

const defaultSF = {
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
    this.map = new google.maps.Map(map, defaultSF);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.singleBench) {
      this.props.fetchBench(this.props.benchId)
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.benches)
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

  handleMarkerClick(benchId) {
    this.props.history.push(`benches/${benchId}`);
  }

  render() {
    return(
      <div id="map-container" ref="map"/>
    )
  }
}

export default withRouter(BenchMap);
