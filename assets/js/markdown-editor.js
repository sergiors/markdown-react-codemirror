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

      editor.on('scroll', this.handleScroll);
    },

    handleScroll: function(e) {
      var editorViewport = e.getScrollInfo()
        , previewViewport = document.getElementsByClassName('preview')[0]
        , editorContent = document.getElementsByClassName('CodeMirror-sizer')[0]
        , previewContent = document.getElementsByClassName('rendered-markdown')[0]
        , editorHeight = editorContent.clientHeight - editorViewport.clientHeight
        , previewHeight = previewContent.clientHeight - previewViewport.clientHeight
        , ratio = previewHeight / editorHeight;

      this.props.syncScroll(editorViewport.top * ratio);
    },

    render: function() {
      return (
        e('div', {className: 'editor scrollthis'},
          e('div', {className: 'floatingheader'},
            e('small', null, 'Markdown')
          ), 
          e('textarea', {
            className: 'form-control',
            ref: 'editor'
          })
        )
      )
    }
  });

})();
