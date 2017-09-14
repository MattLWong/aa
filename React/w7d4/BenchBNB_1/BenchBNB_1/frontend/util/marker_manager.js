export default class MarkerManager {
  constructor(map, method) {
    this.map = map;
    this.markers = {};
    this.handleMarkerClick = method;
  }

  updateMarker(bench) {
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      id: bench.id
    });
    this.markers[bench.id] = marker;
  }

  //instance method
  updateMarkers(benches) {
    for (let key in benches) {
      let bench = benches[key];
      if (!Object.keys(this.markers).includes(key)) {
        this.createMarkerFromBench(bench);
      }
    }

    for (let key in this.markers) {
       if (!Object.keys(benches).includes(key)) {
         this.removeMarker(this.markers[key]);
       }
    }
  }

  createMarkerFromBench(bench) {
    const that = this;
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      id: bench.id
    });
    marker.addListener('click', (event) => {
      console.log(marker.id);
      that.handleMarkerClick(marker.id)
    })
    this.markers[bench.id] = marker;
  }

  removeMarker(marker) {
    console.log("a marker was deleted");
    this.markers[marker.id].setMap(null);
    delete this.markers[marker.id];
  }
}
