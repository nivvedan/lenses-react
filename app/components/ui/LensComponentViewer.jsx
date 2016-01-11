var React = require('react');
var LensDataViewer = require('./LensDataViewer.jsx');


var LensComponentViewer = React.createClass({
  render: function() {


    var CurrentlySelectedCmp = null;
    var data = this.props.data;
    var columns = this.props.columns;
    // 0 is the first element; null defaults to add new component menu
    if (this.props.currentSelectedNode !== null)  {
      CurrentlySelectedCmp = this.props.tracks[this.props.currentSelectedTrack][this.props.currentSelectedNode];
    }

    this.props.tracks[this.props.currentSelectedTrack].forEach(function(cmp) {
      data = cmp.transformData(data);
    });

    return (
      <div className='lens-component-viewer'>
        <CurrentlySelectedCmp.reactCmp updateTransformFunction={this.props.updateTransformFunction} updateColumns={this.props.updateColumns} data={data} columns={this.props.columns}/>
        <LensDataViewer data={data} columns={columns} />
      </div>
    )
  }
});

module.exports = LensComponentViewer;
