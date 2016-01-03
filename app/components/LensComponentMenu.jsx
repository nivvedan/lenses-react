var React = require('react');
var LensOvalButton = require('./LensOvalButton.jsx');


var LensComponentMenu = React.createClass({
  render: function() {
    var lensComponents = [];

    this.props.initialLensComponents.forEach(function(component) {
      lensComponents.push(<LensOvalButton key={component.id}
                          backgroundColor='#E0E0E0'
                          content={component.name}
                          border='none'
                          margin='5px'/>);
    });
    return (
      <div className='lens-component-menu'>
        {lensComponents}
        <LensOvalButton key='add-new-component' 
                        margin='5px'
                        content='ADD NEW COMPONENT' />
      </div>
           )
  }
});

module.exports = LensComponentMenu;
