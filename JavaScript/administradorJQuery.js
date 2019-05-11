$('#menu > li').on("click", function(event){
    //remover clase de seccion seleccionada
    $(".selected").removeClass("selected");

    let $current_element = $(this);
    let $section_name = $current_element.attr("id");

    //seleccionar nav element
    $current_element.addClass("selected");

    //ocultar todas las secciones
    $("section").addClass("hidden");

    //mostrar seccion clickeada
    $("#" + $section_name + "_section").removeClass("hidden");
})