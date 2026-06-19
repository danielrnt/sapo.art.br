// =============================================
// SAPO.ART.BR — obra.js
// Específico da página de obra: thumbnails, modal, lightbox, toast
// =============================================

const mainImg = document.getElementById("obra-main-img");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {
  const gradient = thumb.dataset.gradient;
  thumb.style.background = gradient;

  thumb.addEventListener("click", () => {
    thumbs.forEach(t => t.classList.remove("active"));
    thumb.classList.add("active");
    mainImg.style.background = gradient;

    const lightboxImg = document.getElementById("lightbox-img");
    if (lightboxImg) lightboxImg.style.background = gradient;
  });
});

const overlay = document.getElementById("modal-overlay");
const btnAbrir = document.getElementById("btn-abrir-modal");
const btnFechar = document.getElementById("modal-fechar");

function abrirModal() {
  overlay.classList.add("aberto");
  document.body.style.overflow = "hidden";
}
function fecharModal() {
  overlay.classList.remove("aberto");
  document.body.style.overflow = "";
}

if (btnAbrir) btnAbrir.addEventListener("click", abrirModal);
if (btnFechar) btnFechar.addEventListener("click", fecharModal);

overlay?.addEventListener("click", (e) => {
  if (e.target === overlay) fecharModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    fecharModal();
    fecharLightbox();
  }
});

const btnConfirmar = document.getElementById("btn-confirmar");
const toast = document.getElementById("toast");

function mostrarToast(msg) {
  toast.textContent = msg;
  toast.classList.add("visivel");
  setTimeout(() => toast.classList.remove("visivel"), 4000);
}

btnConfirmar?.addEventListener("click", () => {
  const nome = document.getElementById("nome")?.value.trim();
  const email = document.getElementById("email")?.value.trim();

  if (!nome || !email) {
    mostrarToast("Preencha nome e e-mail para continuar.");
    return;
  }

  fecharModal();
  mostrarToast("Interesse registrado! Lara Moura entrará em contato em breve.");
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const btnLightboxFechar = document.getElementById("lightbox-fechar");
const zoomBtn = document.getElementById("zoom-btn");

function abrirLightbox() {
  const gradiente = mainImg.style.background;
  lightboxImg.style.background = gradiente;
  lightbox.classList.add("aberto");
  document.body.style.overflow = "hidden";
}
function fecharLightbox() {
  lightbox.classList.remove("aberto");
  document.body.style.overflow = "";
}

zoomBtn?.addEventListener("click", abrirLightbox);
mainImg?.addEventListener("click", abrirLightbox);
btnLightboxFechar?.addEventListener("click", fecharLightbox);
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) fecharLightbox();
});

document.querySelectorAll(".obra-card").forEach(card => {
  card.addEventListener("click", () => {
    window.location.href = "obra.html";
  });
});