// =====================================================
// ÁRVORE B (VERSÃO SIMPLIFICADA)
// =====================================================

class NoB {
    constructor(){
        this.valores = [] // guarda vários valores
        this.filhos = []  // ligações para outros nós
        this.folha = true
    }
}

class ArvoreB {
    constructor(){
        this.raiz = new NoB()
    }

    inserir(valor){
        let raiz = this.raiz

        // insere e ordena
        raiz.valores.push(valor)
        raiz.valores.sort((a,b) => a-b)

        // simplificação: não implementa divisão completa
    }

    mostrar(no = this.raiz){
        console.log(no.valores)

        for(let filho of no.filhos){
            this.mostrar(filho)
        }
    }
}


// ---------------- TESTE ----------------
let arvore = new ArvoreB()

arvore.inserir(10)
arvore.inserir(20)
arvore.inserir(5)
arvore.inserir(15)

console.log("Árvore B:")
arvore.mostrar()

/* 
ao invés de 1 valor por nó (como árvore binária),
a árvore B guarda vários valores no mesmo nó,
reduzindo a altura da árvore */