# FEALITY ITALY — Luxury Brand Interior Architecture Website

A premium, production-ready website for **FEALITY ITALY**, showcasing modular 304 stainless steel kitchens, bespoke architectural wardrobes, and Kino bathroom vanities.

Designed and engineered with an authentic contemporary Italian luxury aesthetic, refined typography, and verified catalogue specifications.

---

## 1. Architectural Pages Included

1. **Homepage (`index.html`)** — Editorial introduction, collection showcases, materials preview, catalogue-backed engineering pillars, consultative design process, franchise CTA, and direct consultation enquiry.
2. **Kitchen Collection (`kitchen.html`)** — 304 food-grade stainless steel carcasses, solid 6 mm and 10 mm anti-scratch worktops, black quartz stone surfaces, motorized lifting pantry mechanisms, technical matrix, and model cards.
3. **Wardrobe Collection (`wardrobe.html`)** — Architectural aluminium door profiles, Soft Rose, Ocean Blue, Warm Gold, and Silver finishes, Graphite dark illuminated interiors, artisanal leather organizer trays, and wire storage baskets.
4. **Bathroom Vanity Collection (`vanity.html`)** — Kino stainless steel series JG-1000 & JG-2000, honeycomb-aluminium reinforcement, silent DTC soft-close hinges, 400 BAR high-fired sintered slate tops, and model dimension tables.
5. **Materials & Finishes Library (`materials.html`)** — Dedicated materials library categorizing kitchen steels, solid worktops, wardrobe door swatches, saddle leather trays, sintered stone slabs, and mechanical fittings with interactive filter tabs.
6. **About FEALITY (`about.html`)** — Milanese design philosophy, material truth, architectural proportions, and client onboarding roadmap.
7. **Franchise & Showroom Partnership (`franchise.html`)** — Showroom concept models (Flagship, Atelier, Architectural Shop-in-Shop), commercial onboarding process, FAQ, and comprehensive franchise application form.
8. **Contact & Consultation Desk (`contact.html`)** — Multi-channel enquiry system with auto-prefilling from model cards, direct WhatsApp concierge, and project questionnaire.
9. **SEO Assets** — `sitemap.xml` and `robots.txt`.

---

## 2. Design System & Brand Palette

The visual direction follows European luxury showroom aesthetics:
- **Warm Ivory:** `#F5F1EA`
- **Limestone:** `#E7E0D4`
- **Deep Espresso:** `#211C18`
- **Charcoal:** `#292725`
- **Champagne Gold:** `#B39A70`
- **Warm White:** `#FFFFFF`

### Typography
- **Display Headings:** *Cormorant Garamond* (Editorial Italian Serif)
- **Body & Technical Specs:** *Manrope* (Clean, readable sans-serif)

---

## 3. Verified Supplier Catalogue Specifications

All product photography and dimensions are authentic assets extracted from the manufacturer catalogue PDFs:
- **Kitchens (Gudanni 2026 Catalogue):**
  - Models: CG-8001 (Fashion Walnut) and CG-8003 (Diamond Grey).
  - Specifications: 304 food-grade stainless steel carcasses and door panels.
  - Worktops: Solid 6 mm and 10 mm stainless steel worktops with sandblasted anti-scratch finish; black quartz stone surfaces.
  - Storage: Motorized intelligent lift baskets with capacitive touch control and optional remote.
- **Wardrobes (Newallan Door & Storage Catalogues):**
  - Door Finishes: Soft Rose (p. 6), Ocean Blue texture (p. 8), Silver metallic (p. 9), Warm Gold (p. 11), and Graphite dark illuminated interiors (p. 7).
  - Interiors: Handcrafted saddle leather jewelry & watch organizers, layered drawer trays, pull-out wire baskets, and modular hanging rails.
- **Bathroom Vanities (Kino Series 1 & 2 Catalogues):**
  - JG-2001: 1800 × 550 × 450 mm cabinet | 800 × 800 mm × 2 mirrors | Skin-feel brown grey, blue slate top with vessel glass basin.
  - JG-2002: 1600 × 550 × 450 mm cabinet | 650 × 1000 mm × 2 mirrors | C59 paint, khaki light-grey slate top.
  - JG-2003: 1800 × 550 × 450 mm cabinet | 1750 × 600 mm mirror | Laminated light white-grey, Cool Jade slate with vessel basin.
  - JG-2004: 1800 × 550 × 450 mm cabinet | 650 × 1100 mm × 2 mirrors | C107 paint, pure-grey slate top.
  - JG-2005: 1800 × 550 × 450 mm cabinet | 600 × 1000 mm × 2 mirrors | Mocha smoky brown-grey woodgrain, Italian light-grey stone top.
  - JG-1004: 1600 × 550 × 450 mm cabinet | 1200 × 1200 mm mirror | Matte white + wood, Calacatta white rock slab.
  - Construction: Stainless steel carcasses, honeycomb-aluminium reinforcement, DTC soft-close hinges, pull-basket drawer mechanisms, and 400 BAR vitrified sintered slate tops fired at ~1200°C.

---

## 4. Business Configuration & WhatsApp Setup

Configure verified phone numbers and corporate channels in `assets/config.js`:

```javascript
const SITE_CONFIG = {
  brandName: "FEALITY ITALY",
  tagline: "Where Italian Design Meets Everyday Living",
  whatsappNumber: "91XXXXXXXXXX", // Replace with verified business WhatsApp number (digits only, country code included)
  email: "contact@fealityitaly.com", // Optional fallback email address
  instagramUrl: "https://www.instagram.com/hardware_boutique_2.0/",
  leadEndpoint: "", // Optional HTTPS webhook or CRM endpoint
  currency: "INR"
};
```

### Lead Handoff Behavior
1. **WhatsApp Delivery:** When `whatsappNumber` is configured, clicking any enquiry button or submitting an enquiry form opens an encoded WhatsApp chat prefilled with the client's name, phone, city, chosen model, and project scope.
2. **Email Fallback:** If `whatsappNumber` is empty, the site falls back to `mailto:`.
3. **Graceful Notice:** If neither is set, the site alerts the user to configure `assets/config.js` and copies the enquiry text to the clipboard.
4. **CRM Integration:** If `leadEndpoint` is populated with a secure HTTPS URL, form submissions POST JSON data asynchronously before launching WhatsApp.

---

## 5. Deployment Instructions

This website is completely static (HTML5, CSS3, ES6 JavaScript) and requires no build pipeline.

### GitHub Pages Deployment
1. Push this branch or merge to `main`.
2. Go to repository **Settings** → **Pages**.
3. Under **Build and deployment**, select **Source:** `Deploy from a branch`.
4. Choose `main` (or `feature/luxury-relaunch`) and root `/`.
5. Click **Save**. The website is live immediately at `https://sarfaraj666.github.io/Webssiteee/`.

---

## 6. Directory Structure

```
Webssiteee/
├── index.html                   # Homepage
├── kitchen.html                 # Kitchen collection & specs
├── wardrobe.html                # Wardrobe collection & door finishes
├── vanity.html                  # Bathroom vanity models & dimensions
├── materials.html               # Materials & finishes library
├── about.html                   # Brand philosophy & design pillars
├── franchise.html               # Franchise & showroom opportunity
├── contact.html                 # Customer enquiry & consultation
├── sitemap.xml                  # Search engine sitemap
├── robots.txt                   # Crawler directives
├── assets/
│   ├── config.js                # Central configuration
│   └── images/                  # 27 verified supplier catalogue images
├── css/
│   └── site.css                 # Unified luxury design system
└── js/
│   └── site.js                  # Navigation, modals, filters, forms & WhatsApp
└── README.md                    # Project documentation
```
