
const form = document.querySelector("#form");
let input = document.querySelector(".input");
let containerListagem = document.querySelector(".listagem");


form.addEventListener("submit", (e)=> {
    e.preventDefault();
    enviarDado(
        {
            id: gerarId(),
            item: input.value,
        }
    );


    input.value = "";
});

async function enviarDado({...data}){
    const requisicao = await fetch('https://sheetdb.io/api/v1/6ya4xn40ap35h' ,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
        },
    ).then((resposta) => resposta.json());

    return requisicao;
    }   

    async function getData(){
        const requisicao = await fetch('https://sheetdb.io/api/v1/6ya4xn40ap35h' ).then((resposta)=> resposta.json());

        const listarItens = await requisicao.map((i)=>{
            const item = document.createElement("li");
            item.innerText = i.item;
            containerListagem.appendChild(item);
        })
        return listarItens
    }

    getData()

    function gerarId() {
        return Math.floor(Math.random() * 100); 
    }

