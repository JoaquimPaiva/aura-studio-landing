const nav = document.querySelector(".desktop-nav");
const menuButton = document.querySelector(".menu-toggle");

const closeMenu = ({ restoreFocus = false } = {}) => {
  nav?.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Abrir menu");
  if (restoreFocus) menuButton?.focus();
};

document.addEventListener("click", (event) => {
  const menuButton = event.target instanceof Element ? event.target.closest(".menu-toggle") : null;
  if (menuButton) {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    nav?.classList.toggle("open", !isOpen);
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    return;
  }

  if (event.target instanceof Node && nav?.contains(event.target) && event.target instanceof Element && event.target.closest("a")) {
    closeMenu();
    return;
  }

  if (nav?.classList.contains("open") && event.target instanceof Node && !nav.contains(event.target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav?.classList.contains("open")) {
    closeMenu({ restoreFocus: true });
  }
});

const desktopViewport = window.matchMedia("(min-width: 761px)");
desktopViewport.addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

document.querySelectorAll("[data-dialog]").forEach((trigger) => {
  const dialog = document.getElementById(trigger.dataset.dialog);
  const closeButton = dialog?.querySelector(".dialog-close");
  if (!dialog || !closeButton) return;

  trigger.addEventListener("click", () => dialog.showModal());
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Novo projeto — ${form.get("name")}`);
  const body = encodeURIComponent(`Nome: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`);
  document.querySelector(".form-status").textContent = "A abrir o seu programa de email. Se não abrir, use o endereço de email ao lado.";
  window.location.href = `mailto:ola@aurastudio.pt?subject=${subject}&body=${body}`;
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
