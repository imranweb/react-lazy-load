// import React, {Component} from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {welcome:'Hello Visitor!'};
//   }

//   render() {
//     return(
//       <h1>{this.state.welcome}</h1>
//     )
//   }
// }

// export default App;
import React from "react";
//import loadable from '@loadable/component';
import StockTable from "./StockTable";

//import StockChart from "./StockChart";

const StockChart = React.lazy(() => import('./StockChart'))

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStock: null
    };
  }
  
  render() {
    const { stocks } = this.props;
    const { selectedStock } = this.state;
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <StockTable
          stocks={stocks}
          onSelect={selectedStock => this.setState({ selectedStock })}
        />
        {selectedStock && (
          <StockChart
            stock={selectedStock}
            onClose={() => this.setState({ selectedStock: false })}
          />
        )}

        
      </React.Suspense>
    );
  }
}

export default App;
