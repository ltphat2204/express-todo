document.addEventListener("DOMContentLoaded", function(){
    const deadline = document.getElementById("deadline");
    //Deadline node existing
    if (deadline){
        deadline.setAttribute('value', moment(deadline.getAttribute('aria-value'), "DD/MM/YYYY").format("YYYY-MM-DD"))
    }
});