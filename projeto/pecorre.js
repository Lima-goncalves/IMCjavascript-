function percorreArrey(trPacientes,comportamento){
    for (var posicaoatual = 0; posicaoatual <= trPacientes.length-1; posicaoatual++){
        var pacienteTrAtual = trPacientes[posicaoatual];

        comportamento(pacienteTrAtual);


    }
}