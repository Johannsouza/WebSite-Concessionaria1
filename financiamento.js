function calcular(){
    preco=Number(document.getElementById('preco').value)
    entrada=parseFloat(document.getElementById('entrada').value)
    juros=Number(document.getElementById('juros').value)
    prestacao=parseInt(document.getElementById('prestacao').value)
    resultado=document.getElementById('resultado')
    VF=preco-entrada
    juros=juros/100
    fim=VF*(((1+juros)*prestacao)*juros)/(((1+juros)*prestacao)-1)
    // fim=VF*juros/prestacao;
    custo=fim*prestacao
    x=document.getElementById('resultado')
    resultado.innerHTML=`O valor de cada prestação é: ${fim.toFixed(2)}, e o custo total das prestações é de: ${custo.toFixed(2)}`
  }
  