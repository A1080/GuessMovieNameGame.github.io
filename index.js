
var i=0;
var movieName=["mirzapur", "sacred games", "panchayat", "ready","hostel daze","golmaal fun unlimited","golmaal fun unlimited","hera pheri","super 30" ,"hera pheri","munnabhai mbbs","friends","phir hera pheri","once upon a time in hollywood","3 idiot","harry potter and the deathly hallows part 2","narcos","avengers infinity war","game of thrones","munnabhai mbbs","the wolf of wall street","phir hera pheri","avengers infinity war","joker","the office","masaan","extraction","django unchained","chup chup ke","gangs of wasseypur"];
var len=movieName.length;

function hideEverything(){
    $(".label-name").hide();
    $("#fname").hide();
    $("#submitBtn").hide();
    $("#nextBtn").hide();
}

function showEverything(){
    $(".label-name").show();
    $("#fname").show();
    $("#submitBtn").show();
    $("#nextBtn").show();
}

hideEverything();
var started = false;
var levelCount=0;
var nextBtnClick=0;
$("#playBtn").hide();
var startedFirst=false;   
$(".vid").hide();
$(document).keypress(function(){
        if(startedFirst===false){
            $("h1").html("Score: "+ levelCount);
            showEverything();
            nextImg();
            started =true;
            startedFirst =true;
        }
});
function nextImg(){
        i++;
        var memeImg="meme"+i+".jpg";
        var imageSource="images/"+memeImg;
        $(".img1").attr("src",imageSource);
        if(i>=len+1){
            if(levelCount==len){
                $(".img1").hide();
                playSucessSound();
                $(".vid").show();
                started=false;
                hideEverything();
                showBtn();
            }
            else{
                hideEverything();
                gameOverSound();
                $(".img1").attr("src","images/Game Over.png");
                started=false;
                showBtn();
            }
            
        }
    // }
}

$("#nextBtn").on("click",function(){
    if(started==true){
        nextBtnClick++;
        nextImg();

    }
    
})


$("#submitBtn").on("click",function(){
    if(started===true){
        checkAns();
    }
    
})


function checkAns(){
    var userAns;
    userAns = $("#fname").val();
    var userAnswer=userAns.toLowerCase();
    $('#fname').val('');
    if(userAnswer===movieName[levelCount+nextBtnClick]){
        levelCount++;
        $("h1").html("Score: "+ levelCount);
        nextImg();
    }
    else{
        started=false;
        gameOver();
    }
}

function gameOver(){
    hideEverything();
    playSound();
    $(".img1").attr("src","images/wrong.png");
    $("h1").html("Your Score: "+ levelCount);
    showBtn();
}

function playSound(){
    var audio = new Audio("sound/wrong.mp3");
    audio.play();
}
function playSucessSound(){
    var audio = new Audio("sound/success.mp3");
    audio.play();
}
function gameOverSound(){
    var audio = new Audio("sound/gameover.mp3");
    audio.play();
}

function showBtn(){
$("#playBtn").show();
    $("#playBtn").on("click",function(){
    $(".vid").hide();
        $(".img1").show();
        $("#playBtn").hide();
        levelCount=0;
        i=0;
        nextBtnClick=0;
        $("h1").html("Press Any Key To Start");
    $(".img1").attr("src","images/Enjoy the Game.png");
        $(document).keypress(function(){
            if(!started && i===0){
        showEverything();
                $("h1").html("Score: "+ levelCount);
                nextImg();
                started =true;
            }
    });
    });
}


$(".infoicon").on("click",function(){
    Swal.fire('Hey ,If you find any bugs in the game, please let me know on my social media handles in the footer.');
})

