// Based on https://github.com/jldec/marked-images/blob/main/marked-images.js

import _ from "lodash";

export function markedImg(opts) {
  opts = opts || {};

  return { renderer: { image: renderImage } };

  function renderImage(href, title, text) {
    var out;
    var classNames = [];

    if (_.startsWith(href, opts.imgPath)) {
      href = href.replace(opts.imgPath, "");
    }

    if (_.endsWith(href, "#gh-light-mode-only")) {
      classNames.push("gh-light-mode-only", 'dark:hidden');
      href = href.replace(/#gh-light-mode-only$/, "");
    } else if (_.endsWith(href, "#gh-dark-mode-only")) {
      classNames.push("gh-dark-mode-only", 'hidden dark:block');
      href = href.replace(/#gh-dark-mode-only$/, "");
    }

    out = '<img src="' + href + '" alt="' + text + '"';

    var a = (title && title.split(/\s+/)) || [];
    var b = [];
    var m;
    a.forEach(function (w) {
      if ((m = w.match(/^(\d+)x(\d+)$/)))
        return (out += ' width="' + m[1] + '" height="' + m[2] + '"');
      if ((m = w.match(/^(\w+)=([\w-]+)$/))) {
        if (m[1] === "class") return classNames.push(m[2]);
        return (out += " " + m[1] + '="' + m[2] + '"');
      }
      if ((m = w.match(/^\.([\w-]+)$/))) return classNames.push(m[1]);
      if (w) return b.push(w);
    });

    if (classNames.length) {
      out += ' class="' + classNames.join(" ") + '"';
    }

    title = b.join(" ");

    if (title) {
      out += ' title="' + title + '"';
    }

    out += ">";

    return out;
  }
}
