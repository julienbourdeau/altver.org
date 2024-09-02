import { marked } from 'marked';
import { gfmHeadingId } from "marked-gfm-heading-id";
import { markedSmartypants } from "marked-smartypants";

// Set options
marked.use(
  {async: false, pedantic: false, gfm: true},
  gfmHeadingId(),
  markedSmartypants()
)


export function markdownToHtml(markdown) {
  // markdown = markdown.replace(new RegExp("BRAND", 'g'), '<span class="brand">BRAND</span>');

  ["BRAND", "NEW", "CARE"].forEach(word => {
    const regex = new RegExp(`\\b${word}\\b(?=[.,!?;:])?`, 'g');
    markdown = markdown.replace(regex, `<span class="brand">${word}</span>`);
  })

  return marked.parse(markdown);
}
