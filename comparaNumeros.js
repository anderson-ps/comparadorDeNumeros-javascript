function comparador(num1,num2){
    var soma = num1 + num2;
    var a = "";
    var b = "";
    var c = "";
    var saida = "";
    if(soma > 20){
         a = "maior";
         b = "maior";
    }else if(soma >10 && soma<20){
        a = "maior";
        b = "menor";
    }else{
        a = "menor";
        b = "menor";
    }
    
    (num1 === num2) ? (c="são iguais"):(c="não são iguais");

    saida = "Os números "+ num1 +" "+ num2 +" "+ c + ". Sua soma é "+ soma + ", que é " + a +" que 10 e " + b + " que 20";

    return saida;
}


console.log(comparador(10,5));