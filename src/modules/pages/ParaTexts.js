import React from 'react'
import { connect } from 'react-redux';

class ParaTexts extends React.Component {
  render() {
    return <div className="App-page App-page-paratexts">
      <h1>When I grow up, I will be the Parallel Texts editor...</h1>
    </div>
  }
}
/**
 * Maps the redux store state to this component's props.
 * @param state
 * @returns {{app: *}}
 */
function mapStateToProps(state) {
  return (
      {
        app: state
      }
  );
}
export default connect(mapStateToProps) (ParaTexts);