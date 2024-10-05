import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
    title: 'About | Next App' //Имя страници
}

const About: FC = (): JSX.Element => {
    return <h1>About Page</h1>
}

export default About