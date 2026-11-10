/* Molino in this language: the shared Kalio base and Molino's own words, one chunk. */
import base from "./base/da";
import own from "./molino.da";

export default { ...base, ...own } as Record<string, string>;
