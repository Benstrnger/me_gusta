function me_gusta(button_n) {
    var span1 = document.querySelector("#span1");
    var span2 = document.querySelector("#span2");
    var span3 = document.querySelector("#span3");

    if (button_n == 1) {
        var valor = parseInt(span1.innerText)
        valor ++;

        span1.innerText = valor
    } else if (button_n == 2) {
        var valor = parseInt(span2.innerText)
        valor ++;

        span2.innerText = valor
    } else {
        var valor = parseInt(span3.innerText)
        valor ++;

        span3.innerText = valor
    }



    
}