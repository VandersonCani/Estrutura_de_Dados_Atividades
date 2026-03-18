// função fatorial recebe n como parametro na sua chamada.
function fatorial(n) {
    // if identifica quando o parametro se igualar a 1 (caso base)
    if (n === 1) {
        // quando n for 1 a recursão termina.
        return 1
    }
    // aqui acontece a recursividade quando o codigo continua chamando a si mesmo e diminuindo o valor de n, até chegar no caso base para encerrar a recursão. 
    return n * fatorial (n-1)
}
/// a complexidade desse código fatorial recursivo é de O(n), pois mesmo que nosso if e nossa multiplicação tenham complexidade O(1), nossas chamadas recursivas sucessivas dependem de passar por cada valor e ao final voltar realizando a multiplicação, se tornando uma complexidade O(n). 

