$(document).ready(iniciar);

var page_title;
var official_store_id = 353;
var id_categoria;
var id_producto;

function iniciar() {
    $("#panel_menu").panel();
    $("#panel_menu").enhanceWithin();

    cargarCategorias();

    $('#btn_busqueda').click(buscarProductos);
}

function cargarCategorias() {
    $.ajax({
        url: "https://api.mercadolibre.com/sites/MLU/search",
        dataType: "json",
        data: {
            official_store_id: official_store_id
        },
        success: mostrarCategorias
    });
}

function mostrarCategorias(categorias) {
    for (var i = 0; i < categorias.available_filters[0].values.length; i++) {
        $('#panel_categorias').append('\
            <li class="page-link" data-id="' + categorias.available_filters[0].values[i].id + '" data-title="' + categorias.available_filters[0].values[i].name + '">\n\
                <a href="Javascript:;" class="ui-btn ui-btn-icon-right ui-icon-carat-r">' + categorias.available_filters[0].values[i].name + '</a>\n\
            </li>');
    }
    $('#panel_categorias .page-link').click(cargarProductosCategorias);
}

function menorPrecio() {
    $('#panel_menu').panel("close");
    $.ajax({
        url: "https://api.mercadolibre.com/sites/MLU/search?official_store_id=" + official_store_id + "&category=" + id_categoria + "&sort=price_asc",
        dataType: "json",
        success: mostrarProductos
    });
}
function mayorPrecio() {
    $('#panel_menu').panel("close");
    $.ajax({
        url: "https://api.mercadolibre.com/sites/MLU/search?official_store_id=" + official_store_id + "&category=" + id_categoria + "&sort=price_desc",
        dataType: "json",
        success: mostrarProductos
    });
}
function cargarProductosCategorias() {
    $('#panel_menu').panel("close");
    id_categoria = $(this).attr("data-id");
    page_title = $(this).attr("data-title");

    $.ajax({
        url: "https://api.mercadolibre.com/sites/MLU/search?official_store_id=" + official_store_id + "&category=" + id_categoria,
        dataType: "json",
        success: mostrarProductos
    });
}

function rutaImagenML(ruta) {
    var nueva_ruta = ruta.substr(0, ruta.length - 5) + "O.jpg";
    return nueva_ruta;
}

function mostrarProductos(productos) {
    $(':mobile-pagecontainer').pagecontainer("change", "#page_productos");
    $('#productos_titulo').html(page_title);
    $('#productos_titulo').attr("data-id", id_categoria);
    $('#productos_resultados').empty();

    if (productos.paging.total === 0) {
        $('#productos_resultados').html('<h1>No se encontraron resultados</h1>');
    }

    for (var i = 0; i < productos.results.length; i++) {
        var ruta_img = rutaImagenML(productos.results[i].thumbnail);
        var currency = '';

        if (productos.results[i].currency_id === 'UYU') {
            currency = '$';
        } else {
            currency = productos.results[i].currency_id;
        }
        $('#productos_resultados').append("\
            <div class='producto' data-id='" + productos.results[i].id + "' data-title='" + productos.results[i].title + "'>\n\
                <img src='" + ruta_img + "' alt='" + productos.results[i].title + "' />\n\
                <h2>" + productos.results[i].title + "</h2>\n\
                <span>" + currency + " " + productos.results[i].price + "</span>\n\
            </div><hr>");
    }

    $('.producto').click(cargarDetalleProducto);
}

function cargarDetalleProducto() {
    id_producto = $(this).attr("data-id");
    page_title = $(this).attr("data-title");

    $.ajax({
        url: "https://api.mercadolibre.com/items/" + id_producto,
        dataType: "json",
        success: mostrarDetalleProducto
    });
}

function mostrarDetalleProducto(producto) {
    $("#detallesproducto").empty();
    $(':mobile-pagecontainer').pagecontainer("change", "#page_detalle_producto");

    $('#titulo_producto').html(page_title);

    $('#producto_nombre').html(producto.title);

    if (producto.currency_id === 'UYU') {
        $('#producto_moneda').html('$'); // Cargo moneda 
    } else {
        $('#producto_moneda').html(producto.currency_id);
    }

    $('#producto_precio').html(producto.price);


    if ($('.slider').hasClass('slick-initialized'))
        $('.slider').slick('unslick');

    $('#slider_items').empty();

    for (var i = 0; i < producto.pictures.length; i++) {
        if (i > 9)
            i = producto.pictures.length;

        $('#slider_items').append('<div class="item"><img src="' + producto.pictures[i].url + '" /></div>');
    }

    $('.slider').slick({
        dots: true,
        arrows: false
    });
    setTimeout(function () {
        $('.slider').slick('setPosition');
    }, 350);

    $.ajax({
        url: "https://api.mercadolibre.com/items/" + id_producto + "/description",
        dataType: "json",
        success:mostrarDescripcionProducto
    });
}
function mostrarDescripcionProducto(descripcion){
    $("#detallesproducto").html(descripcion.plain_text);
}
function buscarProductos() {
    var busqueda = $('#input_busqueda').val();
    page_title = busqueda;
    $.ajax({
        url: "https://api.mercadolibre.com/sites/MLU/search",
        dataType: "json",
        data: {
            q: busqueda,
            official_store_id: official_store_id
        },
        success: mostrarProductos
    });
}

