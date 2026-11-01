/**
 * FEALITY ITALY — Core Interactive Script
 * Handles Navigation, Modals, Filters, FAQ Accordions, Enquiry Forms & WhatsApp Integration
 */

(() => {
  'use strict';

  // Config reference
  const CONFIG = window.SITE_CONFIG || window.FEALITY_CONFIG || {};
  const cleanPhone = String(CONFIG.whatsappNumber || '').replace(/\D/g, '');
  const businessEmail = String(CONFIG.email || CONFIG.businessEmail || '').trim();

  // 1. Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-btn') || document.querySelector('.menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');

  if (menuToggle && mobileDrawer) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : !mobileDrawer.classList.contains('open');
      menuToggle.classList.toggle('open', isOpen);
      mobileDrawer.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    };

    menuToggle.addEventListener('click', () => toggleMenu());
    
    // Close on link click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  }

  // 2. Sticky Header Scroll Effect
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 3. Dynamic WhatsApp URL Helper
  function getWhatsAppUrl(customMessage) {
    const defaultMsg = 'Hello FEALITY ITALY,\n\nI am interested in your luxury interior collections (Kitchens, Wardrobes, and Vanities).\n\nPlease share the product catalogue, specifications, and consultation details.';
    const text = encodeURIComponent(customMessage || defaultMsg);
    if (cleanPhone) {
      return `https://wa.me/${cleanPhone}?text=${text}`;
    }
    return null;
  }

  // Setup WhatsApp Links throughout the page
  function setupWhatsAppLinks() {
    document.querySelectorAll('.js-wa-link').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const msg = btn.dataset.message || '';
        const url = getWhatsAppUrl(msg);
        if (url) {
          window.open(url, '_blank', 'noopener,noreferrer');
        } else {
          e.preventDefault();
          // Fallback notice
          alert('FEALITY ITALY WhatsApp Direct Line:\n\nPlease enter the verified business phone number in "assets/config.js" to enable direct WhatsApp routing.\n\nIn the meantime, you can reach us through our Enquiry form or Instagram.');
          const enquiryEl = document.querySelector('#enquiry') || document.querySelector('.enquiry-form');
          if (enquiryEl) {
            enquiryEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }
  setupWhatsAppLinks();

  // 4. FAQ Accordion Component
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close siblings if in same accordion
        const parent = item.parentElement;
        if (parent && parent.classList.contains('faq-accordion')) {
          parent.querySelectorAll('.faq-item').forEach(sibling => {
            if (sibling !== item) sibling.classList.remove('active');
          });
        }
        item.classList.toggle('active', !isActive);
      });
    }
  });

  // 5. Product & Material Filter Tabs
  document.querySelectorAll('.filter-bar').forEach(bar => {
    const buttons = bar.querySelectorAll('.filter-btn');
    const targetSelector = bar.dataset.targetGrid;
    const grid = targetSelector ? document.querySelector(targetSelector) : null;

    if (!grid) return;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterVal = btn.dataset.filter;
        const items = grid.querySelectorAll('[data-category]');

        items.forEach(item => {
          if (filterVal === 'all' || item.dataset.category.includes(filterVal)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });

  // 6. Modal / Lightbox Component
  const modalBackdrop = document.querySelector('.modal-backdrop');
  if (modalBackdrop) {
    const modalClose = modalBackdrop.querySelector('.modal-close');
    const modalImg = modalBackdrop.querySelector('.modal-image img');
    const modalTitle = modalBackdrop.querySelector('.modal-info-title');
    const modalSeries = modalBackdrop.querySelector('.modal-info-series');
    const modalDesc = modalBackdrop.querySelector('.modal-info-desc');
    const modalSpecs = modalBackdrop.querySelector('.modal-info-specs');
    const modalEnquireBtn = modalBackdrop.querySelector('.modal-enquire-btn');
    const modalWaBtn = modalBackdrop.querySelector('.modal-wa-btn');

    const closeModal = () => {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (modalClose) modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) closeModal();
    });

    // Delegate quick-view buttons
    document.querySelectorAll('[data-quick-view]').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.model-card') || btn.closest('.material-card');
        if (!card) return;

        const img = card.querySelector('img');
        const title = card.querySelector('.model-name, .material-name');
        const series = card.querySelector('.model-series, .material-tag');
        const desc = card.querySelector('.model-description, .material-notes');
        const specs = card.querySelector('.model-specs-list');

        if (modalImg && img) modalImg.src = img.src;
        if (modalTitle && title) modalTitle.textContent = title.textContent.trim();
        if (modalSeries && series) modalSeries.textContent = series.textContent.trim();
        if (modalDesc && desc) modalDesc.textContent = desc.textContent.trim();
        if (modalSpecs) {
          modalSpecs.innerHTML = specs ? specs.innerHTML : '';
        }

        const modelName = title ? title.textContent.trim() : '';

        // Wire modal enquire button to form or contact page
        if (modalEnquireBtn) {
          modalEnquireBtn.onclick = () => {
            closeModal();
            prefillFormAndScroll(modelName);
          };
        }

        // Wire modal WhatsApp button
        if (modalWaBtn) {
          modalWaBtn.onclick = () => {
            const waMsg = `Hello FEALITY ITALY,\n\nI am inquiring about model: ${modelName}.\n\nPlease share the detailed catalogue sheet, finish options, and quotation.`;
            const waUrl = getWhatsAppUrl(waMsg);
            if (waUrl) {
              window.open(waUrl, '_blank', 'noopener,noreferrer');
            } else {
              closeModal();
              prefillFormAndScroll(modelName);
            }
          };
        }

        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  // Helper to prefill form on current page or redirect to contact.html
  function prefillFormAndScroll(modelName) {
    const form = document.querySelector('form[data-lead-form]');
    if (form) {
      const modelInput = form.querySelector('[name="product_model"]') || form.querySelector('[name="message"]');
      if (modelInput) {
        if (modelInput.name === 'product_model') {
          modelInput.value = modelName;
        } else {
          modelInput.value = `Inquiring about model: ${modelName}\n\n`;
        }
      }
      form.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `contact.html?model=${encodeURIComponent(modelName)}`;
    }
  }

  // 7. Auto-prefill form from URL query parameters (e.g. ?category=kitchen&model=CG-8001)
  const urlParams = new URLSearchParams(window.location.search);
  const paramCategory = urlParams.get('category');
  const paramModel = urlParams.get('model');

  const pageForm = document.querySelector('form[data-lead-form]');
  if (pageForm) {
    if (paramCategory) {
      const catSelect = pageForm.querySelector('[name="category"]');
      if (catSelect) {
        for (let i = 0; i < catSelect.options.length; i++) {
          if (catSelect.options[i].text.toLowerCase().includes(paramCategory.toLowerCase())) {
            catSelect.selectedIndex = i;
            break;
          }
        }
      }
    }
    if (paramModel) {
      const modelInput = pageForm.querySelector('[name="product_model"]');
      if (modelInput) {
        modelInput.value = paramModel;
      }
    }
  }

  // 8. Lead & Product Enquiry Form Submission Handler
  document.querySelectorAll('form[data-lead-form]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;

      const submitBtn = form.querySelector('button[type="submit"]');
      const statusEl = form.querySelector('.form-status');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Preparing Enquiry...';
      }

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      data.page = document.body.dataset.page || window.location.pathname;
      data.submittedAt = new Date().toISOString();

      // Format clean message for WhatsApp/Email
      let msgBody = `FEALITY ITALY — Project Enquiry\n`;
      msgBody += `==============================\n`;
      if (data.name) msgBody += `Name: ${data.name}\n`;
      if (data.phone) msgBody += `Phone / WhatsApp: ${data.phone}\n`;
      if (data.email) msgBody += `Email: ${data.email}\n`;
      if (data.city) msgBody += `City: ${data.city}\n`;
      if (data.category) msgBody += `Category: ${data.category}\n`;
      if (data.product_model) msgBody += `Model/Reference: ${data.product_model}\n`;
      if (data.project_type) msgBody += `Project Type: ${data.project_type}\n`;
      if (data.investment_range) msgBody += `Investment Range: ${data.investment_range}\n`;
      if (data.message) msgBody += `Message: ${data.message}\n`;
      msgBody += `==============================\n`;
      msgBody += `Source Page: ${data.page}`;

      // Optional CRM Endpoint
      if (CONFIG.leadEndpoint) {
        try {
          const res = await fetch(CONFIG.leadEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          });
          if (!res.ok) throw new Error('Endpoint error');
          if (statusEl) {
            statusEl.textContent = 'Enquiry recorded successfully. Our team will contact you shortly.';
          }
        } catch (err) {
          console.warn('Lead endpoint submission notice:', err);
          if (statusEl) {
            statusEl.textContent = 'Connecting to FEALITY consultation desk...';
          }
        }
      }

      // WhatsApp Handoff
      if (cleanPhone) {
        if (statusEl) {
          statusEl.textContent = 'Opening WhatsApp with your pre-filled enquiry. Please click Send in WhatsApp to complete.';
        }
        const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msgBody)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      } else if (businessEmail) {
        if (statusEl) {
          statusEl.textContent = 'Opening your email client. Please click Send to deliver your enquiry.';
        }
        window.location.href = `mailto:${encodeURIComponent(businessEmail)}?subject=${encodeURIComponent('FEALITY ITALY Enquiry')}&body=${encodeURIComponent(msgBody)}`;
      } else {
        // Fallback when neither phone nor email configured
        try {
          await navigator.clipboard.writeText(msgBody);
          if (statusEl) {
            statusEl.textContent = 'Enquiry copied to clipboard! (Please configure the verified business WhatsApp number in assets/config.js to enable 1-click WhatsApp delivery.)';
          }
        } catch (_) {
          if (statusEl) {
            statusEl.textContent = 'Thank you for your enquiry. Please configure business contacts in assets/config.js to enable instant messaging.';
          }
        }
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  });

  // 9. Copyright Year Auto-update
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

})();
