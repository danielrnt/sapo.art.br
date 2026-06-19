// =============================================
// SAPO.ART.BR — script.js
// Script global: modo escuro (compartilhado entre todas as páginas)
// =============================================

const themeToggle = document.getElementById('theme-toggle');

function aplicarTema(tema) {
  if (tema === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggle) themeToggle.textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (themeToggle) themeToggle.textContent = '🌙';
  }
}

// Mantém o tema escolhido ao navegar entre páginas
const temaSalvo = localStorage.getItem('sapoart-tema');
if (temaSalvo) aplicarTema(temaSalvo);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const atual = document.documentElement.getAttribute('data-theme');
    const novo = atual === 'dark' ? 'light' : 'dark';
    aplicarTema(novo);
    localStorage.setItem('sapoart-tema', novo);
  });
}