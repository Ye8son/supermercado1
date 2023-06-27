function comprarCamisa() {
    let Number = parseFloat(document.getElementById("inputNumber").value)
    let  = document.getElementById("pago")
    if (Number > 100) {
        compraPago.textContent = "procederemos a su pago en linea"
    }
    else if (Number < 50) {
        compraPago.textContent = "su pago debe ser en  efectivo"
    }
    else (Number > 150) {
        compraPago.textContent = "su pago debe ser con tarjeta"
    }
}