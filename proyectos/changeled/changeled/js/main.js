$(document).ready(function () {

//Incremento del porcentaje 1
    $('#porcentaje1').on('appear', function () {
        var percent_number_step = $.animateNumber.numberStepFactories.append(' %');
        $('#porcentaje1').animateNumber(
                {
                    number: 10,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                },
                3000
                );
    });
    $('#porcentaje1').initAppear();

    //Incremento del porcentaje 2
    $('#porcentaje2').on('appear', function () {
        var percent_number_step = $.animateNumber.numberStepFactories.append(' %');
        $('#porcentaje2').animateNumber(
                {
                    number: 48,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                },
                3000
                );
    });
    $('#porcentaje2').initAppear();

//Incremento del porcentaje 3
    $('#porcentaje3').on('appear', function () {
        var percent_number_step = $.animateNumber.numberStepFactories.append(' %');
        $('#porcentaje3').animateNumber(
                {
                    number: 85,

                    easing: 'easeInQuad',

                    numberStep: percent_number_step
                },
                3000
                );
        $('#progressInca').animate({width: "10%"}, "slow");
    });
    $('#porcentaje3').initAppear();


//Smooth scroll
//Seccion lamparas led
    $("a[href$='#lamparasLED']").click(function () {
        $('html, body').animate({
            scrollTop: $("#lamparasLED").offset().top
        }, 2000);
    });
//Seccion beneficios
    $("a[href$='#beneficios']").click(function () {
        $('html, body').animate({
            scrollTop: $("#beneficios").offset().top
        }, 2000);
    });
//Seccion comparacion
    $("a[href$='#comparacion']").click(function () {
        $('html, body').animate({
            scrollTop: $("#comparacion").offset().top
        }, 2000);
    });
//Seccion cambio
    $("a[href$='#cambio']").click(function () {
        $('html, body').animate({
            scrollTop: $("#cambio").offset().top
        }, 2000);
    });
//Seccion contacto
    $("a[href$='#contacto']").click(function () {
        $('html, body').animate({
            scrollTop: $("#contacto").offset().top
        }, 2000);
    });
});

