// import { useParams } from "next/navigation";
// "use client" //он делаеть комопнет клиенским а не сервеным по умолчние комопонеты серверный из в них хуки запрещенны при use client он делаеть компонент клиенским теперь нам хуки доступны
import { Metadata } from "next";
import { FC } from "react";

interface PostPorpsParams {id: string}

interface PostPorps {
    params: PostPorpsParams
}


async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60, //проверяет каждые 60 сенкунд нет ли новых постов если есть получаем их тоесть запрос будет проходит раз в минуту но не для каждого пользователя тоесть много пользователей создадут посты и все эти созданые посты появяться через минут помтоу-что next js запросом сделает проверку не ли новых постов есть если получит
            
        }
    });
    
    return response.json();
}

export async function generateMetadata(
    { params }: PostPorps): Promise<Metadata> {//generateMetadata нужен чтобы делать мето теги функциями
    const post = await getData(params.id); 

    return {
        title: post.title,
    };
}

const Post: FC<PostPorps> = async ({params}:PostPorps): Promise<JSX.Element> => {
    // params мы можем получать тот url id каторый ввел пользователь  
    // например /blog/adsqweewq я могу получить adsqweewq, чтобы 
    // сделать такой маршрут нам надо написать [id]-[slug] и т.д
    // без использование useParams у нас компонент серверный а если мы 
    // будет его использовать станет клиенским потому-что мы используем хук

    // const { id } = useParams<{ id: string }>();
    const post = await getData(params.id);
    // console.log(post) //log будет на строне сервера тоесть не будет выведен в фронтенде а будет выведен в терминали vs code

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;