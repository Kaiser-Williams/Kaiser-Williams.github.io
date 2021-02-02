/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
function sharePost(link) {
   
    alert("Copy this link: \n " + link);
  }


  var coll = document.getElementsByClassName("collapsible");
  var i;
  var angle = 0;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
         document.getElementsByClassName("toggle").src = "assets/kissclipart-vector-chevron-down-clipart-chevron-corporation-co-827bf33ae8dbc68b.png"; 

    } else {
        content.style.maxHeight = content.scrollHeight + "px";
       document.getElementsByClassName("toggle").src = "assets/imageedit_2_3952130780.png"; 
      }
    });
  }