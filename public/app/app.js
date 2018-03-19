document
.querySelector('#myButton')
.onclick = () => 
    fetch('http://localhost:3000/notas') // acessa o endereço 
        .then(res => res.json())  // assim que recebe, pega as respostas no formato json
        .then(notas => console.log(notas))
        .catch(console.log); //metodo para exibir o erro
