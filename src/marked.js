import { marked } from 'marked';
import { gfmHeadingId } from "marked-gfm-heading-id";
import { markedSmartypants } from "marked-smartypants";

import { markedImg } from "./marked-img.js";

// Set options
marked.use(
  {async: false, pedantic: false, gfm: true},
  gfmHeadingId(),
  markedSmartypants(),
  markedImg( {imgPath: "./public"} )
)


export function markdownToHtml(md) {
  // Replace BRAND, NEW, CARE with custom <span> element
  ["BRAND", "NEW", "CARE"].forEach(word => {
    const regex = new RegExp(`\\b${word}\\b(?=[.,!?;:])?`, 'g');
    md = md.replace(regex, `<span class="brand">${word}</span>`);
  })

  return marked.parse(md);
}
