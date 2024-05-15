
window.onscroll = function() {
    var navbar = document.getElementById("navbar");

    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
  
  var card=document.getElementById("card");         
  function openInventory()
       {
       card.style.transform = "rotateY(-180deg)";	
       }	
  function openLogin()
       {
           card.style.transform = "rotateY(0deg)";	
       }	
       