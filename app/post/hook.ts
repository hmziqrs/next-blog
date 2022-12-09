import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { PostFetchCallback, PostFetchState, PostHookArgs, PostMetaProps } from "./types";




const fetchPost = async (slug: string) => {
    const result = await fetch(`/posts/${slug}.md`);
    const text = await result.text()
    return text
}

const parse = (text: string) => {
    const [,metaRaw,md] = text.split('---\n')
    // const md =  new Mit().render(mdRaw)
    const meta: {[key:string]: string} = {};
    console.log(metaRaw);
    // console.log(md);
    metaRaw.split('\n').forEach((row) => {
        if (!row) return;
        const index = row.indexOf(':')
        const key = row.slice(0, index)
        const value = row.slice(index+1)
        meta[key] = value.trim()
    })
    return {
        md,
        meta,
    }
}


const init = async (slug: string, callback: PostFetchCallback) => {
    try {
        const text = await fetchPost(slug)
        const payload =  parse(text)
        callback({
            loading: false,
            error: false,
            meta: payload.meta,
            content: payload.md
        })
    } catch (e) {
        callback({
            loading: false,
            error: true,
            meta: {},
        })
    }
}

const usePost = ({ slug }: PostHookArgs) => {
    const [state, setState] = useState<PostFetchState>({
        loading: false,
        error: false,
        meta: {},
        content: null,
    })


    useEffect(() => {
        if (!slug) return;
        init(slug, setState);
    }, [slug]);

    return useMemo(() => state, [state]);

}

export default usePost;