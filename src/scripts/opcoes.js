const opcoes = document.querySelectorAll('[data-tipo]');
const bg = document.querySelector('body');

opcoes.forEach(opcao => {
  opcao.addEventListener('mouseenter', () => {
    bg.classList.add(`${opcao.dataset.tipo}`);
  })

  opcao.addEventListener('mouseleave', () => {
    bg.classList.remove(`${opcao.dataset.tipo}`);
  })
})
