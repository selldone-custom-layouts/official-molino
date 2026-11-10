/* Molino in this language: the shared Kalio base and Molino's own words, one chunk. */
import base from "./base/ar";
import own from "./molino.ar";

export default { ...base, ...own } as Record<string, string>;
