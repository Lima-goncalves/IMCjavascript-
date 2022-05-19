function calcularTodosImc(){
        var trPacientes = document.getElementsByClassName("paciente");

        percorreArrey(trPacientes,function(pacientetr){
            var tdNome = pacientetr.getElementsByClassName("info-nome")[0];
            var tdPeso = pacientetr.getElementsByClassName("info-peso")[0];
            var tdAltura = pacientetr.getElementsByClassName("info-altura")[0];
            
            var pacienteAtula = {nome  : tdNome.textContent,
                                peso : tdPeso.textContent,
                                Altura : tdAltura.textContent,
                                pegaImc : function(){
                                    if(this.Altura != 0){
                                        var imc = this.peso/(this.Altura * this.Altura);
                                        return imc;
                                        }else{
                                            console.log("Não posso dividir por 0");
                                                }
                                
                                }};

            var imc =pacienteAtula.pegaImc();


            var tdImc = pacientetr.getElementsByClassName("info-imc")[0];

        
            tdImc.textContent = imc; 
            console.log(imc);

        });
}

var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click",calcularTodosImc);





