var App = App || {};

(function() {
  'use strict';

  var e = React.createElement
    , Preview = App.Preview
    , MarkdownEditor = App.MarkdownEditor;

  var Bootstrap = React.createClass({
    getInitialState: function() {
      return {
        value: '',
        scrollTol: 0
      }
    },

    render: function() {
      return (
        e('div', {className: 'app'},
          e('form', null, 
            e('div', null, 
              e(MarkdownEditor, {
                onChange: this.handleChange,
                onScroll: this.handleScroll
              }),
              e(Preview, this.state)
            )
          )
        )
      )
    },

    handleScroll: function(scrollTop) {
      this.setState({
        scrollTop: scrollTop
      });
    },

    handleChange: function(value) {
      this.setState({
        value: value
      })
    }
  });

  React.render(e(Bootstrap, null), document.body);
})();
