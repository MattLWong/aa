export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  //instance method
  updateMarkers(benches) {
    for (let key in benches) {
      console.log("iterating through each bench...");
      let bench = benches[key];
      if (!Object.keys(this.markers).includes(key)) {
        console.log("Adding bench to markers object!");
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
    const position = new google.maps.LatLng(bench.lat, bench.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      id: bench.id
    });
    this.markers[bench.id] = marker;
  }

  removeMarker(marker) {
    console.log("a marker was deleted");
    this.markers[marker.id].setMap(null);
    delete this.markers[marker.id];
    // this.markers[marker.id].setMap(null);
    // delete this.markers[marker.benchId];
  }
}
