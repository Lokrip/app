import { Metadata } from "next";
import Link from "next/link";
import { FC } from "react";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function getData(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60, // revalidate every 60 seconds
        }
    });

    if (!response.ok) throw new Error("Unable to fetch posts!");

    return response.json();
}

export const metadata: Metadata = {
    title: 'Blog | Next App',
};

const Blog: FC = async (): Promise<JSX.Element> => {
    const posts = await getData();
    return (
        <div>
            <h1>Blog Page</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;