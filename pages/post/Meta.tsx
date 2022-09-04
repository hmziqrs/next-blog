import Head from "next/head";
import { PostMetaProps } from "./types";

const PostMeta = ({title, description}: PostMetaProps) => {

    return     <Head>
      <meta property="og:type" content="article" />
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} key="title" />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {description && (
        <>
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
    </Head>

}