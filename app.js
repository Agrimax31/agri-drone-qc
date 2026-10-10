document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href').substring(1);

    document.querySelectorAll('main, section').forEach(el => el.classList.add('hidden'));
    document.getElementById(target).classList.remove('hidden');

    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});
