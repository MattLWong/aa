export default class MarkerManager {
  constructor(map, method) {
    this.map = map;
    this.markers = {};
    this.handleMarkerClick = method;
  }

  //instance method
  updateMarkers(benches) {
    const benchesObj = {};
    benches.forEach(bench => benchesObj[bench.id] = bench); //creates benches object on the benches passed in
    benches
      .filter(bench => !this.markers[bench.id]) //if the marker doesn't exist;
      .forEach(newBench => this.createMarkerFromBench(newBench, this.handleClick))

    Object.keys(this.markers)
      .filter(benchId => !benchesObj[benchId]) //if the marker is not in the benches prop (if the statement is true, let it through)
      .forEach((benchId) => this.removeMarker(this.markers[benchId]))
  }

  createMarkerFromBench(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      id: bench.id
    });
    marker.addListener('click', () => this.handleMarkerClick(bench))
    this.markers[bench.id] = marker;
  }

  removeMarker(marker) {
    marker.setMap(null);
    delete this.markers[marker.id];
  }
}
