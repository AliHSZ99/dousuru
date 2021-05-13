$(document).ready(function(){

    if (document.cookie != "true") {
        return window.location.href = "login.html";
    }

    $("#b1").click(function(){
        $("#title").html("Vanier School System JAVA GUI");
        $("#description").html("The Vanier School system was my final project for the Programming 2 course. It was done using JAVA Swing. Its " +
        "goal was to make an OMNIVOX LEA simulator. We had to do so by creating a Login frame, an Admin frame, a Student frame " +
        "and a Teacher frame.");
        $("#project-img").attr("src", "imgs/p2img.png");
        $("#downloadable-file").attr("href", "projs/prog2FinalProjectAli.zip");
    });

    $("#b2").click(function(){
        $("#title").html("Ali Zoubeidi's Website");
        $("#description").html("This is the first website I have ever created using only HTML and CSS. It is a site called Ali Zoubeidi's " +
        "website and it is all about me. This website includes facts about my life and my professional goals. Download to find out more!");
        $("#project-img").attr("src", "https://i.imgur.com/yzuzGOX.png");
        $("#downloadable-file").attr("href", "projs/AliZoubeidiWebsite.zip");
    });

    $("#b3").click(function(){
        $("#title").html("War Card Game!");
        $("#description").html("Ever heard of WAR? It is a simple luck card game. The player and the dealer each draw a card from the deck, and " +
        "the player with the highest card value gets a point. If the players have the same card value, 3 extra cards are drawn and the last one of the 3 " +
        "cards are compared. The match finishes when the deck is empty. Download to play!");
        $("#project-img").attr("src", "imgs/war.png");
        $("#downloadable-file").attr("href", "projs/WarAli.zip");
    });

    $("#b4").click(function(){
        $("#title").html("Cookies Assignment");
        $("#description").html("Here is my first work on cookies. I had to send information to an API to retrieve a token when the email and password " +
        "values were correct. I am mainly displaying this work here not because of the cookies aspect, but to show case my clean and simple design. Please " +
        "feel free to download this work to take a look at my login page design.");
        $("#project-img").attr("src", "imgs/cookies.png");
        $("#downloadable-file").attr("href", "projs/AliCookiesAssignment.zip");
    });

});