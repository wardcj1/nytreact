// Include React
var React = require("react");

var Child3 = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h3 className="panel-title">Saved</h3>
            </div>
            <div className="panel-body">
              Saved
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Child3;
