let cashUp = [];


const button = document.getElementById('value');
const recalculatorButton = document.getElementById('new_value');
const cashUpValue = document.getElementById('cashUp');
const show = document.querySelector('.show-more');

show.addEventListener('click', showElement)
button.addEventListener('click', cash_up);
recalculatorButton.addEventListener('click', newCalcutor)


function cash_up(e){
    const numbers = Number(cashUpValue.value)

   console.log(numbers)
   
   if(!(numbers === 0)){
    
    const total = document.getElementById('total');
    const diffents = document.getElementById('diffents')
    cashUp.push(numbers);
    clearFlied();

   addElement(numbers)
   
   let sum = calcutor();
   total.innerText = sum.toFixed(2);

   let diff = diffence();
    diffents.innerText = diff
   } 

   document.getElementById('totalcards').textContent = cashUp.length
   e.preventDefault();
};



function clearFlied(){
    cashUpValue.value = '';
};

function calcutor(){
    let sum = cashUp.reduce(add, 0);

    function add(a, b) {
        return parseFloat(a) + parseFloat(b);
    }
    console.log(sum)
    return sum
};

function addElement(number){
    let newUl = document.createElement("li");
    let newInput = document.createElement("input")
    
    newInput.className = 'newValue m-1 p-2'
    newInput.setAttribute("type", "number")
    newInput.setAttribute("step", "any")
    newInput.setAttribute("value", `${number}`)

    newUl.appendChild(newInput)

    document.getElementById("resultUl").appendChild(newUl);
};

function newCalcutor(e){
    const total = document.getElementById('total');
    let nodesArray = [].slice.call(document.querySelectorAll(".newValue"));
    cashUp = []

    nodesArray.forEach(function(item){
        cashUp.push(Number(item.value));
    })
    let sum = calcutor();

    total.innerText = sum.toFixed(2)



    e.preventDefault();
};

function diffence(){
    const total = document.getElementById('total').innerHTML;
    const reportTotal = document.getElementById('reportTotal').value;
    console.log(total)
    console.log(reportTotal)
    return (total - reportTotal).toFixed(2);
}

function showElement() {
    let x = document.querySelector(".hide");
    if (x.style.display === "block") {
        x.style.display = "none";
        show.textContent = "Show More"
    } else {
        x.style.display = "block";
        show.textContent = "Show Less"
    }
}