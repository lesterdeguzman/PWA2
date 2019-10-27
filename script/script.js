// var x = 1;

// function addCard() {
//   var ul = document.getElementById("tasks");
//   var li = document.createElement("li");
//   var inner = "New card " + x;
//   li.appendChild(document.createTextNode(inner));
//   ul.appendChild(li);
//   x++;
//   return x;
// }

function addList() {
  var div = document.getElementById("lists-section");
  var inDiv = document.createElement("div");
  var nm = document.getElementById("list-name").value;
  var inner = '<h3 class="list-title">' + nm + '</h3><ul class="list-items" id="tasks"></ul><span onclick="myFunction()" class="def">+ Add Another Card</span><div id="myDIV" class="hide"><input type="text" id="myInput" placeholder="Item name..."><span onclick="newElement()" class="addBtn">Add Card</span></div>';
  inDiv.setAttribute("class", "list");
  inDiv.innerHTML = inner;
  div.appendChild(inDiv);
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("tasks").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}