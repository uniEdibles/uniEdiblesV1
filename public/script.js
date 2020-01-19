window.onload = function() {
  var button = document.getElementById("submit");
  button.onclick = addItem;
};

function addItem() {
  var textInput = document.getElementById("inputText"); //getting text input
  var text = textInput.value; //getting value of text input element
  var ul = document.getElementById("ul"); //getting element <ul> to add element to
  var li = document.createElement("li"); //creating li element to add
  li.innerHTML = text; //inserting text into newly created <li> element
  li.onclick = function() {
    this.parentNode.removeChild(this);
  };
  if (ul.childElementCount == 0) {
    //using if/else statement to add items to top of list
    ul.appendChild(li); // will add if count of ul children is 0 otherwise add before first item
  } else {
    ul.insertBefore(li, ul.firstChild);
  }
}
