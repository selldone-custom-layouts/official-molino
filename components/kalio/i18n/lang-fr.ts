/* Molino in this language: the shared Kalio base and Molino's own words, one chunk. */
import base from "./base/fr";
import own from "./molino.fr";

export default { ...base, ...own } as Record<string, string>;
