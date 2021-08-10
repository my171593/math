function adduser(){
    var player1_name=document.getElementById("player1nameinput").value;
    var player2_name=document.getElementById("player2nameinput").value;
    localStorage.setItem("player 1 name",player1_name );
    localStorage.setItem("player 2 name",player2_name ); 
    window.location.replace("login.html");


}