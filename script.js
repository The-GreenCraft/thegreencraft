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


function copyCode() {
  // Elemente referenzieren
  var codeElement = document.getElementById('code');
  var copyButton = document.getElementById('mobile-copycode');

  // Text aus dem Code-Element holen
  var codeText = codeElement.innerText;

  // Text in die Zwischenablage kopieren
  navigator.clipboard.writeText(codeText)
      .then(function() {
          // Erfolgsmeldung
          console.log('Code copied to clipboard');
          
          // Text des Buttons ändern
          copyButton.innerText = 'Copied!';

          // Optional: Nach einer kurzen Verzögerung den Text zurücksetzen
          setTimeout(function() {
              copyButton.innerText = 'Copy Code';
          }, 2000); // 2000 Millisekunden (2 Sekunden) Verzögerung
      })
      .catch(function(err) {
          // Fehlerbehandlung
          console.error('Unable to copy code to clipboard', err);
      });
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


  CODE BY THEGREENCRAFT

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


  CODE BY THEGREENCRAFT

</xmp>
        `;
        document.getElementById('code').innerHTML = codeText;
        document.getElementById('code-h1').innerHTML = "PASSWORD";
        document.getElementById('testbox-center').innerHTML = '<input type="password" name="Password" id="password-border" placeholder="Password">';
}




function itm3() {
    var codeText = `
<xmp>
HTML
    
<span class="loader1"></span>

CSS

.loader1 {
    width: 58px;
    height: 58px;
    border: 5px solid #a0a0a0;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 


    CODE BY THEGREENCRAFT

</xmp>
        `;
        document.getElementById('code').innerHTML = codeText;
        document.getElementById('code-h1').innerHTML = "LOADER";
        document.getElementById('testbox-center').innerHTML = '<span class="loader1"></span>';
}

