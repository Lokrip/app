//Это Второй лояут, тоесть есть лояут по умолчние в app/layout.tsx без 
//него не будет не чего работать но мы можем еще создовать 
//лояуты например для about мы создаем второй лояут чтобы 
//покозать другие маршруты

import Link from "next/link";
import { ReactNode } from "react";


export default function AboutLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div>
            <h1>About us</h1>

            <ul>
                <li><Link href='/about/contacts'>Contacts</Link></li>
                <li><Link href='/about/team'>Team</Link></li>
            </ul>

            {children}
            {
            /* в children будет хрониться html компоненты page каторый мы создадим внутри папки about/**
            например контакт, то при переходе на url контактов он будет видить верхнюю часть лояута 
            
            тоесть этот по факту тот же лояут каторый мы видем изночально только новый для about

            например внутри папки about есть page он будет хрониться в children и там будет виден вехрний
            текст html
            */
            }
        </div>
    )
}
