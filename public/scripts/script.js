document.addEventListener("DOMContentLoaded", function(){
    const today = document.getElementById("today");
    //Today node existing
    if (today){
        today.innerText = moment().format("DD/MM/YYYY");
    }

    const deadline = document.getElementById("deadline");
    //Deadline node existing
    if (deadline){
        deadline.setAttribute('value', moment(deadline.getAttribute('aria-value'), "DD/MM/YYYY").format("YYYY-MM-DD"))
    }
});