var App = App || {};

(function() {
  'use strict';

  var e = React.createElement
    , converter = new Showdown.converter();

  App.Preview = React.createClass({
    componentDidUpdate: function(prevProps) {
      if (this.props.scrollTop != prevProps.scrollTop) {
        this.refs.preview.getDOMNode().scrollTop = this.props.scrollTop;
      }
    },

    render: function() {
      return (
        e('div', {
          className: 'preview scrollthis',
          dangerouslySetInnerHTML: {
            __html: converter.makeHtml(this.props.value)
          },
          ref: 'preview'
        })
      )
    }
  });

})();
