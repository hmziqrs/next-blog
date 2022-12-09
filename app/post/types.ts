import { Dispatch, SetStateAction } from "react";

export interface PostMetaProps {
    title?: string;
    description?: string;
}

export interface PostHookArgs {
    slug: string;
}

export interface PostFetchState {
    loading: boolean;
    error: boolean;
    content?: any;
    meta: PostMetaProps
}


export type PostFetchCallback = Dispatch<SetStateAction<PostFetchState>>
