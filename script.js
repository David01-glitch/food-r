// Cookie consent — fun, transparent, both buttons land on home
(function(){
  if(sessionStorage.getItem('cookieChoice')) return;
  const overlay = document.getElementById('cookieOverlay');
  if(!overlay) return;
  overlay.style.display = 'flex';
  document.getElementById('cookieYes').addEventListener('click', () => {
    sessionStorage.setItem('cookieChoice','yes');
    overlay.style.display = 'none';
    window.location.hash = '';
  });
  document.getElementById('cookieNo').addEventListener('click', () => {
    sessionStorage.setItem('cookieChoice','no');
    overlay.style.display = 'none';
    window.location.hash = '';
  });
})();

// Read more — expand inline, no redirect
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    if(!target) return;
    const open = target.classList.toggle('open');
    btn.textContent = open ? 'Show Less ↑' : 'Read Recipe →';
  });
});

// Newsletter (no backend, just friendly feedback)
const nf = document.getElementById('newsForm');
if(nf){
  nf.addEventListener('submit', e => {
    e.preventDefault();
    nf.innerHTML = '<p style="font-size:20px">Welcome to the kitchen, friend! 🥧</p>';
  });
}

// Contact form (mailto fallback)
const cf = document.getElementById('contactForm');
if(cf){
  cf.addEventListener('submit', e => {
    e.preventDefault();
    const name = encodeURIComponent(cf.cname.value);
    const msg = encodeURIComponent(cf.cmsg.value + '\n\n— ' + cf.cname.value);
    window.location.href = `mailto:Grandparenting34@gmail.com?subject=Hello%20from%20${name}&body=${msg}`;
  });
}
