$(function(){
    $("#hide").click(function(){
        $(".box_one").hide(1000)
    })

    $("#show").click(function(){
        $(".box_one").show(1000)
    })

    $("#hide_show").click(function(){
        $(".box_one").toggle(1000)
    })

    $("#slideup").click(function(){
        $(".box_tow").slideUp(1000)
    })

    $("#slidedown").click(function(){
        $(".box_tow").slideDown(1000)
    })

    $("#slidedownup").click(function(){
        $(".box_tow").slideToggle(1000)
    })

    $("#fadeout").click(function(){
        $(".box_three").fadeOut(1000)
    })

    $("#fadein").click(function(){
        $(".box_three").fadeIn(1000)
    })
})

