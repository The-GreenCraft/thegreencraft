var activeDivId = '';

function setActiveDiv(divId) {
  activeDivId = divId;
}

function scrollHorizontally(event) {
  event.preventDefault();
  var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
  var activeDiv = document.getElementById(activeDivId);

  if (activeDiv) {
    activeDiv.scrollLeft -= (delta * 50);
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





function hoverEffect() {
  document.getElementById('seebutton-circle').style.rotate = "45deg";
  document.getElementById('seebutton-circle').style.transition = "all 1s";

}

function resetEffect() {
  document.getElementById('seebutton-circle').style.rotate = "0deg";
  document.getElementById('seebutton-circle').style.transition = "all 1s";
}


function itm21() {
  var codeText = `
<xmp>
HTML
  
<div id="see-button" onmouseover="hoverEffect()" onmouseout="resetEffect()">
<div id="seebutton-circle">+</div>
<span>See more</span>
</div>

CSS

#see-button{
  width: 200px;
  height: 40px;
  background-color: transparent;
  display: flex;
  color: white;
  transition: all 1s;
  border-radius: 50px;

}
#see-button:hover{
  background-color: rgb(182, 182, 182);
  color: black;
  width: 250px;
  transition: all 1s;
  cursor: pointer;
}

#see-button span{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}    

#seebutton-circle{
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #ffffff;
  justify-items: center;
  align-items: center;
  display: grid;
  font-size: 30px;
  color: black;
}


JS

function hoverEffect() {
  document.getElementById('seebutton-circle').style.rotate = "45deg";
  document.getElementById('seebutton-circle').style.transition = "all 1s";

}

function resetEffect() {
  document.getElementById('seebutton-circle').style.rotate = "0deg";
  document.getElementById('seebutton-circle').style.transition = "all 1s";
}


  CODE BY THEGREENCRAFT

</xmp>
      `;
      document.getElementById('code').innerHTML = codeText;
      document.getElementById('code-h1').innerHTML = "BUTTON";
      document.getElementById('testbox-center').innerHTML = '<div id="see-button" onmouseover="hoverEffect()" onmouseout="resetEffect()"><div id="seebutton-circle">+</div><span>See more</span></div>';
}



function itm31() {
  var codeText = `
<xmp>
HTML
  
<span class="loading-text"></span>

CSS

.loading-text{
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  animation: smokeOut 1s ease-in-out infinite alternate;
  text-shadow: 0 0 1px white;
}
.loading-text:before {
  content: "Loading";
}

@keyframes smokeOut {
  100% {
    opacity: 0.08;
    filter: blur(5px);
    letter-spacing: 4px;
  }
}


  CODE BY THEGREENCRAFT

</xmp>
      `;
      document.getElementById('code').innerHTML = codeText;
      document.getElementById('code-h1').innerHTML = "LOAD TEXT";
      document.getElementById('testbox-center').innerHTML = '<span class="loading-text"></span>';
}
