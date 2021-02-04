$(document).ready(function(){
    $('header > nav > ul > li').on("click", function(){
        //console.log( $(this).attr("id") )
        // Getting the ID
        var id = $(this).attr("id")
        // Removing the "Link" from ID
        id = id.replace("Link", "")
        // Animating to the correct section
        $('html,body').animate(
            {scrollTop: $("#" + id).offset().top}, "slow"
        )
    })
    $('footer > ul > li').on("click", function(){
        // Getting the ID
        var id = $(this).attr("id")
        // Removing the "Link2" from ID
        id = id.replace("Link2", "")
        // Animating to the correct section
        $('html,body').animate(
            {scrollTop: $("#" + id).offset().top}, "slow"
        )
    })
})
