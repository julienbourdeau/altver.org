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
  return marked.parse(markdown);
}
