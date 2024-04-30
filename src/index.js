import fs from "fs";
import fm from "front-matter";
import mustache from "mustache";
import { markdownToHtml } from "./marked.js";


const getHtmlContent = () => {
  const data = fs.readFileSync("./ALTVER.md", "utf8");
  const content = fm(data);
  content.body = markdownToHtml(content.body);

  const template =  fs.readFileSync('./src/layout.mustache', "utf8");
  return mustache.render(template, {
    attr: content.attributes,
    body: content.body
  })
};


if (!fs.existsSync('public'))
  fs.mkdirSync('public');

fs.writeFile(
  'public/index.html',
  getHtmlContent(),
  e => {
    if (e) throw e;
    console.log(`index.html was created successfully`);
  }
);
