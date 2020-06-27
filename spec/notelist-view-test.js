function noteListViewInstantiation() {
  var notelist = new NoteList()
  var nlview = new NoteListView(notelist)
  assert.isTrue(nlview.viewnotelist === notelist)
}

function returnHTMLTest() {
  var notelist = new NoteList()
  nlview = new NoteListView(notelist)
  //assert.isTrue(nlview.returnHTML() === "<ul><a href= > <li><div></div></li></ul>")
  notelist.addNote("Favourite food: pesto")
     
  assert.isTrue(nlview.returnHTML() === "<ul><a href= #0> <li><div> Favourite food: pest</div></li> </a></ul>")
  notelist.addNote("Favourite drink: seltzer")
  assert.isTrue(nlview.returnHTML() === "<ul><a href= #0> <li><div> Favourite food: pest</div></li> </a><a href= #1> <li><div> Favourite drink: sel</div></li> </a></ul>")
}
// function returnHTMLTest() {
//   var notelist = new NoteList()
//   nlview = new NoteListView(notelist)
//   assert.isTrue(nlview.returnHTML() === "<ul><li><div></div></li></ul>")
//   notelist.addNote("Favourite food: pesto")
//   assert.isTrue(nlview.returnHTML() === "<ul><li><div>Favourite food: pesto</div></li></ul>")
//   notelist.addNote("Favourite drink: seltzer")
//   assert.isTrue(nlview.returnHTML() === "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>")
// }

noteListViewInstantiation()
returnHTMLTest()

//<ul><a href= #0> <li><div> Favourite food: pest</div></li> </a> <ul><a href= #1> <li><div> Favourite drink: sel</div></li> </a> </ul>