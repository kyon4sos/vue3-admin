const loading = document.querySelector('#loading');
const lottieAnimationItem = lottie.loadAnimation({
  container: loading,
  path: '/127157.json',
  loop: true,
  renderer: 'svg',
});
window.addEventListener('app-mounted', () => {
  loading.classList.toggle('hidden', true);
});
