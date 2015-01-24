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
        e('div', {className: 'preview',},
          e('div', {className: 'floatingheader'},
            e('small', null, 'Preview')
          ),
          e('div', {className: 'preview-content scrollthis', ref: 'preview'}, 
            e('div', {
              className: 'rendered-markdown',
              dangerouslySetInnerHTML: {
                __html: converter.makeHtml(this.props.value)
              }
            })
          )
        )
      )
    }
  });

})();
