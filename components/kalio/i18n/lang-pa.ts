/* Molino in this language: the shared Kalio base and Molino's own words, one chunk. */
import base from "./base/pa";
import own from "./molino.pa";

export default { ...base, ...own } as Record<string, string>;
