// Basit giriş animasyonu sonrası içerik görünür olsun
window.addEventListener('load', ()=> {
  const intro = document.getElementById('intro');
  if(intro){
    setTimeout(()=> intro.style.display='none', 1500);
  }
});

