function calcularAreaTriangulo() {
    const base = prompt("Informe a base do triângulo:")
    const altura = prompt("Informe a base do triângulo:")
    return base * altura / 2
}

function calcularAreaRetangulo() {
    const base = prompt("Informe a base do retângulo:")
    const altura = prompt("Informe a altura do retângulo:")
    return base * altura
}

function calcularAreaQuadrado() {
    const lado = prompt("Informe o lado do quadrado:")
    return lado * lado
}

function calcularAreaTrapezio() {
    const baseMaior = prompt("Informe a base maior do trapezio:")
    const baseMenor = prompt("Informe a base menor do trapezio:")
    const altura = prompt("Informe a alturta do trapezio:")
    return (baseMaior + baseMenor) * altura / 2 
}

function calcularAreaCirculo() {
    const raio = prompt("Informe o raio do circulo")
    return (3.14 * raio * raio)
}

function exibirMenu(){
    return prompt (
    "Calculadora Geometrica\n" +
    "1. Calcular área de triângulo\n" +
    "2. Calcular área de retângulo\n" +
    "3. Calcular área de quadrado\n" +
    "4. Calcular área de trapezio\n" +
    "5. Calcular área de circulo\n" +
    "6. Sair\n"
    )
}

function executar(){
    let opcao =  ""
    
    do {
        opcao = exibirMenu()
        let resultado 

        switch (opcao) {
            case "1":
                resultado = calcularAreaTriangulo()
                break
            case "2":
                resultado = calcularAreaQuadrado()    
                break
            case "3":
                resultado = calcularAreaRetangulo()
                break
            case "4":
                resultado = calcularAreaTrapezio()
                break
            case "5":
                resultado = calcularAreaCirculo()
                break
            case "6":
                alert("Saindo.....")
                break
                default:
                    alert("Opção invalida.")       
        }

        if (resultado) {
            alert("Resultado:" + resultado)
        }

    } while (opcao !== "6")
}

executar()