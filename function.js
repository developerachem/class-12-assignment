const date = new Date;

/**
 * This Is Age Calculetor function
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */

function ageCal (name, year) {
    let age = date.getFullYear() - year ;
    let marage = marageCheck(age)
    if( year > date.getFullYear() ){
        return ` <p class="alert alert-danger"> ${name} Vai Oi Mia Batpari Koro ?? ${date.getFullYear()} Sal ki ekhno Ovar Hoiche ? </p> `
    }else{
        return ` <p class="alert alert-${marage.style}"> Hello ${name} You Are ${age} Years Old and ${marage.status} </p> `
    }
}

/**
 * This Is Marage Check Calculetor
 * @param {*} age 
 * @returns 
 */

function marageCheck (age) {
    
    if( age >= 0 && age < 18 ){
        return {
            status  : 'Tumi Ekhono Bacca So Tumi ekhn biye korote parba na ',
            style   : 'danger'
        } 
    }else if ( age >= 18 && age < 28 ){
        return {
            status  : ' Aponake Sagotom Apnari to Ekhn Biye korar Boyos Hoiche , Aponi ekhn Niscinte Biye Korote Parben Problem Nai , Kew jodi Jhamela korar Cesta kore taile sathe sathe amake phone diba ok ? ',
            style   : 'success'
        } 
    }else if ( age >= 28 && age < 45 ){
        return {
            status  : ' Asole ki bolbo dukkher kotha aponar to ekhn motamuti boyos hoiche ekhn ae kono meyere posondo korte cayba , tar poreo ami dekhi kichu korote pari kina ',
            style   : 'info'
        } 
    }else if ( age >= 45 && age < 60 ){
        return {
            status  : ' I\'m Sorry Uncel Aponar ekhn biye korar boyos nai , aponi ar biye korote parben na 😥 ',
            style   : 'primary'
        } 
    }else if ( age >= 60 && age < 100 ){
        return {
            status  : ' Dadu Aponar to ekhn Nati Puti Niye khelar kotha ar aponi aschen Ekhane Biye Korte , Aponi taratari Basay Jan Mia 😡 ',
            style   : 'danger'
        } 
    }else{
        return {
            status  : ' Jin / Vutera Ki biye kore naki ?  ',
            style   : 'dark'
        } 
    }

}