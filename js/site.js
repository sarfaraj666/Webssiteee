(() => {
  'use strict';
  const cfg = window.FEALITY_CONFIG || {};
  const digits = String(cfg.whatsappNumber || '').replace(/\D/g, '');
  const phone = String(cfg.businessEmail || '').trim();
  const nav = document.querySelector('.nav');
  document.querySelector('.menu-btn')?.addEventListener('click', () => nav?.classList.toggle('open'));
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav?.classList.remove('open')));
  const header = document.querySelector('.site-header');
  const markHeader = () => header?.classList.toggle('scrolled', window.scrollY > 25);
  markHeader(); window.addEventListener('scroll', markHeader, {passive:true});
  document.querySelectorAll('.js-wa').forEach(a => {
    if (digits) a.href = `https://wa.me/${digits}?text=${encodeURIComponent(a.dataset.message || 'Hello FEALITY ITALY, I would like to discuss a project.')}`;
    else { a.href = '#enquiry'; a.addEventListener('click', () => document.querySelector('#enquiry')?.scrollIntoView({behavior:'smooth'})); }
  });
  document.querySelectorAll('form[data-lead-form]').forEach(form => form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    data.page = document.body.dataset.page || location.pathname;
    data.submittedAt = new Date().toISOString();
    const textLines = Object.entries(data).filter(([k,v]) => v && !['submittedAt','page'].includes(k)).map(([k,v]) => `${k}: ${v}`);
    const message = `FEALITY ITALY — Website enquiry\n${textLines.join('\n')}`;
    const status = form.querySelector('.form-status');
    if (cfg.leadEndpoint) {
      try {
        const response = await fetch(cfg.leadEndpoint, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
        if (!response.ok) throw new Error('Lead service returned an error');
        if (status) status.textContent = 'Thank you. Your enquiry has been sent.';
      } catch (err) {
        if (status) status.textContent = 'The online lead service is not responding. You can still send this enquiry through WhatsApp or email below.';
      }
    }
    if (digits) {
      if (status) status.textContent = 'Your enquiry is ready in WhatsApp. Please press Send in WhatsApp to complete it.';
      window.open(`https://wa.me/${digits}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    } else if (phone) {
      if (status) status.textContent = 'Your email app is opening. Please press Send to complete the enquiry.';
      location.href = `mailto:${encodeURIComponent(phone)}?subject=${encodeURIComponent('FEALITY website enquiry')}&body=${encodeURIComponent(message)}`;
    } else {
      try { await navigator.clipboard.writeText(message); if (status) status.textContent = 'Enquiry copied. Configure the verified WhatsApp number in assets/config.js to enable direct WhatsApp lead handoff.'; }
      catch (_) { if (status) status.textContent = 'Please configure the verified WhatsApp number in assets/config.js to enable enquiry delivery.'; }
    }
  }));
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
