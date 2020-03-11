$(function () {
    $("#danru").click(function () {
        $("#div1").fadeIn(5000);
        $("#div2").fadeIn();
        $("#div3").fadeIn("slow");
    })
})

$(function () {
    $("#danchu").click(function () {
        $("#div1").fadeOut();
        $("#div2").fadeOut(5000);
        $("#div3").fadeOut("slow");
    })
})

$(function () {
    $("#danrudanchu").click(function () {
        $("#div1").fadeToggle(5000);
        $("#div2").fadeToggle();
        $("#div3").fadeToggle("slow");
    })
})

$(function () {
    $("#yansebiandan").click(function () {
        $("#div4").fadeTo("slow", 0.25);
        $("#div5").fadeTo("slow", 0.5);
        $("#div6").fadeTo("slow", 0.75);
    })
})