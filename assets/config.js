/**
 * FEALITY ITALY — Central Site Configuration
 * Configure verified business contacts, social channels, and lead endpoints here.
 */
const SITE_CONFIG = {
  brandName: "FEALITY ITALY",
  tagline: "Where Italian Design Meets Everyday Living",
  whatsappNumber: "", // International format digits only (e.g., '919876543210'). Leave blank until provided by owner.
  email: "",          // Verified business email. Leave blank until verified.
  instagramUrl: "https://www.instagram.com/hardware_boutique_2.0/",
  leadEndpoint: "",   // Optional secure HTTPS CRM/Webhook URL. Leave blank if none.
  currency: "INR"
};

// Expose globally
window.SITE_CONFIG = SITE_CONFIG;
window.FEALITY_CONFIG = SITE_CONFIG; // Backward compatibility alias
