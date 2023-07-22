const imoveis = []
let opcao = ""

do {
  opcao = prompt(
    "Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: " + imoveis.length +
    "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  )

} while (opcao !== "3");
    
switch (opcao) {
    case "1":
        const imovel = {}

      imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
      imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
      imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
      imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

      const confirma = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        "\nPossui Garagem? " + imovel.garagem
      )

      if (confirma) {
        imoveis.push(imovel)
      }
        
        break
    case "2":
        
        break
    case "3":
        alert("Encerrando...")
        break
        default:
        alert("Opção inválida!")
        break


        
}
    

 









