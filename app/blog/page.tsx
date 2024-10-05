import { Metadata } from "next";
import Link from "next/link";
import { FC } from "react";

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60, //проверяет каждые 60 сенкунд нет ли новых постов если есть получаем их тоесть запрос будет проходит раз в минуту но не для каждого пользователя тоесть много пользователей создадут посты и все эти созданые посты появяться через минут помтоу-что next js запросом сделает проверку не ли новых постов есть если получит
            
        }
    });

    if(!response.ok) throw new Error("Unable to fetch posts!")
    
    return response.json();
}

export const metadata: Metadata = {
    title: 'Blog | Next App' //Имя страници
}

const Blog: FC = async (): Promise<JSX.Element> => {
    const posts = await getData();
    return (
        <div>
            <h1>Blog Page</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blog;