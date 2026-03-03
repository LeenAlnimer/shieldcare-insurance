const form = document.getElementById("applyForm");
const modal = document.getElementById("modal");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        modal.style.display = "flex";
    });
}