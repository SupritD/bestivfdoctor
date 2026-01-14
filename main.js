const header = document.querySelector(".ivf-header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

document.addEventListener("DOMContentLoaded", function () {
  // const modalEl = document.getElementById('popupForm');
  const modalEl = document.getElementById("enquireModal");
  const modal = new bootstrap.Modal(modalEl);
  let modalOpenedManually = false;
  let popupTimer;

  // Button-triggered modal (manual open)
  modalEl.addEventListener("show.bs.modal", function () {
    modalOpenedManually = true;
    clearTimeout(popupTimer); // cancel auto popup
  });

  // Auto popup after 3 seconds ONLY if not opened
  popupTimer = setTimeout(function () {
    if (!modalOpenedManually && !modalEl.classList.contains("show")) {
      modal.show();
    }
  }, 10000);

  // Handle form submission
  const form = modalEl.querySelector("form");
  form.addEventListener("submit", function (e) {
    // e.preventDefault();
    modal.hide();
  });

  // Cleanup backdrops on close (extra safety)
  modalEl.addEventListener("hidden.bs.modal", function () {
    document.body.classList.remove("modal-open");
    document.querySelectorAll(".modal-backdrop").forEach((b) => b.remove());
  });
});
