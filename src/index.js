import * as crypto from "node:crypto";
import fs from "fs";
import fm from "front-matter";
import mustache from "mustache";
import { markdownToHtml } from "./marked.js";

const config = {
  srcCssPath: './public/styles.css', // given by tailwindcss cli tool
  cssFilename: '/css/styles-[HASH].css',
}

const getHtmlContent = () => {
  const data = fs.readFileSync("./ALTVER.md", "utf8");
  const content = fm(data);
  content.body = markdownToHtml(content.body);

  const template =  fs.readFileSync('./src/layout.mustache', "utf8");
  return mustache.render(template, {
    attr: content.attributes,
    body: content.body,
    css: config.cssFilename,
  })
};


if (fs.existsSync(config.srcCssPath)) {
  fs.rmSync('./public/css', { recursive: true, force: true });
  fs.mkdirSync('./public/css')

  const fileBuffer = fs.readFileSync(config.srcCssPath);
  const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex').substring(0, 8);
  // console.log(`CSS File Hash: ${hash}`);
  config.cssFilename = config.cssFilename.replace('[HASH]', hash);
  console.log(config)


  fs.renameSync(config.srcCssPath, `./public/${config.cssFilename}`);
}

fs.writeFile(
  'public/index.html',
  getHtmlContent(),
  e => {
    if (e) throw e;
    console.log(`index.html was created successfully`);
  }
);
