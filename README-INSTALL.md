# FEALITY ITALY — Luxury Website Upgrade

This is a static HTML/CSS/JS upgrade pack for the existing `sarfaraj666/Webssiteee` repository. It uses no build system or framework.

## Included pages
- `index.html` — redesigned homepage and collection overview
- `kitchen.html` — kitchen collection, catalogue-backed worktop and model notes
- `wardrobe.html` — door finishes and organiser systems
- `vanity.html` — Kino vanity model references and dimensions
- `about.html` — brand/design approach
- `franchise.html` — franchise/showroom enquiry page
- `css/site.css`, `js/site.js`, `assets/config.js`
- `assets/images/` — compressed product photography rendered from the supplied PDFs

## Install on GitHub
1. Download and extract this ZIP.
2. In your repository, upload the extracted folders/files to the repository root.
3. Choose **Commit directly to main** only if you are happy to replace the existing same-named HTML pages. Better: create a new branch in GitHub first, upload the files there, review the preview, then merge.
4. Keep the directory names exactly as included (`css`, `js`, `assets/images`).
5. GitHub Pages can serve this site as static HTML from the root of `main` (or whichever branch/folder is selected in Pages settings).

## WhatsApp and lead routing — required setup
Open `assets/config.js` and enter the verified business details:

```js
window.FEALITY_CONFIG = {
  whatsappNumber: '91XXXXXXXXXX', // replace with your real business WhatsApp number
  businessEmail: 'sales@example.com', // optional fallback
  leadEndpoint: '', // optional HTTPS webhook/CRM endpoint
  instagram: 'https://www.instagram.com/hardware_boutique_2.0/'
};
```

- `whatsappNumber` must be digits only in international format, including country code; do not include `+`, spaces or hyphens.
- Each lead form validates the required fields and opens a prefilled WhatsApp message. The customer must press **Send** in WhatsApp; the site does not claim the lead is delivered before that.
- Optionally connect `leadEndpoint` to a secure HTTPS form/CRM endpoint that accepts JSON POST requests. Do not put API secrets or private tokens in this public JavaScript file.
- If neither WhatsApp nor email is configured, the page will copy the enquiry details where browser permissions allow and explain that business contact setup is still required.

## Catalog imagery and authenticity
All files in `assets/images` are cropped/compressed images rendered from the six supplier PDFs provided in this conversation. They are manufacturer/supplier catalogue photos, not evidence of installed FEALITY projects. Replace the hero and collection imagery with FEALITY's own completed kitchen/wardrobe/vanity photographs when you have them. Do not label supplier catalogue photographs as FEALITY installations.

## Source-backed product detail caveats
- Kitchen: the Gudanni catalogue lists solid 6 mm and 10 mm worktops with a sandblasted anti-scratch surface treatment. CG-8001 and CG-8003 pages list 304 stainless-steel door/cabinet construction and black quartz-stone worktops. Verify model availability and exact current specs with the supplier.
- Vanity: the Kino catalogues contain model codes, cabinet/mirror dimensions and listed finishes on individual pages. The Vanity page transcribes a small selection. Confirm all dimensions and finish codes against the latest SKU sheet.
- Wardrobe: the Newallan PDFs are predominantly image scans. They visibly show door finishes, organiser trays, divider inserts and basket storage. Exact product codes, material composition, load ratings and dimensions have not been represented as verified facts.

## Reference site
The provided `share.google` link did not resolve to a usable destination in the connected browsing session. This upgrade follows the FEALITY visual direction already present in the repository and the supplied supplier catalogues. A direct reference URL or screenshots can be used for a more exact second-pass match.
