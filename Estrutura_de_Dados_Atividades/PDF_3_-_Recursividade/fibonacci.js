// declaração de função de fibonacci
function fibonacci (n) {
    // if que determina ponto inicial da recursão
    if(n === 0) {
        return 0
    }
    // if que determina segundo caso base da sequencia
    if(n === 1){
        return 1
    }
    // como sabemos o fibonacci é a chamada da soma dos dois ultimos numeros, por isso utilizamos fibonacci (n-1) + fibonacci(n-2), logicamente fazendo a soma dos dois ultimos numeros (n).
    return fibonacci(n-1) + fibonacci(n-2)
}

// A complexidade do algoritmo recursivo de Fibonacci é O(2ⁿ).
// Isso ocorre porque cada chamada da função gera duas novas chamadas recursivas (fibonacci(n-1) e fibonacci(n-2)), criando uma árvore de chamadas que cresce exponencialmente.
// Embora cada chamada realize apenas operações de tempo constante O(1), o número total de chamadas aumenta exponencialmente conforme n cresce.
// Por esse motivo, o tempo total de execução do algoritmo é O(2ⁿ).
// Um problema desse algoritimo é a ineficiencia por recalcular os mesmos valores diversas vezes.