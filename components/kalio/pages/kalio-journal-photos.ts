/* ━━━━━━━━━━━━ The journal's own photos ━━━━━━━━━━━━
   The four grocery articles (published 7 November 2026) got their own
   photos, made with Codex from kalio-design/articles/image-prompts.md
   (1600x1000 JPG, assets/journal/). They ship with this Layout to get an
   address on Selldone's CDN: each article's cover on Selldone points at its
   file in Molino's release 0.2.33, which Tario and Walio show too. Keep that
   release on Selldone, or upload the photo again before changing a cover.

   An article whose cover is emptied on Selldone falls back to its photo here. */

import dinners from "../../../assets/journal/journal-dinners.jpg";
import produce from "../../../assets/journal/journal-produce.jpg";
import breakfast from "../../../assets/journal/journal-breakfast.jpg";
import bread from "../../../assets/journal/journal-bread.jpg";

export const JOURNAL_PHOTOS: Record<string, string> = {
  "week-of-dinners-one-grocery-run": dinners,
  "keep-fruit-and-vegetables-fresh-longer": produce,
  "five-slow-weekend-breakfasts": breakfast,
  "keeping-bread-fresh": bread,
  /* Their Spanish editions (kalio-design/spanish/blog, blog-editions.json). */
  "una-semana-de-cenas-con-una-sola-compra": dinners,
  "como-conservar-la-fruta-y-la-verdura-frescas-mas-tiempo": produce,
  "cinco-desayunos-de-fin-de-semana-sin-prisas": breakfast,
  "como-mantener-el-pan-tierno": bread,
};

/** The article with a cover: its own on Selldone, else the journal's photo. */
export function withPhoto(article: any): any {
  if (!article || article.image || !JOURNAL_PHOTOS[article.slug]) return article;
  return { ...article, image: JOURNAL_PHOTOS[article.slug] };
}
