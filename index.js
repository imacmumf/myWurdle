// alert("Hello");
const wordOfDay = "words";
const wordOfDayArray = wordOfDay.split('');
let answ;

// $(document).ready()
//Set initial state of rows to disabled
    for(i=2;i<5;i++){
        $(".in-"+i).prop("disabled", true)
    }
 
// Check Answer Button Function
let x = 2;
let y = 1;

$(".sub-btn").click(function(){

    //Disable/Enable Rows
    $(".in-"+ x).prop("disabled", false);
    $(".in-"+ y).prop("disabled", true);
    x++;
    y++;

    //Create answer from inputs
    let answArray = [];
    let newAnsw = [];

    for(r=1;r<6;r++){       
        for(z=1;z<6;z++){
            answArray.push($("#b"+r+"-"+z).val());
            newAnsw = (answArray.join('').toLowerCase())
          }   
        }
        
        //Check if any letters in users answer (array) match any letters in todays word (array)

        for(q=0;q<15;q++){
            if(wordOfDayArray.includes(answArray[q])){
                console.log(q)
                $(".b"+(q+1)).css("background", "linear-gradient(to top left, #54c772, #ffffff)"); 
                // $(".b"+(q+1)).prop("class", "correct-letter")
  
            } 
        }
        //Display message if word is correct
        if(newAnsw === wordOfDay || newAnsw.includes(wordOfDay)){
            alert("YOU GOT IT!");   
        }
    
     console.log(newAnsw)
    });

    // Shift focus on inputs
    $("#b1-1").focus();
    
    const nextKey = (id) => {
        let thisID = id;
        let p1 = parseInt(thisID.split('').splice(1,2).join(''));
        let p2 = parseInt(thisID.split('').splice(3).join('')) + 1;
        let nextID = ("#b"+ p1 + "-" + p2);
        $(nextID).focus();
        // console.log(nextID)
    }




    
    