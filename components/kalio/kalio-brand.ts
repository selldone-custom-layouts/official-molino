/* ━━━━━━━━━━━━ The Layout's own name and logo ━━━━━━━━━━━━
   Molino is the shop's own Layout: the name stays the shop's title; only the
   mark is the Layout's.

   The mark (assets/brand/molino-mark.svg, 64x64 SVG) stands before the wordmark in
   the header and footer and is the browser tab's icon. */

import mark from "../../assets/brand/molino-mark.svg?url";

export const BRAND: { name: string | null; mark: string } = {
  name: null,
  mark,
};

/** Put the Layout's name on the shop record the storefront reads. */
export function applyBrand(shop: any): void {
  if (shop && BRAND.name && shop.title !== BRAND.name) shop.title = BRAND.name;
  brandIcon();
}

/** The tab's icon (and the home-screen icon) is the Layout's mark. */
export function brandIcon(): void {
  if (typeof document === "undefined") return;
  for (const rel of ["icon", "apple-touch-icon"]) {
    let link = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      document.head.appendChild(link);
    }
    if (link.href !== BRAND.mark) {
      link.href = BRAND.mark;
      if (rel === "icon") link.type = "image/svg+xml";
    }
  }
}
