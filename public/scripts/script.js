document.addEventListener("DOMContentLoaded", () => {
    const time = document.getElementById('current-time');
    const now = new Date();

    time.innerHTML = now.toLocaleDateString();
})