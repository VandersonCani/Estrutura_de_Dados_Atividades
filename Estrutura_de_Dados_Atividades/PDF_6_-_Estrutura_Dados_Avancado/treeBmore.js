// =====================================================
// ÁRVORE B+ (VERSÃO SIMPLIFICADA)
// =====================================================

class NoBPlus {
    constructor(){
        this.valores = []
        this.filhos = []
        this.folha = true
        this.proximo = null // ligação entre folhas
    }
}

class ArvoreBPlus {
    constructor(){
        this.raiz = new NoBPlus()
    }

    inserir(valor){
        let raiz = this.raiz

        raiz.valores.push(valor)
        raiz.valores.sort((a,b) => a-b)
    }

    mostrarFolhas(){
        let atual = this.raiz

        while(atual !== null){
            console.log(atual.valores)
            atual = atual.proximo
        }
    }
}


// ---------------- TESTE ----------------
let arvoreBPlus = new ArvoreBPlus()

arvoreBPlus.inserir(10)
arvoreBPlus.inserir(20)
arvoreBPlus.inserir(5)
arvoreBPlus.inserir(15)

console.log("Árvore B+:")
arvoreBPlus.mostrarFolhas()


/* 
B → guarda dados nos nós
B+ → folhas guardam dados
     nós só ajudam a encontrar */