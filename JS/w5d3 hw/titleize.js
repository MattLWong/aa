function titleize(names, cb) {
  let newNames = names.map( name => `Mx. ${name} Jingle`);
  cb(newNames);
}

titleize(["Mary", "John"], (names) => {
  names.forEach(name => console.log(name));
});
