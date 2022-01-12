var cursor = document.getElementById("kix-current-user-cursor-caret");

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (cursor.style.borderColor !== "rgb(76,139,245)")  {
          cursor.style.borderColor = "rgb(76,139,245)";
        }
        
        else {
          console.log("Border color not changed");
        }
        
    });
});
 
observer.observe(cursor, {
    attributes: true
});

cursor.style.borderColor = "rgb(76,139,245)";





