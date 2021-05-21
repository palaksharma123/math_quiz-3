function addUser() {
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;
  
      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);
  
  }
  
  function log_in() {
    window.location.href = "game.html";
    console.log("userlogedIn")
    }
  
  