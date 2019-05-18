// ABRIR DISEÑADOR
$("#moreDesign").click(function() {
  $("body").addClass("open-design");
  $(this).css("display", "none");
});
// CERRAR DISEÑADOR
$("#volverDesign").click(function() {
  $("body").removeClass("open-design");
  $("#moreDesign").css("display", "block");
});

// ABRIR DEVELOPER
$("#moreDeveloper").click(function() {
  $("body").addClass("open-developer");
  $(this).css("display", "none");
});
// CERRAR DEVELOPER
$("#volverDeveloper").click(function() {
  $("body").removeClass("open-developer");
  $("#moreDeveloper").css("display", "block");
});
