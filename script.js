function safeRemove(id){
  const el = document.getElementById(id);
  if(el) el.classList.remove('active');
}

function safeAdd(id){
  const el = document.getElementById(id);
  if(el) el.classList.add('active');
}

function showGuide(device){
  ['home-view','windows-view','mac-view','mobile-view','ppt-view'].forEach(safeRemove);
  safeAdd(device + '-view');

  if(device === 'windows' || device === 'mac' || device === 'mobile'){
    openDefaultPhases(device + '-view');
  }

  window.scrollTo({top:0, behavior:'smooth'});
}

function showHome(){
  ['windows-view','mac-view','mobile-view','ppt-view'].forEach(safeRemove);
  safeAdd('home-view');
  window.scrollTo({top:0, behavior:'smooth'});
}

function toggleFAQ(el){
  el.classList.toggle('open');
}

function togglePhase(el){
  el.classList.toggle('open');
  const content = el.nextElementSibling;
  if(content) content.classList.toggle('open');
}

function openDefaultPhases(viewId){
  const view = document.getElementById(viewId);
  if(!view) return;

  // Close all phases — do NOT open anything
  view.querySelectorAll('.phase-header').forEach(h => h.classList.remove('open'));
  view.querySelectorAll('.phase-content').forEach(c => c.classList.remove('open'));
}



function goToWindowsStep2(){
  ['home-view','mac-view','mobile-view','ppt-view'].forEach(safeRemove);

  const windowsView = document.getElementById('windows-view');
  windowsView.classList.add('active');

  const headers = windowsView.querySelectorAll('.phase-header');
  const contents = windowsView.querySelectorAll('.phase-content');
  headers.forEach(h => h.classList.remove('open'));
  contents.forEach(c => c.classList.remove('open'));

  const step2 = windowsView.querySelector('.phase-section[data-phase="config"]');
  if(step2){
    const header = step2.querySelector('.phase-header');
    const content = step2.querySelector('.phase-content');
    if(header) header.classList.add('open');
    if(content) content.classList.add('open');

    step2.scrollIntoView({behavior:'smooth', block:'start'});
  }
}

// Back to top button logic
document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    backToTopBtn.style.display = (window.scrollY > 300) ? 'block' : 'none';
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
