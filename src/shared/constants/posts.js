import { uid } from 'uid';
import TEXTS from '../texts/texts';
import img1 from '../../assets/images/post-1.jpg';
import img2 from '../../assets/images/post-2.jpg';
import img3 from '../../assets/images/post-3.jpg';
import img4 from '../../assets/images/post-4.jpg';
import img5 from '../../assets/images/post-5.jpg';
import img6 from '../../assets/images/post-6.jpg';

const POSTS = [
  {
    uid: uid(),
    id: 1,
    img: `${img1}`,
    span: `${TEXTS.blogPage.ourBlog.postDate}`,
    title: `${TEXTS.blogPage.posts.firstTitle}`,
    desc: `${TEXTS.blogPage.posts.desc}`,
  },
  {
    uid: uid(),
    id: 2,
    img: `${img2}`,
    span: `${TEXTS.blogPage.ourBlog.postDate}`,
    title: `${TEXTS.blogPage.posts.firstTitle}`,
    desc: `${TEXTS.blogPage.posts.desc}`,
  },
  {
    uid: uid(),
    id: 3,
    img: `${img3}`,
    span: `${TEXTS.blogPage.ourBlog.postDate}`,
    title: `${TEXTS.blogPage.posts.secondTitle}`,
    desc: `${TEXTS.blogPage.posts.desc}`,
  },
  {
    uid: uid(),
    id: 4,
    img: `${img4}`,
    span: `${TEXTS.blogPage.ourBlog.postDate}`,
    title: `${TEXTS.blogPage.posts.secondTitle}`,
    desc: `${TEXTS.blogPage.posts.desc}`,
  },
  {
    uid: uid(),
    id: 5,
    img: `${img5}`,
    span: `${TEXTS.blogPage.ourBlog.postDate}`,
    title: `${TEXTS.blogPage.posts.firstTitle}`,
    desc: `${TEXTS.blogPage.posts.desc}`,
  },
  {
    uid: uid(),
    id: 6,
    img: `${img6}`,
    span: `${TEXTS.blogPage.ourBlog.postDate}`,
    title: `${TEXTS.blogPage.posts.firstTitle}`,
    desc: `${TEXTS.blogPage.posts.desc}`,
  },
];

export default POSTS;
