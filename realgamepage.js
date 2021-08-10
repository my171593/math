function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    acutal_answer=parseInt(number1)*parseInt(number2);
    question_number="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br> Answer: <input type='text' id='input_check_box'>";
    check_button="<br> <br> <button onclick='check()' class='btn btn-info'>Check </button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    questionturn="player1nameinput";
    answerturn="player2nameinput";
}

function check(){

    get_answer=document.getElementById("input_box").value;
    if(get_answer==acutal_answer){
        
        if(answerturn=="player1nameinput"){
            update_player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTMl=update_player1_score;
        }
        else{
            update_player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTMl=update_player2_score; 
        }

        if(questionturn=="player1nameinput"){
            questionturn="player2nameinput";
            document.getElementById("player_question").innerHTML="Question Turn- "+player2_name;
        }
      else{
        questionturn="player1nameinput";
        document.getElementById("player_question").innerHTML="Question Turn- "+player2_name;
      }

    }
}