import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

type Posts = {
  id: number;
  title: string;
  content: string;
  published: boolean;
};

async function getPosts() {
  const _data = await fetch("http://localhost:3000/api/posts");
  return _data.json();
}

export default async function Home() {
  const post: Posts[] = await getPosts();
  console.log("post: ", post);
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      {post.map((item) => (
        <Link
          href={`/${item.id}`}
          key={item.id}
          className="max-w-sm mb-2 rounded overflow-hidden shadow-lg"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">{item.content}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item.published ? "Active" : "Disabled"}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
