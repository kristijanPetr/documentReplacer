function onEdit(e){
  replaceChars();
}

function replaceChars() {
  var doc = DocumentApp.openById('1Bzg7OjTm8LaC-H5jmJPirMPpLZshQ98-j9PHsIEGeVc');
  var validpattern = ['S ','Z ','K '];
  for(var i = 0;i< validpattern.length;i++){
    bulletText(validpattern[i]);
  }
}

function bulletText(findMe) {
  var body = DocumentApp.openById('1Bzg7OjTm8LaC-H5jmJPirMPpLZshQ98-j9PHsIEGeVc').getBody();
  var foundElement = body.findText(findMe);
  
  while (foundElement != null) {
    // Get the text object from the element
    var foundText = foundElement.getElement().asText();
    
    // Where in the Element is the found text?
    var start = foundElement.getStartOffset();
    var end = foundElement.getEndOffsetInclusive();
    
    // Change the background color to yellow
    Logger.log(foundText.getText())
    // Find the next match
    foundText.replaceText(findMe,'   • ');
    foundElement = body.findText(findMe, foundElement);
  }
}