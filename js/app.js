
$(document).ready(function () {

    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

    // ---------------------------------------------------
    // List of Vars
    var answer = Math.floor(Math.random() * 10) + 1;
    console.log("The answer is " + answer);
    var numberOfGuesses = 0;
    var distance = null;


    $(".new").click(function (event) {
        answer = Math.floor((Math.random() * 100) + 1);
        console.log(answer);
        numberOfGuesses = 0;
        distance = null;
        $("#userGuess").val('');
        numberOfGuesses = 0
        $("#count").html(numberOfGuesses);
        $("#guessList").html('');

    });


    $("#guessButton").click(processGuess);

    function processGuess() {
        var guess = $("#userGuess").val();
        var numberGuess = parseInt(guess, 10);
        distance = Math.abs(numberGuess - answer);

        if (distance > 0 && distance <= 10) {
            alert("You're getting hot. Try again.")
        } else if (distance >= 11 && distance <= 20) {
            alert("You're getting warm. Try again.")
        } else if (distance >= 21 && distance <= 30) {
            alert("You're getting cold. Try again.")
        } else if (distance >= 31) {
            alert("Very Cold")
        } else if (distance == 0) {
            alert("Secrets out! Choose NEW GAME to play again.")
        }
        $("#count").html(++numberOfGuesses);
        $("#guessList").append('<p>' + guess + '</p>');
    }

    $("#userGuess").keypress(function (event) {
        if (event.keyCode === 13) {
            processGuess();
        }
    });

});


