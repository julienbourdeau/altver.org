import { marked } from 'marked';
import { gfmHeadingId } from "marked-gfm-heading-id";
import { markedSmartypants } from "marked-smartypants";

// Set options
marked.use(
  {async: false, pedantic: false, gfm: true},
  gfmHeadingId(),
  markedSmartypants()
)


export function markdownToHtml(md) {
  // Replace BRAND, NEW, CARE with custom <span> element
  ["BRAND", "NEW", "CARE"].forEach(word => {
    const regex = new RegExp(`\\b${word}\\b(?=[.,!?;:])?`, 'g');
    md = md.replace(regex, `<span class="brand">${word}</span>`);
  })

  md = md.replaceAll('./public', '');

  return marked.parse(md);
}
