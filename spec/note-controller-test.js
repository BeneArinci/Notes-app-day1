function testController() {
  var noteList = new NoteList()
  //noteList.addNote("test note")
  //var id = noteList.returnList()
  var noteController = new NoteController(noteList)
  noteController.insertHTML()
  //console.log(document.getElementById('app').innerHTML)
  assert.isTrue(document.getElementById('app').innerHTML === '<ul></ul>')
}


testController();
//<a href="#0"> <li><div> Favourite drink: sel</div></li> </a> 
