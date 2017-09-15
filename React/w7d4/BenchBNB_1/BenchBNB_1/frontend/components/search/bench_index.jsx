import React from 'react'

class BenchIndex extends React.Component {

  render() {
    const benches = this.props.benches;
    const benchesArray = Object.keys(benches).map( key => benches[key])
    return(
      <div>
        <h1>Benches:</h1>
        <ul>
          {benchesArray.map(bench => (
            <li key={bench.id}>{bench.description}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default BenchIndex;
