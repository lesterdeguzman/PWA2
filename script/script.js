var x = 1;

function addCard() {
  var ul = document.getElementById("tasks");
  var li = document.createElement("li");
  var inner = "New card " + x;
  li.appendChild(document.createTextNode(inner));
  ul.appendChild(li);
  x++;
  return x;
}

function addList() {
  var div = document.getElementById("lists-section");
  var inDiv = document.createElement("div");
  var inner = '<h3 class="list-title">Tasks to Do</h3><ul class="list-items" id="tasks"></ul><button class="add-card-btn btn" onClick="addCard()">Add a card</button>';
  inDiv.setAttribute("class", "list");
  inDiv.innerHTML = inner;
  div.appendChild(inDiv);
}

function myFunction() {
  var row = document.getElementById("myRow");
  var x = row.insertCell(-1);
  x.innerHTML = "New cell";
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}