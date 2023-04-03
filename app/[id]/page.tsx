'use client'
import React from "react";

type PageProps = {
  params: {
    id: string;
  };
};

async function getPostDetail(id: string) {
  const _data = await fetch(`http://localhost:3000/api/posts/${id}`);
  return _data
}

async function PostDetails({ params }: PageProps) {
  const { id } = params;
  const postDetail = await getPostDetail(id);
 
  console.log("postDetail: ", postDetail);
 
  return <div></div>;
}

export default PostDetails;
