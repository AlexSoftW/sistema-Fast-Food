function Itens(){
  var itens;
  var quantidade, total;

  itens = parseFloat(document.querySelector('input[name="grupo"]:checked').value);
  
  quantidade = parseFloat(document.getElementById('qtd').value);

  if(itens == 1){
    //X-Burguer
    itens = 4.50;
    total = itens*quantidade;

    window.onload = document.getElementById("mostrar").innerHTML = 'Resultado: R$' + total.toFixed(2);
  }else if(itens == 2){
    //Hot-Dog
    itens = 3.00;
    total = itens*quantidade;

    window.onload = document.getElementById("mostrar").innerHTML = 'Resultado: R$' + total.toFixed(2);
  }else if(itens == 3){
    //Batata-frita
    itens = 2.00;
    total = itens*quantidade;

    window.onload = document.getElementById("mostrar").innerHTML = 'Resultado: R$' + total.toFixed(2);
  }else if(itens == 4){
    //Refrigerante
    itens = 1.50;
    total = itens*quantidade;

    window.onload = document.getElementById("mostrar").innerHTML = 'Resultado: R$' + total.toFixed(2);
  }

  // console.log(itens, quantidade);
}