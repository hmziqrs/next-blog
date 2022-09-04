import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import usePost from './hook';

const Post: NextPage = (props,a) => {
    const router = useRouter();
    const { slug } = router.query;
    console.log(slug);

    const hook = usePost({ slug: slug as string })

    

  return (
    <>
    <Head>
      <meta property="og:type" content="article" />
      {hook.meta.title && (
        <>
          <title>{hook.meta.title}</title>
          <meta property="og:title" content={hook.meta.title} key="title" />
          <meta name="twitter:title" content={hook.meta.title} />
        </>
      )}
      {hook.meta.description && (
        <>
          <meta property="og:description" content={hook.meta.description} />
          <meta name="twitter:description" content={hook.meta.description} />
        </>
      )}
    </Head>
    <div>
        Post:
<div>
  {hook.content && <ReactMarkdown>{hook.content}</ReactMarkdown>}
</div>
    </div>
    </>
  )
}

export default Post
