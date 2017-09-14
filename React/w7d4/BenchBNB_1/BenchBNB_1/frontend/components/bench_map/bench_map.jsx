import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router-dom';

class BenchMap extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    const defaultSF = {
      center: { lat: 37.7758, lng: -122.435},
      zoom: 12
    }
    const bench = this.props.singleBench;
    if (bench) {
      const benchLocation = {
        center: { lat: bench.lat, lng: bench.lng },
        zoom: 17
      }
      this.map = new google.maps.Map(this.mapNode, benchLocation);
      this.MarkerManager = new MarkerManager(this.map);
      this.MarkerManager.updateMarker(bench); //later change MM
    } else {
      this.map = new google.maps.Map(this.mapNode, defaultSF);
      this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
      this.MarkerManager.updateMarkers(this.props.benches);
      google.maps.event.addListener(this.map, "idle", () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
          northEast: { lat: north, lng: east },
          southWest: { lat: south, lng: west } };
          this.props.updateFilter("bounds", bounds);
        }
      )
      google.maps.event.addListener(this.map, "click", (event) => {
        let coords = {lat: event.latLng.lat(), lng: event.latLng.lng()}
        this.handleClick(coords)
      })
    }
  }

  componentDidUpdate() {
    if (!this.props.singleBench) {
      this.MarkerManager.updateMarkers(this.props.benches)
    }
  }

  handleClick(coords) {
    //why is bind not required here
    this.props.history.push({
      pathname: "benches/new",
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  handleMarkerClick(benchId) {
    this.props.history.push({
      pathname: `benches/${benchId}`,
      bench: this.props.benches[benchId]
    });
  }

  render() {
    return(
      <div id="map-container" ref={ map => this.mapNode = map }/>
    )
  }
}

export default withRouter(BenchMap);
