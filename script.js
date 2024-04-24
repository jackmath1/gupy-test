function verificaFibonacci(numero) {
    // Inicializando os dois primeiros números da sequência
    let a = 0;
    let b = 1;
    
    // Verificando se o número informado é um dos dois primeiros números da sequência
    if (numero === a || numero === b) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }
    
    // Calculando os próximos números da sequência até ultrapassar o número informado
    let temp;
    while (b <= numero) {
        // Calculando o próximo número da sequência
        let proximo = a + b;
        
        // Se o próximo número for igual ao número informado, retorna que pertence à sequência
        if (proximo === numero) {
            return `O número ${numero} pertence à sequência de Fibonacci.`;
        }
        
        // Atualizando os valores de 'a' e 'b' para calcular o próximo número
        temp = b;
        b = proximo;
        a = temp;
    }
    
    
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
}


const numeroInformado = 21;
console.log(verificaFibonacci(numeroInformado)); 
