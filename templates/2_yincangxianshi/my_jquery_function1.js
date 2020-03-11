$(function () {
    $("p").click(function () {
        $(this).hide();
    })
})

$(function () {
    $("#hide").click(function () {
        $("p").hide("slow");
    })
    $("#show").click(function () {
        $("p").show("fast");
    })
    $("#hideandshow").click(function () {
        $("p").toggle("slow");
    })
})

$(function () {
    $(".ex .hide").click(function () {
        $(this).parents(".ex").hide("slow");
    })
})

$(function () {
    $("#button1").click(function () {
        $("#div1").hide(1000,"linear",function () {
            alert("隐藏完成！！！");
        })
    })
    $("#button2").click(function () {
        $("#div1").hide(1000,"linear");
            alert("隐藏完成！！！");
    })
})