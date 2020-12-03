
const form = $('form');
const email = $('#email');
const phone = $('#phone');
const fname = $('#fname');
const address = $('#address');
const city = $('#city');
const country = $('#country');
const pcode = $('#pcode');
const checkSave =  $('#check-save');

if(form){
    form.onsubmit = (e) =>{
        e.preventDefault();
        let error = ""
        if(checkSave.checked === false){
            alert('Please check..')
            return false
        }
        else{
            [email, phone, fname, address, city, country, pcode].forEach(input => {
                if(input.value === ""){
                    error += `${input.id} is required. `;
                }
            });
            if(error !== ""){
                alert(error);
                return false;
            }else{
                alert('Success!!')
            }
        }
    }
}


const plusBtn = [...$$('.plus-btn')];
const minusBtn = [...$$('.minus-btn')];
const total = $("#total");
const ship = $("#ship");

const SHIPPING = 19;
let cardTotal = 148.98;

document.addEventListener("DOMContentLoaded", () => {
    total.innerText = `$${cardTotal}`
    ship.innerText = `$${SHIPPING}`
})
plusBtn.forEach(plus => {
    plus.addEventListener('click', (e) => {
        const pes = e.target.previousElementSibling;
        pes.innerText++
        cardTotal = cardTotal + +pes.getAttribute("data-cost");
        total.innerText = `$${cardTotal.toFixed(2)}`
    })
})

minusBtn.forEach(minus => {
    minus.addEventListener('click', (e) => {
        const nes = e.target.nextElementSibling;
        if(nes.innerText > 1){
            nes.innerText--
            cardTotal = cardTotal - +nes.getAttribute("data-cost");
            total.innerText = `$${cardTotal.toFixed(2)}`
        }
    })
})