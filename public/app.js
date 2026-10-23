const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? '메뉴 열기' : '메뉴 닫기');
  navigation.classList.toggle('is-open', !expanded);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a') && window.matchMedia('(max-width: 680px)').matches) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '메뉴 열기');
    navigation.classList.remove('is-open');
  }
});

const form = document.querySelector('#subscribe-form');
const message = document.querySelector('#form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  message.textContent = '관심 가져주셔서 고마워요! 정식 오픈 소식을 준비해둘게요.';
  form.reset();
});