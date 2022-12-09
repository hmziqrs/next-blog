import React from "react";

export interface PageProps {
    loading?: boolean;
    error?: boolean;
    children: JSX.Element;
}