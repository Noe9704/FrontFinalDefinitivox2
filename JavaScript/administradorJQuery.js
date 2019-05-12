//Jquery para esconder secciones
$('#menuAdmin > li').on("click", function(event){
    $(".selected").removeClass("selected");
    
    let $current_element = $(this);
    let $section_name = $current_element.attr("id");

    $current_element.addClass("selected");

    $("section").addClass("hidden");

    $("#" + $section_name + "_section").removeClass("hidden");
})