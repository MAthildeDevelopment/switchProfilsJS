

function Customer(profilImg, profilName, profilDescript) {
    this.profilImg = profilImg;
    this.profilName = profilName;
    this.profilDescript = profilDescript;
}

let customer0 = new Customer("../img/customer-0.jpg", "customerZero", "HI, I'm customerZero (alias Zorro) , nice to meet you there!");
let customer1 = new Customer("../img/customer-1.jpg", "customerOne", "Hello there, I'm the customerOne, the only One ahah.");
let customer2 = new Customer("../img/customer-2.jpg", "customerTwo", "I'm customerTwo, and I know you want it two (I mean: too)!");
let customer3 = new Customer("../img/customer-3.jpg", "customerThree", "Hey :), My name is customerThree, sign for free X).");
let customer4 = new Customer("../img/customer-4.jpg", "customerFour", "Hellooo, customerFour there! I know you're looking Four me ;).");

let customers = [customer0, customer1, customer2, customer3, customer4];


let customerImg = document.querySelector('#customer-img');
let customerName = document.querySelector('#customer-name');
let customerDescription = document.querySelector('#customer-text');
const buttonL = document.querySelector('.prevBtn');
const buttonR = document.querySelector('.nextBtn');
let i = -1;


window.onload = function() {
    let randomCustomer;
    randomCustomer = customers[Math.floor(Math.random() * customers.length)];
    customerImg.src = randomCustomer.profilImg;
    customerName.innerHTML = randomCustomer.profilName;
    customerDescription.innerHTML = randomCustomer.profilDescript;
}

buttonR.addEventListener("click", () => {
    if(i < (customers.length - 1 )) {
        i++;
        customerImg.src = `${customers[i].profilImg}`;
        customerName.innerHTML = customers[i].profilName;
        customerDescription.innerHTML = customers[i].profilDescript;
    } else {
        i = 0;
        customerImg.src = `${customers[i].profilImg}`;
        customerName.innerHTML = customers[i].profilName;
        customerDescription.innerHTML = customers[i].profilDescript;
    }
    
});

buttonL.addEventListener("click", () => {
    if(i < (customers.length) && i > 0) {
        i--;
        customerImg.src = `${customers[i].profilImg}`;
        customerName.innerHTML = customers[i].profilName;
        customerDescription.innerHTML = customers[i].profilDescript;
    } else {
        i = 4;
        customerImg.src = `${customers[i].profilImg}`;
        customerName.innerHTML = customers[i].profilName;
        customerDescription.innerHTML = customers[i].profilDescript;
    }
});