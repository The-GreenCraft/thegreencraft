window.addEventListener('load', () => {
  setTimeout(() => {
      const loader = document.querySelector('.loader');
      const blackbox = document.getElementById('blackbox');
      loader.style.display = 'none';
      blackbox.style.display = 'none';
  }, 1); 
});

var i = 0;
function showtip(){
  if (i <= 2){
    const tipbox = document.getElementById("tip");
    tipbox.style.display = "flex";
    setTimeout(function() {
      tipbox.style.display = "none";
  }, 4000); 
  i += 1;
  }

}


let dropvar = 0;
function burger_openmenu(){
    if(dropvar == 0){

      const menu = document.getElementById('burger_menu');
      menu.style.right = 0;

    var line1 = document.getElementById('line1');
    line1.style.transform = "rotate(45deg)";
    line1.style.top = "11px";
    line1.style.transition = "transform 0.5s, top 0.5s";

    var line2 = document.getElementById('line2');
    line2.style.opacity = "0"
    line2.style.transition = "opacity 0s";

    var line3 = document.getElementById('line3');
    line3.style.transform = "rotate(-45deg)";
    line3.style.top = "11px";
    line3.style.transition = "transform 0.5s, top 0.5s";
    dropvar = 1;


    }else{
      const menu = document.getElementById('burger_menu');
      menu.style.right = "-100%";

    var line1 = document.getElementById('line1');
    line1.style.transform = "rotate(0deg)";
    line1.style.top = "0px";
    line1.style.right = "0px";
    line1.style.transition = "transform 0.5s, top 0.5s";

    var line2 = document.getElementById('line2');
    line2.style.opacity = "1"
    line2.style.transition = "opacity 0.5s";

    var line3 = document.getElementById('line3');
    line3.style.transform = "rotate(0deg)";
    line3.style.top = "22px";
    line3.style.right = "0px";
    line3.style.transition = "transform 0.5s, top 0.5s";
    dropvar = 0;


    }}








window.addEventListener("scroll", function(){
  var header = document.getElementsByClassName("nav-nav") [0]
  header.classList.toggle("sticky", window.scrollY > 50);
  header.style.transition = "0.4s";
})
/*


*/


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
  var codeElement = document.getElementById('code');
  var copyButton = document.getElementById('mobile-copycode');

  var codeText = codeElement.innerText;

  navigator.clipboard.writeText(codeText)
      .then(function() {
          // Erfolgsmeldung
          
          copyButton.innerText = 'Copied!';

          setTimeout(function() {
              copyButton.innerText = 'Copy Code';
          }, 2000); 
      })
      .catch(function(err) {
        copyButton.innerText = 'Error';
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