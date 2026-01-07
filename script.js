function showGuide(device){
  document.getElementById('home-view').classList.remove('active');
  document.getElementById('windows-view').classList.remove('active');
  document.getElementById('mac-view').classList.remove('active');
  document.getElementById('mobile-view').classList.remove('active');
  document.getElementById('ppt-view').classList.remove('active');

  document.getElementById(device + '-view').classList.add('active');

  // ✅ Only run phase logic for views that actually have phases
  if(device === 'windows' || device === 'mac' || device === 'mobile'){
    openDefaultPhases(device + '-view');
  }

  window.scrollTo({top:0, behavior:'smooth'});
}


function goToWindowsStep2(){
  // Hide all views
  document.getElementById('home-view').classList.remove('active');
  document.getElementById('mac-view').classList.remove('active');
  document.getElementById('mobile-view').classList.remove('active');

  // Show Windows view
  const windowsView = document.getElementById('windows-view');
  windowsView.classList.add('active');

  // Close all phases first
  const headers = windowsView.querySelectorAll('.phase-header');
  const contents = windowsView.querySelectorAll('.phase-content');
  headers.forEach(h => h.classList.remove('open'));
  contents.forEach(c => c.classList.remove('open'));

  // Open Phase 2 (Important step)
  const step2 = windowsView.querySelector('.phase-section[data-phase="config"]');
  if(step2){
    step2.querySelector('.phase-header').classList.add('open');
    step2.querySelector('.phase-content').classList.add('open');

    // Scroll to it
    step2.scrollIntoView({behavior:'smooth', block:'start'});
  }
}


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
      content.classList.toggle('open');
    }

    function openDefaultPhases(viewId){
      const view = document.getElementById(viewId);
      if(!view) return;

      // close all phases first
      const headers = view.querySelectorAll('.phase-header');
      headers.forEach(h => h.classList.remove('open'));

      const contents = view.querySelectorAll('.phase-content');
      contents.forEach(c => c.classList.remove('open'));

      // open Share phase by default
      const shareSection = view.querySelector('.phase-section[data-phase="share"]');
      if(shareSection){
        const header = shareSection.querySelector('.phase-header');
        const content = shareSection.querySelector('.phase-content');
        if(header) header.classList.remove('open');
        if(content) content.classList.remove('open');
      }
    }