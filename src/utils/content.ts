import { CollectionEntry, getCollection } from 'astro:content';
import type { Post } from '@/types';

const getNormalizedPost = async (post: CollectionEntry<'project'>): Promise<Post> => {
  const { id, slug, data } = post;
  const { Content, headings, remarkPluginFrontmatter } = await post.render();

  const {
    category: rawCategory,
    author = 'Anonymous',
    publishDate: rawPublishDate = new Date(),
    ...rest
  } = data;

  const publishDate = new Date(rawPublishDate);
  const category = rawCategory ? rawCategory : undefined;

  return {
    id: id,
    slug: slug,

    publishDate: publishDate,
    category: category,
    author: author,
    headings,
    ...rest,
    Content: Content,

    readingTime: remarkPluginFrontmatter?.readingTime,
  };
};
const load = async function (collection): Promise<Array<Post>> {
  const posts = await getCollection(collection);
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));

  const results = (await Promise.all(normalizedPosts))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
    .filter((post) => !post.draft);

  return results;
};
let _posts: Array<Post>;

export const fetchPosts = async (collection): Promise<Array<Post>> => {
  if (!_posts) {
    _posts = await load(collection);
  }

  return _posts;
};
