function adicionarItem(){
    var nome = document.getElementById("nome").value;
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;

    //validar se os inputs nao estao vazios
    if(!nome || !valor || !quantidade){
        alert("preecha todos os inputs")
        return;
    }

    //Criar a linha da tabela e preencher com o valor digitado
    //primeira linha da tabela [0]
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0];
    
}