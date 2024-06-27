function Produto(nome,preco){
        this.nome=nome
        this.preco=preco
}
Produto.prototype.aumento=function(quantia){
        this.preco=this.preco-(this.preco*(quantia/100))
}
function Camiseta(nome,preco,cor){
        Produto.call(this,nome,preco)
        this.cor=cor
}
Camiseta.prototype=Object.create(Produto.prototype)
Camiseta.prototype.construtor=Camiseta

const n1=new Camiseta('blusa',30,'Preta')
n1.aumento(15)
console.log(n1)