import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete'
import Tabs from './frontend/tabs'

const Names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

const tabs = [
  {tab1: "This is tab 1"},
  {tab2: "This is tab 2"},
  {tab3: "This is tab 3"}
]

class Root extends React.Component {
	render() {
		return(
			<div>
				<Clock />
				<Weather />
				<Autocomplete names={Names} />
        <Tabs tabs={tabs}/>
			</div>
		)
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root/>, root);
});
