// =====================================================
// BUSCA DE PADRÃO EM STRING (NAIVE SEARCH)
// =====================================================

function buscaTexto(texto, padrao){

    // percorre o texto
    for(let i = 0; i <= texto.length - padrao.length; i++){

        let encontrou = true

        // compara caractere por caractere
        for(let j = 0; j < padrao.length; j++){

            if(texto[i + j] !== padrao[j]){
                encontrou = false
                break
            }
        }

        // se encontrou, retorna posição
        if(encontrou){
            return i
        }
    }

    return -1 // não encontrou
}


// ---------------- TESTE ----------------
let texto = "estrutura de dados"
let padrao = "dados"

console.log("Posição:", buscaTexto(texto, padrao))


/* igual busca normal
mas conta quantas vezes aparece
 */
function contarOcorrencias(texto, padrao){

    let contador = 0

    for(let i = 0; i <= texto.length - padrao.length; i++){

        let match = true

        for(let j = 0; j < padrao.length; j++){
            if(texto[i + j] !== padrao[j]){
                match = false
                break
            }
        }

        if(match){
            contador++
        }
    }

    return contador
}


// ---------------- TESTE ----------------
console.log("Ocorrências:", contarOcorrencias("ana banana", "ana"))

/* 
O(n * m)
n = tamanho do texto
m = tamanho do padrão */

/* algoritmos melhores evitam comparações desnecessárias
exemplo: KMP, Boyer-Moore */

/* Algoritmos mais avançados de busca em texto, como KMP e Boyer-Moore, melhoram a eficiência ao evitar comparações desnecessárias, utilizando informações pré-processadas do padrão. Isso reduz o tempo de execução em comparação com a busca ingênua. */