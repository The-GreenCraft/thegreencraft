var activeDivId = '';

function setActiveDiv(divId) {
  activeDivId = divId;
}

function scrollHorizontally(event) {
  event.preventDefault();
  var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
  var activeDiv = document.getElementById(activeDivId);

  if (activeDiv) {
    activeDiv.scrollLeft -= (delta * 30);
  }
}



function opencode() {
    var popup = document.getElementById('codewatch');
    popup.style.display = "block";
}

function closecode() {
    var popup = document.getElementById('codewatch');
    popup.style.display = "none";
    document.getElementById('code').innerHTML = '';
}



//ITEMS

function itm1() {
    var codeText = `
<xmp>
HTML
    
<button id="button-green">CLICK</button>


CSS

#button-green{
    padding: 20px;
    border-radius: 20px;
    width: 200px;
    background-color: #173800;
    border: transparent;
    transition: all 0.5s;
    color: white;
    filter: drop-shadow(0px 0px 10px black);
  }
  #button-green:hover{
    cursor: pointer;
    width: 250px;
    transition: all 0.5s;
    background-color: #317600;
  }

</xmp>
        `;
        document.getElementById('code').innerHTML = codeText;
        document.getElementById('code-h1').innerHTML = "BUTTON";
        document.getElementById('testbox-center').innerHTML = '<button id="button-green">CLICK</button>';
}





function itm2() {
    var codeText = `
<xmp>
HTML
    
<input type="password" name="Password" id="password-border" placeholder="Password">


CSS

#password-border{
    padding: 1%;
    border-radius: 7px;
    width: 200px;
    background-color: transparent;
    border: rgb(134, 134, 134) 2px solid;
    transition: all 0.5s;
    color: white;
    width: 240px;
    height: 30px;
    filter: drop-shadow(0px 0px 10px black);
    padding-left: 20px;
  }

  #password-border:hover{
    background-color: rgb(223, 223, 223);
  }

  #password-border:focus{
    outline: none;
    background-color: rgb(223, 223, 223);
    color: black;
  }

</xmp>
        `;
        document.getElementById('code').innerHTML = codeText;
        document.getElementById('code-h1').innerHTML = "PASSWORD INPUT";
        document.getElementById('testbox-center').innerHTML = '<input type="password" name="Password" id="password-border" placeholder="Password">';
}

