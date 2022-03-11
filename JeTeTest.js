
function toto() {

    const targetDiv = document.getElementById("num_clavier");
    const btn = document.getElementById("boutonCode");
    const targetDivDeux = document.getElementById("clavier_numm");
    const targetDivLast = document.getElementById("validation");
    
    //alert("toto");
    btn.style.display = "none";
    targetDiv.style.display = "block";
    targetDivDeux.style.display = "block";
    targetDivLast.style.display = "block";
  
 
        
    
  
  /*  if (btn.style.display != "none") {
      btn.style.display = "none";
  
      targetDiv.style.display = "block";
    } else {
      btn.style.display = "block";
      targetDiv.style.display = "none";
    }*/
    
  };
 
//   boutonCode.onlcick = Ref();
 

  function Ref() { 
      const croixDiv = document.getElementById("croixBouton");
    
      croixDiv.style.display = "block";
  };