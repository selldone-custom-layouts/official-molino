/* Molino in this language: the shared Kalio base and Molino's own words, one chunk. */
import base from "./base/es";
import own from "./molino.es";

export default { ...base, ...own } as Record<string, string>;
