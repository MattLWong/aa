import React from 'react';

class Headers extends React.Component {
  render() {
    const headers = [];
    const selectedPane = this.props.selectedPane;
    let that = this;
    this.props.panes.forEach( function(pane, idx) {
      let klass = "";
      if (idx == selectedPane) {
        klass = "active";
      }
      headers.push(
        <li key={idx}
        onClick={that.props.onNewTab.bind(null, idx)}
        className={klass}>
          {pane.title}
        </li>
      )
    })

    return (
      <ul className="tab-header">
        {headers}
      </ul>
    )
  }
}

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane : 0
    }
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({selectedPane : num})
  }

  render() {
    const content = this.props.panes[this.state.selectedPane].content;
    return (
      <div>
        <h1>Tabs</h1>
        <Headers
          panes={this.props.panes}
          selectedPane={this.state.selectedPane}
          onNewTab={this.selectTab}/>
        <div className="tab-content">
          <article>
            {content}
          </article>
        </div>
      </div>
    )
  }
}




























//
// class Headers extends React.Component {
//   render() {
//     // pass selected pane from the props
//     let selected = this.props.selectedPane;
//     // panes is the an array of JS objects
//     let headers = this.props.panes.map((pane, index) => {
//       // extract the title from the pane
//       let title = pane.title;
//       //a class with an empty string does not show up as a class
//       let klass = '';
//       if (index === selected) {
//         klass = 'active';
//       }
//
//       return (
//         // key does not show up as an attribute
//         // I don't understand why we bind(null, index)
//         // when the li is clicked, we execute the function passed through as a prop called onTabChoosen, which is not bound, but accepts index as an argument
//         <li
//           key={index}
//           className={klass}
//           onClick={this.props.onTabChosen.bind(null, index)}>
//           {title}{' '}
//         </li>
//       );
//     });
//     return (
//       <ul className='tab-header'>
//         {headers}
//       </ul>
//
//     );
//  }
// }
//
// export default class Tabs extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // store the active pane
//       selectedPane: 0
//     };
//     this.selectTab = this.selectTab.bind(this);
//   }
//
//   selectTab(num) {
//     this.setState({selectedPane: num});
//   }
//
//   render() {
//     let pane = this.props.panes[this.state.selectedPane];
//
//     return (
//       <div>
//         <h1>Tabs</h1>
//         <div className='tabs'>
//           <Headers
//             selectedPane={this.state.selectedPane}
//             onTabChosen={this.selectTab}
//             panes={this.props.panes}>
//           </Headers>
//           <div className='tab-content'>
//             <article>
//               {pane.content}
//             </article>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
