
// Obviamente um Vetor
let vetor = [];
    // Um for para fazer a inserção dos numeros aleatorios para o aprendizado

for(let i = 0; i < 10; i++){
    let numero = Math.floor(Math.random() * 100) + 1;
    vetor.push(numero);
}

// Mostrar o vetor para conferencia futura
console.log(vetor);

// Função de busca linear para buscar o valor exato dentro do indice
function buscaLinear(vetor,valor){
    for(let i=0; i < vetor.length; i++)
        if(vetor[i] == valor){
            return i;
        }
    return -1;
    }

// chamar a função de busca linear para armazenar o resultado dentro da variavel resultado
// enviando como parametros a  lista e o numero 38 que vai ser buscado;

    let resultado = buscaLinear(vetor, 38);
// mostrar o resultado da busca linear, nessa parte resultado significa o indice onde foi encontrado o numero 38
    console.log("resultado: ", resultado)

// aqui transformamos o numero de resultado em outra variavel chamada indice.
    indice = resultado;
// aqui conseguimos buscar o valor dentro de vetor[indice]   
    console.log ("Antes: ", vetor[indice])
// chamada de função removerPorPosição, enviando o vetor que é a lista a ter uma informação removido, e o valor de resultado que é o valor que vai ser procurado dentro dos indices.

    removerPorPosicao(vetor, resultado)

// abaixo temos a função de removerPorPosição

   function removerPorPosicao(vetor, indice) {

    // aqui temos um if com comparações de quando o indice for menor que 0 OU indice maior que o limite maximo da variavel vetor, vai retornar mensagem de indice invalido.
        if (indice < 0 || indice >= vetor.length){
            console.log("indice invalido");
            return vetor;
        }
        
    // aqui abaixo temos um for que pega o valor de indice e sobrescreve esse local com o próximo valor, ou seja, se eu tiver um vetor de 4 numeros e quiser remover o meu indice 1, então eu vou começar sobrescrevendo meu indice 1 com o valor do indice 2, até chegar no ultimo indice válido e encerrar o loop for.

        for(let i = indice; i < vetor.length - 1; i++){
            vetor[i] = vetor[i + 1];
        }
        // nessa etapa diminuimos o valor total de vetor pois agora a ultima informação ficaria duplicada caso não fosse removida do final.

        vetor.length = vetor.length -1;
        // Retorno da variavel vetor
        return vetor;
    }

    // impressão no console do vetor
    console.log ("Depois: ", vetor[indice])
    console.log(vetor);


