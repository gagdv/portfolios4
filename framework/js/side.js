function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
//window.onclick = function(e) {
//  if (!e.target.matches('.dropbtn')) {
//    var myDropdown = document.getElementById("myDropdown");
//      if (myDropdown.classList.contains('show')) {
//        myDropdown.classList.remove('show');
//      }
//  }
//}

//stylesheet overwrite
//var sheet = document.createElement('style')
//sheet.innerHTML = "body {border: 2px solid black; background-color: blue;}";
//document.body.appendChild(sheet);

var fwContainer = document.getElementById('mySidebar');


var cssSelectors = document.getElementsByClassName('cssSelector');

for(i=0; i < cssSelectors.length; i++){
    cssSelectors[i].addEventListener('click', function() {
        if(this.dataset.css == 'none'){
            fwContainer.innerHTML = '';
        }
        else{
            fwContainer.innerHTML = '<link rel="stylesheet" href="css/' + this.dataset.css + '.css">';
//            $('#fw-container').html('<link rel="stylesheet" href="css/' + this.dataset.css + '.css">');
        }
    });
}

