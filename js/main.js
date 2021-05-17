
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";  // TAG <b></b> DEIXA EM NEGRITO
    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallabs.academy/");      // COM ESSA OPÇÃO O SITE É ABERTO EM OUTRA JANELA
    // window.location.href = "https://globallabs.academy/";   // ESSA OPÇÃO ABRE O SITE NA MESMA JANELA
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse.";
    elemento.innerHTML = "Obrigado por passar o mouse.";
    // alert("trocar texto");
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
    elemento.innerHTML = "Passe o mouse aqui.";
    // alert("trocar texto");
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1,n2) {
    return n1 +n2;
}

function validaIdade(idade){        // A variável local é declarada dentro de uma função, enquanto a variável global é declarada fora da função e pode ser usada dentro da função.
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
/*

/*
function soma(n1,n2) {
    return n1 +n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
/*

/*
var d = new Date();
alert(d.getMonth()+1);      // A CONTAGEM COMEÇA DO ZERO, ENTÃO PRA TRAZER O MÊS CERTO É NECESSÁRIO SOMAR 1
alert(d.getMinutes());
alert(d.getDay());          // getDay GIVES YOU DAY OF THE WEEK, SO IF IT IS SUNDAY, THE PAGE SHOWS 0

var count;
for(count = 0; count < 5; count++){
    alert(count);
};


var count = 0;
while (count <= 5){             // WHILE: ESTRUTURA DE REPETIÇÃO
    console.log(count);
    count = count +1;       // COUNT + 1 = COUNT++
}
*/
/*
var idade = prompt("Qual sua idade?"); // O COMANDO PROMPT EXIBE MENSAGEM AO USUÁRIO
var idade = 18;
if (idade >= 18){                      
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);

var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var lista = ["maça", "pêra", "laranja"];
lista.push("uva"); // PUSH INCLUI ITEM POR ÚLTIMO NO ARRAY LISTA
// lista.pop() // POP() EXCLUI, NESSE CASO O ÚLTIMO ITEM DA LISTA
//console.log(lista[0]); // MOSTRA O PRIMEIRO ELEMENTO DA ARRAY, NO CASO A MAÇA
// console.log(lista.length); //MOSTRA A QUANTIDADE DE ELEMENTOS NA ARRAY
// console.log(lista.reverse()) // MOSTRA OS ELEMENTOS AO CONTRÁRIO
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "));
*/

/*
var nome = "Kátia Tanimoto"; // JAVASCRIPT POSSUI TIPAGEM DINÂMICA
var n1 = 5;                  // ENTRE ASPAS JS ENTENDE QUE É STRING
var n2 = 3;                  
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos.");
alert(idade + idade2);
console.log(nome);           // CONSOLE.LOG PERMITE VER NO CONSOLE F12
console.log(n1 * n2);
console.log(frase.toUpperCase());
alert(frase.replace("Japão", "Brasil"));
*/
