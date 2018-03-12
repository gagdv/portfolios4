var Library = {
    name: "Timmy",
    greet: function(message){
        alert(message + " from the " + Library.name + " library.");
    }
}




/* documentatie

    Hoe start je het framework

    <script src="js/jim.js"></script>
    var settings = {'language': 'NL'}    (optioneel)
    var jimmy = new Library2(settings);

    De instelllingen die je mee kunt geven zijn:
    
    language      : default value EN
    showControl   : true / false (true)
    controlAlign  : left / center / right (left)
    controlVAlign : top / middle / bottom (middle)

tussen haakjes de default waarde
*/





var Library2 = function(customSettings) {
    // Deze settings kunnen overschreven worden door de gebruiker
  var settings = {
      'language': 'EN',
      'showControl': 'true',
      'controlAlign': 'left',
      'controlVAlign': 'middle',
      'fwContainer': 'fw-container',
      'cssFiles': []
  };
    // Deze settings zijn nodig voor het framework
  var MESSAGE = 'Hello';

    
    
// Check if custom settings are set, overwrite defaultSettings
 if(typeof customSettings.cssFiles !== 'undefined'){
     settings.cssFiles = customSettings.cssFiles;
 }
    
    
    
    
    

var fwContainer = document.getElementById(settings.fwContainer);

var fwSidebarNav = document.getElementById('mySidenav');
    
    var sidenav ='<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><a href="#" class="cssSelector" data-css="none">default</a>';

    for(i = 0; i < settings.cssFiles.length; i++){
        sidenav = sidenav + '<a href="#" class="cssSelector" data-css="' + settings.cssFiles[i] + '">' + settings.cssFiles[i] + '</a>';
    }
    
    fwSidebarNav.innerHTML = sidenav;
    
    
    
  var name = "Timmy";
  var greet = function(){
      if(settings.language == 'NL'){
          MESSAGE = "Hallo";
      }
      else if(settings.language == 'EN'){
          MESSAGE = 'Goodmorning';
      }
      geheimedingen();
  };

    
    var geheimedingen = function(){
        alert(MESSAGE + " from the " + name + " library.");  
    };
    
    return {
        greet: greet
    };
};

