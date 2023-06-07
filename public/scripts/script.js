document.addEventListener("DOMContentLoaded", () => {
    const time = document.getElementById('current-time');
    
    fetch('/api')
    .then(res => res.text())
    .then(data => time.innerHTML = data)
})