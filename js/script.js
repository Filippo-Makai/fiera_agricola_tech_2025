


function myFunction() {
  // Declare variables
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function selectMap(elem, event) {
    let mappa = document.getElementById("mappa");
    let this_elem = document.getElementById(event);
    let a = document.querySelectorAll('li a');
    let elemA = elem.children[0];
  console.log(elemA);
  // clear if selected
  if (elemA.classList.contains("selected")) {
    clearList();
  } else {
    //mappa
    for (const child of mappa.children) {
        child.style.display = "none";
    }
    this_elem.style.display = "block";

    //select lista
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('selected')
    }
    elemA.classList.add('selected');
    /*link = document.this;
    console.log(elem);
    elem.classList.add("selected");*/
    }
    
}

function clearInput() {
    let mappa = document.getElementById("mappa");
    let input = document.getElementById('myInput');
    let ul = document.getElementById("myUL");
    let li = ul.getElementsByTagName('li');

    //clear input
    input.value = "";

    // clear map
    for (const child of mappa.children) {
        child.style.display = "none";
    }
    document.querySelector('#mappa_fiera').style.display = "block";

    // clear list
    for (i = 0; i < li.length; i++) {
        li[i].style.display = "";
        li[i].children[0].classList.remove('selected')
    }
}

function clearList() {
  let mappa = document.getElementById("mappa");
  let ul = document.getElementById("myUL");
  let li = ul.getElementsByTagName('li');


  // clear map
  for (const child of mappa.children) {
      child.style.display = "none";
  }
  document.querySelector('#mappa_fiera').style.display = "block";

  // clear list
  for (i = 0; i < li.length; i++) {
      li[i].children[0].classList.remove('selected')
  }
}
