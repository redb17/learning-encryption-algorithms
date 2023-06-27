$(document).ready(function() {
    $("#Cryptography").trigger("click");
});


var state = {
    "Cryptography": {
        "total_page": 1,
        "active_page": 1
    },
    "CaesarCipher": {
        "total_page": 2,
        "active_page": 1
    },
    "DiffieHellman": {
        "total_page": 2,
        "active_page": 1
    },
    "RSA": {
        "total_page": 3,
        "active_page": 1
    }
};


$("nav span").on("click", function() {
    // Make all nav links 'inactive' when anyone of them is clicked.
    $("nav span.active").removeClass("active");

    var id = $(this).attr("id");

    // Make this nav link 'active'.
    $(`#${id}`).addClass("active");
    $(".textBox").load(`./algorithms/${id}${state[id]["active_page"]}.html`);
    
    var blob = "";
    for(var i = 1; i <= state[id]["total_page"]; i++) {
        
        var active = "";
        if(state[id]["active_page"] === i){
            active = " active";
        }

        blob += `<li class="page-item${active}"><a class="page-link" href="#">${i}</a></li>`;
    }

    $(".pagination").html(blob);
});


$(".pagination").on("click", ".page-item", function() {
    $(".pagination .page-item.active").removeClass("active");

    var elem = $(this);
    elem.addClass("active");

    var id = $("nav span.active").attr("id");
    state[id]["active_page"] = parseInt(elem.text());
    $(".textBox").load(`./algorithms/${id}${state[id]["active_page"]}.html`);
});
