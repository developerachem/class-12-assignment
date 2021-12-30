/**
 * This Is Cur Calculetor
 */

const fullForm = document.querySelector('#full-form');
const bdAmount = document.querySelector('#curamount');
const countryCode = document.querySelector('#country-value');
const massage = document.querySelector('#massage');
const bdMassage = document.querySelector('#bdMassage');
const codemassage = document.querySelector('#codemassage');

bdAmount.addEventListener('keyup', () => {
    bdMassage.innerHTML = "";
    massage.innerHTML = "";
})
countryCode.addEventListener('click', () => {
    codemassage.innerHTML = "";
    massage.innerHTML = "";
})

fullForm.addEventListener('submit', (e) => {

    e.preventDefault();

    let inputPatternCR = /^[0-9.]*$/;

    if (bdAmount.value === "") {
        bdMassage.innerHTML = (`* BD Amount Field Required !`)

    } else if (inputPatternCR.test(bdAmount.value) === false) {
        bdMassage.innerHTML = (`* Plise Input BD Amount !`)

    } else if (countryCode.value === countryCode.children[0].value) {
        codemassage.innerHTML = (`* Country Code Required !`)

    } else if (countryCode.value === countryCode.children[1].value) {
        massage.innerHTML = (`<p class="alert alert-success"> ${bdAmount.value} Taka = ${ bdAmount.value * countryCode.children[1].value } USD  </p>`)
        bdAmount.value = '';
        countryCode.value = countryCode.children[0].value;

    } else if (countryCode.value === countryCode.children[2].value) {
        massage.innerHTML = (`<p class="alert alert-success"> ${bdAmount.value} Taka = ${ bdAmount.value * countryCode.children[2].value } ERO </p>`)
        bdAmount.value = '';
        countryCode.value = countryCode.children[0].value;

    } else if (countryCode.value === countryCode.children[3].value) {
        massage.innerHTML = (`<p class="alert alert-success"> ${bdAmount.value} Taka = ${ bdAmount.value * countryCode.children[3].value } CAD </p>`)
        bdAmount.value = '';
        countryCode.value = countryCode.children[0].value;

    } else if (countryCode.value === countryCode.children[4].value) {
        massage.innerHTML = (`<p class="alert alert-success"> ${bdAmount.value} Taka = ${ bdAmount.value * countryCode.children[4].value } SAR </p>`)
        bdAmount.value = '';
        countryCode.value = countryCode.children[0].value;

    } else if (countryCode.value === countryCode.children[5].value) {
        massage.innerHTML = (`<p class="alert alert-success"> ${bdAmount.value} Taka = ${ bdAmount.value * countryCode.children[5].value } GBP </p>`)
        bdAmount.value = '';
        countryCode.value = countryCode.children[0].value;

    } else if (countryCode.value === countryCode.children[6].value) {
        massage.innerHTML = (`<p class="alert alert-success"> ${bdAmount.value} Taka = ${ bdAmount.value * countryCode.children[6].value } MYR </p>`)
        bdAmount.value = '';
        countryCode.value = countryCode.children[0].value;

    } else if (countryCode.value === countryCode.children[7].value) {
        massage.innerHTML = (`<p class="alert alert-success"> ${bdAmount.value} Taka = ${ bdAmount.value * countryCode.children[7].value } AED </p>`)
        bdAmount.value = '';
        countryCode.value = countryCode.children[0].value;

    }


})



/**
 * This IS Age And Marage Calculetor 
 */


const ageForm = document.querySelector('#age-form');
const ageName = document.querySelector('#age-name');
const ageNameMassage = document.querySelector('#name-massage');
const ageYear = document.querySelector('#age-year');
const ageYearMassage = document.querySelector('#year-massage');
const ageMassage = document.querySelector('#age-massage');

ageName.addEventListener('blur', () => {
    if (ageName.value === "") {
        ageName.style.border = "1px solid red";
        ageNameMassage.innerHTML = `*Name Filde Required !`
    } else {
        ageName.style.border = "";
    }
})
ageName.addEventListener('keyup', () => {
    let ageNameValid = /^[^0-9]*$/;
    ageName.style.border = "";
    ageNameMassage.innerHTML = "";
    ageMassage.innerHTML = "";
    if (ageNameValid.test(ageName.value) === false) {
        ageName.style.border = "1px solid red";
        ageNameMassage.innerHTML = `*No Number Plise Only Your Name !`
    }

})
ageYear.addEventListener('blur', () => {
    if (ageYear.value === "") {
        ageYear.style.border = "1px solid red";
        ageYearMassage.innerHTML = `*Birth Filde Required !`;
    } else {
        ageYear.style.border = "";
    }
})
ageYear.addEventListener('keyup', () => {
    let ageYearValid = /^[0-9]{4}$/;
    ageYear.style.border = "";
    ageYearMassage.innerHTML = "";
    ageMassage.innerHTML = "";
    if (ageYearValid.test(ageYear.value) === false) {
        ageYearMassage.innerHTML = `*Just 4 Digit !`
        ageYear.style.border = "1px solid red";
    }
})


ageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let ageNameValid = /^[^0-9]*$/;
    let ageYearValid = /^[0-9]{4}$/;

    if (ageName.value === "" && ageYear.value === "") {
        ageNameMassage.innerHTML = `*Name Filde Required !`
        ageName.style.border = "1px solid red";
        ageYearMassage.innerHTML = `*Birth Filde Required !`
        ageYear.style.border = "1px solid red";
    } else if (ageNameValid.test(ageName.value) === false) {
        ageNameMassage.innerHTML = `*No Number Plise Only Your Name !`
    } else if (ageYearValid.test(ageYear.value) === false) {
        ageYearMassage.innerHTML = `*Type Your Birth In 4 Digit !`
    } else {
        ageMassage.innerHTML = ageCal(ageName.value, ageYear.value)
        ageName.value = "";
        ageYear.value = "";
    }
})


/**
 * This Is Form Validetionn
 */

const formFild = document.querySelector('#input-form');
const formName = document.querySelector('#formName');
const nameMassage = document.querySelector('#nameMassage');
const formUname = document.querySelector('#formUname');
const uNameMassage = document.querySelector('#uNameMassage');
const formEmail = document.querySelector('#formEmail');
const emailMassage = document.querySelector('#emailMassage');
const formNumber = document.querySelector('#formNumber');
const numbaeMassage = document.querySelector('#numbaeMassage');
const formMassage = document.querySelector('#formMassage');
const msgMassage = document.querySelector('#msgMassage');
const finelMassage = document.querySelector('#form-massage');

formName.addEventListener('blur', () => {

    if (formName.value === "") {
        formName.style.border = "1px solid red";
        nameMassage.innerHTML = "*Name field Required !"
    } else {
        formName.style.border = "";

    }
})
formName.addEventListener('keyup', () => {
    formName.style.border = "";
    nameMassage.innerHTML = ""
})
formUname.addEventListener('blur', () => {

    if (formUname.value === "") {
        formUname.style.border = "1px solid red";
        uNameMassage.innerHTML = "*Username field Required !"
    } else {
        formUname.style.border = "";

    }
})
formUname.addEventListener('keyup', () => {
    formUname.style.border = "";
    uNameMassage.innerHTML = ""
})
formEmail.addEventListener('blur', () => {

    if (formEmail.value === "") {
        formEmail.style.border = "1px solid red";
        emailMassage.innerHTML = "*Email field Required !"
    } else {
        formEmail.style.border = "";

    }
})
formEmail.addEventListener('keyup', () => {
    formEmail.style.border = "";
    emailMassage.innerHTML = ""
})
formNumber.addEventListener('blur', () => {

    if (formNumber.value === "") {
        formNumber.style.border = "1px solid red";
        numbaeMassage.innerHTML = "*Number field Required !"
    } else {
        formNumber.style.border = "";

    }
})
formNumber.addEventListener('keyup', () => {
    formNumber.style.border = "";
    numbaeMassage.innerHTML = ""
})

formMassage.addEventListener('blur', () => {

    if (formMassage.value === "") {
        formMassage.style.border = "1px solid red";
        msgMassage.innerHTML = "*Number field Required !"
    } else {
        msgMassage.style.border = "";

    }
})

formMassage.addEventListener('keyup', () => {
    let massage = formMassage.value;
    if (massage.length <= 20) {
        msgMassage.innerHTML = 'Righte Massage In Minimam 20 Words';
        formMassage.style.border = "1px solid red";
    } else if (massage.length > 50) {
        msgMassage.innerHTML = 'Righte Massage In Maximum 50 Words';
        formMassage.style.border = "1px solid red";
    } else if (massage.length > 20 && massage.length <= 50) {
        msgMassage.innerHTML = "";
        formMassage.style.border = "2px solid green";
    }else{
        msgMassage.innerHTML = "";
        
    }
})
=


formFild.addEventListener('submit', (e) => {
    e.preventDefault();

 
    if( formName.value === "" || formUname.value === "" || formEmail.value === "" || formNumber.value === "" || formMassage.value === "" ){

        formName.style.border = "1px solid red";
        nameMassage.innerHTML = "*Name field Required !"

        formUname.style.border = "1px solid red";
        uNameMassage.innerHTML = "*Username field Required !"

        formEmail.style.border = "1px solid red";
        emailMassage.innerHTML = "*Email field Required !"

        formNumber.style.border = "1px solid red";
        numbaeMassage.innerHTML = "*Number field Required !"

        formMassage.style.border = "1px solid red";
        msgMassage.innerHTML = "*Massage field Required !";
        


    }

})