"use strict";
function soma(n1, n2) {
    try {
        if ((n1 == 0) && (n2 == 0)) {
            throw "Parametros não informados";
        }
        return n1 + n2;
    }
    catch (err) {
        console.log("passou aqui");
        return err;
    }
}
