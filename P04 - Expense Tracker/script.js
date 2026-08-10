
// Hepler

function updateHistory(history){
    localStorage.setItem("history", JSON.stringify(history))
    render();
}

function getHistory(){
    const history = JSON.parse(localStorage.getItem("history")) || [];   
    return history; 
}

function deleteItem(id){ 
    const historyData = getHistory().filter(i => i.id != id)
    updateHistory(historyData)
}



// FORM
const form = document.querySelector("form")
const formName = document.querySelector("#name")
const formMoney = document.querySelector("#money") 

form.addEventListener("submit", e => {
    e.preventDefault()

    if (formName.value.trim() === ""){
        alert("Please type the name");
        return;
    }

    const historyData = getHistory();

    historyData.push({
        id: Date.now(), 
        name: formName.value.trim(),
        money: Number(formMoney.value)
    })

    updateHistory(historyData)
}); 


// History
const history = document.querySelector(".history")
const income = document.querySelector(".income")
const expense = document.querySelector(".expense") 
const balance = document.querySelector(".balance") 

function render(data = getHistory()){
    let incomeData = 0.00
    let expenseData = 0.00

    history.innerHTML = ""

    data.forEach(e => {
        const li = document.createElement("li")
        li.innerHTML = `${e.name}: ${e.money} <button onclick=deleteItem(${e.id})>x</button>`;
        history.append(li)

        if (e.money < 0){
            expenseData += Number(e.money)
        } else {
            incomeData += Number(e.money)
        }
    });

    income.textContent = incomeData
    expense.textContent = expenseData
    balance.textContent = incomeData + expenseData
}

render()

const search = document.querySelector(".search")

search.addEventListener("input", e => {
    const data = getHistory().filter(i => i.name.toLowerCase().includes(search.value.toLowerCase()))
    render(data)
})