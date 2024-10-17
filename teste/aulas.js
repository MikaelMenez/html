function ola(nome){
    return `Olá ${nome}`;
  }
  const oi=function (nome){
    return `Oi ${nome}`;
  }
  function soma(num1,num2){
    return num1+num2;
  }
  function criarPessoa(nome,idade){
    return{
      seu_nome:nome,
      sua_idade:idade
    }
  }
  const mikael=criarPessoa('mikael',18)
  function descobrirCor(cor){
    switch(cor){
        case 'azul':
            return'é azul'
            
        case 'verde':
            return'é verde'
            
        default:
            return'não é nem azul nem verde'
    }
  }
  function descobrirCor2(cor){
    if(cor=='azul'){
        return'é azul'
    }
    else if(cor=='verde'){
        return'é verde'
    }
    else{
        return'não é nem azul nem verde'
    }     
}
function lacofor1(){
  const itens=['banana','maça','pera']
  for(let x=0;x<3;x++){
    console.log(itens[x])
  }
}
function lacofor2(){
  const itens=['banana','maça','pera']
  for(let i in itens){
    console.log(itens[i])
  }
}
function lacofor3(){
  const itens=['banana','maça','pera']
  for(let item of itens){
    console.log(item)
  }
}
function lacofor4(){
  const itens=['banana','maça','pera']
itens.forEach((item)=>{
  console.log(item)
}
)
}
function lacowhile(){
  let x=0
  while(x>=1){
    console.log(x)
   x++
  }
}
  //console.log(ola('mikael'));
  //console.log(oi('mikael'));
  //console.log(oi(4,5));
  //console.log(mikael);
  //console.log(descobrirCor('verde'))
  //console.log(descobrirCor2('verde'))
  //lacofor1()
  //lacofor2()
  //lacofor3()
  //lacofor4()
  //lacowhile()