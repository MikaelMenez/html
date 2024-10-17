const adicionar_item=document.getElementById('adicionar_item')
adicionar_item.onclick=function adicionar_item(){
    const novo_item=document.getElementById('novo_item').value;
    const li= document.createElement('li');
if(novo_item){
    const lista=document.getElementById('lista');
    li.textContent=novo_item;
    lista.appendChild(li);
    document.getElementById('novo_item').value = '';
}
else{
    window.alert('insira um item');
}}