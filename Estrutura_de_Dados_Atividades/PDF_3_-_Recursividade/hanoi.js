function hanoi(n, origem, destino, auxiliar){

    if(n === 1){
        console.log(`Mover disco 1 de ${origem} para ${destino}`)
        return
    }

    // passo 1
    hanoi(n-1, origem, auxiliar, destino)

    // passo 2
    console.log(`Mover disco ${n} de ${origem} para ${destino}`)

    // passo 3
    hanoi(n-1, auxiliar, destino, origem)
}

hanoi(3, "A", "C", "B")
//    3     A       C          B
//    n  , Origem, Destino, Auxiliar
// Complexidade desse tipo de código é O(2^n)