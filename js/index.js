let catidadProducto1=0;
let catidadProducto2=0;
let catidadProducto3=0;
let catidadProducto4=0;
let tacones1=110000;
let tacones2=160000;
let zapatos1=230000;
let zapatos2=250000;
let Totalproducto1=0;
let Totalproducto2=0;
let Totalproducto3=0;
let Totalproducto4=0;
let totalApagar = 0;
let ivaTotalProducto1=0;
let ivaTotalProducto2=0;
let ivaTotalProducto3=0;
let ivaTotalProducto4=0;
let totalIva=0;
function producto1(){
    catidadProducto1 += parseInt(document.getElementById("producto1").value);
    document.getElementById("cantidad1").innerHTML=catidadProducto1;
    Totalproducto1=catidadProducto1*tacones1;
    ivaTotalProducto1 = Totalproducto1*0.19;
    totalIva=ivaTotalProducto1+ivaTotalProducto2+ivaTotalProducto3+ivaTotalProducto4;
    document.getElementById("cantidad1Monto").innerHTML=Totalproducto1;
    totalApagar=Totalproducto1+Totalproducto2+Totalproducto3+Totalproducto4;
    document.getElementById("montoTotal").innerHTML="total a pagar: "+totalApagar;
}

function producto1Eliminar(){
    catidadProducto1 -= parseInt(document.getElementById("producto1").value);
    document.getElementById("cantidad1").innerHTML=catidadProducto1;
    let numeroresta = parseInt(document.getElementById("producto1").value);
    let resta=numeroresta*tacones1;
    Totalproducto1-=resta;
    ivaTotalProducto1 = Totalproducto1*0.19;
    totalIva=ivaTotalProducto1+ivaTotalProducto2+ivaTotalProducto3+ivaTotalProducto4;
    document.getElementById("cantidad1Monto").innerHTML=Totalproducto1;
    totalApagar=Totalproducto1+Totalproducto2+Totalproducto3+Totalproducto4;
    document.getElementById("montoTotal").innerHTML="total a pagar: "+totalApagar;
}

function producto2(){
    catidadProducto2 += parseInt(document.getElementById("producto2").value);
    document.getElementById("cantidad2").innerHTML=catidadProducto2;
    Totalproducto2=catidadProducto2*tacones2;
    ivaTotalProducto2 = Totalproducto2*0.19;
    totalIva=ivaTotalProducto1+ivaTotalProducto2+ivaTotalProducto3+ivaTotalProducto4;
    document.getElementById("cantidad2Monto").innerHTML=Totalproducto2;
    totalApagar=Totalproducto1+Totalproducto2+Totalproducto3+Totalproducto4;
    document.getElementById("montoTotal").innerHTML="total a pagar: "+totalApagar;
}

function producto2Eliminar(){
    catidadProducto2 -= parseInt(document.getElementById("producto2").value);
    document.getElementById("cantidad2").innerHTML=catidadProducto2;
    let numeroresta = parseInt(document.getElementById("producto2").value);
    let resta=numeroresta*tacones2;
    Totalproducto2-=resta;
    ivaTotalProducto2 = Totalproducto2*0.19;
    totalIva=ivaTotalProducto1+ivaTotalProducto2+ivaTotalProducto3+ivaTotalProducto4;
    document.getElementById("cantidad2Monto").innerHTML=Totalproducto2;
    totalApagar=Totalproducto1+Totalproducto2+Totalproducto3+Totalproducto4;
    document.getElementById("montoTotal").innerHTML="total a pagar: "+totalApagar;
}

function producto3(){
    catidadProducto3 += parseInt(document.getElementById("producto3").value);
    document.getElementById("cantidad3").innerHTML=catidadProducto3;
    Totalproducto3=catidadProducto3*zapatos1;
    ivaTotalProducto3 = Totalproducto3*0.19;
    totalIva=ivaTotalProducto1+ivaTotalProducto2+ivaTotalProducto3+ivaTotalProducto4;
    totalIva=ivaTotalProducto1+ivaTotalProducto2+ivaTotalProducto3+ivaTotalProducto4;
    document.getElementById("cantidad3Monto").innerHTML=Totalproducto3;
    totalApagar=Totalproducto1+Totalproducto2+Totalproducto3+Totalproducto4;
    document.getElementById("montoTotal").innerHTML="total a pagar: "+totalApagar;
}

function producto3Eliminar(){
    catidadProducto3 -= parseInt(document.getElementById("producto3").value);
    document.getElementById("cantidad3").innerHTML=catidadProducto3;
    let numeroresta = parseInt(document.getElementById("producto3").value);
    let resta=numeroresta*zapatos1;
    Totalproducto3-=resta;
    ivaTotalProducto3 = Totalproducto3*0.19;
    totalIva=ivaTotalProducto1+ivaTotalProducto2+ivaTotalProducto3+ivaTotalProducto4;
    totalIva=ivaTotalProducto1+ivaTotalProducto2+ivaTotalProducto3+ivaTotalProducto4;
    document.getElementById("cantidad3Monto").innerHTML=Totalproducto3;
    totalApagar=Totalproducto1+Totalproducto2+Totalproducto3+Totalproducto4;
    document.getElementById("montoTotal").innerHTML="total a pagar: "+totalApagar;
}

function producto4(){
    catidadProducto4 += parseInt(document.getElementById("producto4").value);
    document.getElementById("cantidad4").innerHTML=catidadProducto4;
    Totalproducto4=catidadProducto4*zapatos2;
    ivaTotalProducto4 = Totalproducto4*0.19;
    totalIva=ivaTotalProducto1+ivaTotalProducto2+ivaTotalProducto3+ivaTotalProducto4;
    document.getElementById("cantidad4Monto").innerHTML=Totalproducto4;
    totalApagar=Totalproducto1+Totalproducto2+Totalproducto3+Totalproducto4;
    document.getElementById("montoTotal").innerHTML="total a pagar: "+totalApagar;
}

function producto4Eliminar(){
    catidadProducto4 -= parseInt(document.getElementById("producto4").value);
    document.getElementById("cantidad4").innerHTML=catidadProducto4;
    let numeroresta = parseInt(document.getElementById("producto4").value);
    let resta=numeroresta*zapatos2;
    Totalproducto4-=resta;
    ivaTotalProducto4 = Totalproducto4*0.19;
    totalIva=ivaTotalProducto1+ivaTotalProducto2+ivaTotalProducto3+ivaTotalProducto4;
    document.getElementById("cantidad4Monto").innerHTML=Totalproducto4;
    totalApagar=Totalproducto1+Totalproducto2+Totalproducto3+Totalproducto4;
    document.getElementById("montoTotal").innerHTML="total a pagar: "+totalApagar;
}

function factura(){
    imprimirFactura="";
    imprimirFactura+=    '<table class="table border  text-center table-hover table-dark table-striped">';
    imprimirFactura+=       '<thead>';
    imprimirFactura+=              '<tr>'
    imprimirFactura+=                '<th scope="col">Cantidad </th>'
    imprimirFactura+=                    '<th scope="col">Producto</th>'
    imprimirFactura+=                '<th scope="col">Monto</th>'
    imprimirFactura+=                '<th scope="col">Iva </th>'
    imprimirFactura+=              '</tr>'
    imprimirFactura+=            '</thead>'
    imprimirFactura+=            '<tbody class="border ">'
    imprimirFactura+=              '<tr class="border">'
    imprimirFactura+=               '<td>'+catidadProducto1+'</td>'
    imprimirFactura+=                '<td>tacones1</td>'
    imprimirFactura+=              '  <td>'+Totalproducto1+'</td>'
    imprimirFactura+=               '<td>'+ivaTotalProducto1+'</td>'
    imprimirFactura+=              '</tr>'
    imprimirFactura+=              '<tr class="border">'
    imprimirFactura+=                 '<td>'+catidadProducto2+'</td>'
    imprimirFactura+=               ' <td>zapatos1</td>'
    imprimirFactura+=                '  <td>'+Totalproducto2+'</td>'
    imprimirFactura+=              '<td>'+ivaTotalProducto2+'</td>'
    imprimirFactura+=             ' </tr>'
    imprimirFactura+=              '<tr class="border">'
    imprimirFactura+=                 '<td>'+catidadProducto3+'</td>'
    imprimirFactura+=                '<td>zapatos2</td>'
    imprimirFactura+=                '<td>'+Totalproducto3+'</td>'
    imprimirFactura+=               '<td>'+ivaTotalProducto3+'</td>'
    imprimirFactura+=             ' </tr>'
    imprimirFactura+=             ' <tr class="border>'
    imprimirFactura+=                 '<td>'+catidadProducto4+'</td>'
    imprimirFactura+=               ' <td>tacones2</td>'
    imprimirFactura+=               '<td>'+Totalproducto4+'</td>'
    imprimirFactura+=              '<td>'+ivaTotalProducto4+'</td>'
    imprimirFactura+=              '</tr>'
    imprimirFactura+=             ' <tr class="border">'
    imprimirFactura+=                '<td colspan="3">total a pagar: '+totalApagar+' </td>'
    imprimirFactura+=                '<td colspan="3">total Iva: '+totalIva+' </td>'
    imprimirFactura+=            '  </tr>'
    imprimirFactura+=          '  </tbody>'
    imprimirFactura+=          '</table>'
    document.getElementById("factura").innerHTML=imprimirFactura;
}


