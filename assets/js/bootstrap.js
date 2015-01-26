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
        words: 0,
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
                syncScroll: this.syncScroll
              }),
              e(Preview, this.state)
            )
          )
        )
      )
    },

    handleChange: function(value) {
      this.setState({
        value: value,
        words: value && value.match(/\S+/g).length || 0
      })
    },

    syncScroll: function(scrollTop) {
      this.setState({
        scrollTop: scrollTop
      });
    }
  });

  React.render(e(Bootstrap, null), document.body);
})();
