$(document).ready(function(){
    
    $("#button1").click(function(){
        $("#projectTitle").html("ATM MACHINE");
        $("#projectDescriptionBox > p").html("This ATM MACHINE is our very first project together.");
        $("img").attr("src", "/imgs/jav.png");
        $("#downloadableFile").attr("href", "ATM.zip");
        $("#projectTitle").css("left", "280px")
    });

    $("#button2").click(function(){
        $("#projectTitle").html("Maze Bombers");
        $("#projectDescriptionBox > p").html("An exciting game for everyone. People can play with their family, "+
        "friends and even random strangers that are willing to compete. Robotic bugs of all kinds are put inside different mazes and"+
        " have to break through walls to get power ups. Players have to tactically move around the map picking up these power ups to defeat other players and move on to the next round of the first to three.");
        $("#projectImg").attr("src", "/imgs/game.png");
        $("#downloadableFile").attr("href", "GameProject.zip");
        $("#projectTitle").css("left", "260px")
    });

    $("#button3").click(function(){
        $("#projectTitle").html("Dentist Database");
        $("img").attr("src", "/imgs/db.png");
        $("#projectDescriptionBox > p").html("In this project, we created a dentist database from scratch. "
        + "We created tables such as Patient, Appointment, Dentist, Visit, VisitDetails, Billing, and Patient_Payment. " 
        + "After doing so, we populated them  and performed 6 specific queries on them. Finally, we created a report "
        + "containing our database schema, normalization of our tables, and the queries results.");
        $("#downloadableFile").attr("href", "FinalProjectDB.zip");
        $("#projectTitle").css("left", "200px")
    });

    $("#button4").click(function(){
        $("#projectTitle").html("CAD/CAM PC Build");
        $("#projectDescriptionBox > p").html("In this project, we are responsilbe for building a CAD/CAM PC "+
        ". A CAD/CAM PC is a software used to design and manufacture prototypes, finished products, and production runs of products."); 
        $("img").attr("src", "/imgs/cad.png");
        $("#downloadableFile").attr("href", "cad.pptx");
        $("#projectTitle").css("left", "150px")
    });

    $("#button5").click(function(){
        $("#projectTitle").html("Problem Solver's Café");
        $("#projectDescriptionBox > p").html("The Problem Solver’s Restaurant is a GUI Application that is used to order food. This restaurant app is designed to be a " +
         "user-friendly application that will allow users to order great food from a specific restaurant. " +
         "It provides real transaction features such as selecting different kinds of items and getting rewards for being a loyal customer."); 
        $("img").attr("src", "/imgs/cafe.png");
        $("#downloadableFile").attr("href", "RestaurantApplication-main.zip");
        $("#projectTitle").css("left", "100px")
    });
});