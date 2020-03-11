
$(document).ready(function () {
    $("#p5").click(function () {
        alert("您点击了p5");
    })
})
var i = 0;
$(function () {
    $("input").keypress(function () {
        $("span").text(i+=1);
    })
})

$(function () {
    $("input").keydown(function () {
        $("input").css("background-color", "red");
    });
    $("input").keyup(function () {
        $("input").css("background-color", "blue");
    })
})

$(function () {
    $("form").submit(function () {
        alert("提交");
    });
    $("button").click(function () {
        $("form").submit();
    });
    $("input").change(function () {
        alert("文本发生变化");
    })
})
/*
$(function () {
    $("p").mouseenter(function () {
        $("p").css("background-color", "yellow");
    })
    $("p").mouseleave(function () {
        $("p").css("background-color", "white");
    })
})

$(function () {
    $("p").hover(function () {
        $("p").css("background-color", "red");
    },function () {
        $("p").css("background-color", "blue");
    })
})
*/


$(function () {
    $("#p6").dblclick(function () {
        alert("您双击了p6");
    })
})


$(function () {
    $("tr:even").css("background-color", "#cccccc")
})
$(function () {
    $("tr:odd").css("background-color", "yellow")
})

$(document).ready(function () {
        $("input").focus(function () {
            $(this).css("background-color", "#cccccc");
        });
        $("input").blur(function () {
            $(this).css("background-color", "#ffffff");
        })
    })

    /*
    $(document).ready(function () {
        $("#p4").hover(
            function () {
            alert("您进入了p4");
        },
            function () {
            alert("您离开了p4");
        })
    })


    $(document).ready(function () {
        $("#p3").mouseup(function () {
            alert("您的鼠标点击后，再松开");
        })
    })

    $(document).ready(function () {
        $("#p2").mousedown(function () {
            alert("您的鼠标按下！");
        })
    })

    $(document).ready(function () {
        $("#p1").mouseenter(function () {
            alert("您的鼠标移到了p1元素上了！");
        })
    })

    $(document).ready(function () {
        $("#test").mouseleave(function () {
            alert("您的鼠标离开了test元素上了！");
        })
    })

    $(document).ready(function () {
        $("h1").dblclick(function () {
            $(this).hide();
        })
    })

    $(document).ready(function () {
        $("P").click(function () {
            $(this).hide();
        })
    })

    $(document).ready(function () {
        $("button").click(function () {
            $("p").hide();
        })
    })


    $(document).ready(function () {
        $("button").click(function () {
            $(".test").hide();
        })
    })
       */
    $(document).ready(function () {
        $("button").click(function () {
            $("#test").hide();
        })
    })