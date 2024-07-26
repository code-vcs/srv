

document.getElementById("bt-create-write").addEventListener("click", () => {
    let url = "http://localhost:3040/create";
    let date = JSON.stringify({ title: "Criando arquivo", body: "meu texto esta OK", status: true, userId: 1 })
    fetch(url, {
        method: 'POST',
        body: date,
        headers: { 'Content-type': 'application/json;charset=UTF-8' }
    })
        .then(res => res.json())
        .then(msg => console.log(msg))
        .catch(err => console.log("Erro" + err))
})


document.getElementById("bt-leitura").addEventListener("click", () => {
    fetch("/DB_BANCO.json")
        .then(res => res.json())
        .then(stmsg => console.log(stmsg))
})