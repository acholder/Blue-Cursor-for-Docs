
window.onload = getMode;

function getMode() {
  
var docsMode = document.getElementById('docs-toolbar-mode-switcher');
var mode = docsMode.dataset;
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
    
      if (mode.tooltip === "Viewing mode") {
        console.log(mode.tooltip + ", cursor disabled");
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

function cursorColor(){

var gBlue = "rgb(76,139,245)";
var cursor = document.getElementById("kix-current-user-cursor-caret");
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
    
      cursor.style.borderColor = gBlue;
    });
});

observer.observe(cursor, {
  attributes:true,
  attributeFilter: ['style']
});

cursor.style.borderColor = gBlue;

}



