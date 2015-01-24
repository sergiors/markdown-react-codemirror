var App = App || {};

(function() {
  'use strict';

  var e = React.createElement;

  App.MarkdownEditor = React.createClass({
    componentDidMount: function() {
      var editor = CodeMirror.fromTextArea(this.refs.editor.getDOMNode(), {
        mode: 'markdown',
        lineWrapping: true,
        autofocus: true
      })

      editor.on('change', function() {
        this.props.onChange(editor.getValue());
      }.bind(this));

      editor.on('scroll', function(e) {
        this.props.onScroll(e.getScrollInfo().top);
      }.bind(this));
    },

    render: function() {
      return (
        e('div', {className: 'editor scrollthis'}, 
          e('textarea', {
            className: 'form-control',
            ref: 'editor'
          })
        )
      )
    }
  });

})();
