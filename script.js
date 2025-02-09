const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");
const message = document.getElementById("message");

const trick = (theClickedOne) => {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === theClickedOne) fast.checked = false;
        if (cheap === theClickedOne) good.checked = false;
        if (fast === theClickedOne) cheap.checked = false;
        message.style.display = 'block';
    }
};

toggles.forEach((toggle) =>
    toggle.addEventListener('change', (e) => trick(e.target))
);

function showProfile() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
}

function closeProfile() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}