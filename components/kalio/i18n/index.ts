/*
 * Molino's words, per language: the shared Kalio base (base/<lang>.ts, a
 * copy of new-shop-kits/i18n/kalio-base) plus Molino's own (molino.<lang>.ts).
 * English is bundled; every other language is its own small chunk, fetched
 * only when a visitor picks it (lang-<code>.ts merges its two files).
 * A language the owner enables later: copy base/<code>.ts, write
 * molino.<code>.ts, add lang-<code>.ts and one line below.
 */
import baseEn from "./base/en";
import molinoEn from "./molino.en";

export const EN: Record<string, string> = { ...baseEn, ...molinoEn };

export const LOADERS: Record<string, () => Promise<any>> = {
  ar: () => import("./lang-ar"),
  pa: () => import("./lang-pa"),
  es: () => import("./lang-es"),
  da: () => import("./lang-da"),
  fr: () => import("./lang-fr"),
};
