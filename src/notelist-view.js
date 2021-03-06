
(function(exports) {

  function NoteListView(notelist) {
    this.viewnotelist = notelist;
  }

  NoteListView.prototype.returnHTML = function() {
    var stringhtml = '<ul>'
    //console.log(this.viewnotelist.showList())
    this.viewnotelist.showList().forEach (note => {
      stringhtml += `<a href= #${note.returnId()}> <li><div> ${note.receivesText().substr(0,20)}</div></li> </a>`
    });
    //console.log(stringhtml)
    return stringhtml + '</ul>';
  }

exports.NoteListView = NoteListView;
})(this);
