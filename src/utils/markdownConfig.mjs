import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import rehypeSlug from 'rehype-slug';
import rehypeHeadingsAutoLink from 'rehype-autolink-headings';
function readingTimeRemarkPlugin() {
  return function (tree, file) {
    const textOnPage = toString(tree);
    const readingTime = Math.ceil(getReadingTime(textOnPage).minutes);

    file.data.astro.frontmatter.readingTime = readingTime;
  };
}

const markdownConfig = {
  gfm: true,
  shikiConfig: {
    theme: 'monokai',
    wrap: true,
  },
  remarkPlugins: [readingTimeRemarkPlugin],
  rehypePlugins: [rehypeSlug, rehypeHeadingsAutoLink],
};

export default markdownConfig;
