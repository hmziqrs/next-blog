import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import usePost from './hook';
import PostMeta from './Meta';

const Post: NextPage = (props,a) => {
    const router = useRouter();
    const { slug } = router.query;
    console.log(slug);

    const hook = usePost({ slug: slug as string })

  return (
    <>
    <PostMeta {...hook.meta} />
<div>
  {hook.content && <ReactMarkdown>{hook.content}</ReactMarkdown>}
</div>
    </>
  )
}

export default Post
