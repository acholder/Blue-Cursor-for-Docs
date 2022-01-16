window.onload = getMode;

function cursorColor(){

var cursor = document.getElementById("kix-current-user-cursor-caret");
var gBlue = "rgb(66, 133, 244)";
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      
    if (cursor.style.borderColor !== gBlue) {
     
      console.log("color reverted to " + cursor.style.borderColor + ".");
      cursor.style.borderColor = gBlue;
      console.log("Updated to " + gBlue + ".");
    
    }
    
    });
    
});

observer.observe(cursor, {
  
  attributes:true,
  attributeFilter: ['style']

});

cursor.style.borderColor = gBlue;

}

function getMode() {
  
cursorColor();
  
var docsMode = document.getElementById('docs-toolbar-mode-switcher');
var mode = docsMode.dataset;
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
    
      if (mode.tooltip === "Viewing mode") {
        
        console.log(mode.tooltip + ", cursor disabled.");
        
      }
    
      else if (mode.tooltip !== undefined && mode.tooltip !== "Viewing mode") {
        
        cursorColor();
        console.log(mode.tooltip + ", cursor enabled.");
       
      }
    
      else {
        
        console.log("waiting on mode update...");
        
      }

    });
  
  });
  
observer.observe(docsMode, {
  
  attributes:true,
  attributeFilter: ['data-tooltip']

});

}
