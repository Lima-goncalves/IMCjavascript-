
var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click",function(event){
    event.preventDefault();

    var camponome = document.querySelectorAll("#campo-nome");
    var camponeso = document.querySelectorAll("#campo-peso");
    var campoaltura = document.querySelectorAll("#campo-altura");

    var pacienteNovo = "<tr class='paciente'>"+
                        "<td class='info-nome'>"+camponome.value+"</td>"+
                        "<td class='info-peso'>"+camponeso.value +"</td>"+
                        "<td class='info-altura'>"+campoaltura.value+"</td>"+
                        "<td class='info-imc' ></td>"+
                        "</tr>";


    var tabela = document.querySelector("table");
    tabela.innerHTML= tabela.innerHTML + pacienteNovo;

    camponome.value = "";
    camponeso.value = "";
    campoaltura.value = "";


})




