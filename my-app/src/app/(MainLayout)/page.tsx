import ImageTag from '@/components/ImageTag/ImageTag';
import { DataHeader, DataIntroduce } from '@/data/data_portfolio';
import Link from 'next/link';

export default function Home() {
    const data_intro = DataIntroduce;
    const data_header = DataHeader;
    const convert_link = (name: string, href: string) => {
        return (
            <a href={href} target="_blank" className="hover:underline text-white hover:text-blue-600">
                {` ${name}`}
            </a>
        );
    };

    return (
        <div className="grid grid-cols-2 px-[200px]">
            <div className="col-span-1 text-white h-full flex flex-col gap-y-5">
                <h1 className="text-5xl font-extrabold">{data_intro.name}</h1>
                <p className="text-sm font-bold">{data_intro.field_work}</p>
                <p className="w-3/4 text-sm text-[var(--color-text)] leading-7">{data_intro.intro}</p>
                <ImageTag src={data_header.logo} alt="logo" className="w-1/2 h-1/2 p-4" />
                <a
                    href="/cv"
                    target="_blank"
                    className="w-32 py-2 px-4
                                text-center text-xs text-white font-extrabold 
                                border-2 border-[#01eefe] border-solid rounded-full
                                bg-[#01eefe] hover:text-black
                                shadow-2xl"
                >
                    Dowload CV
                </a>
            </div>
            <div className="col-span-1">
                <p className="text-[var(--color-text)] leading-9">
                    Back in 2022, I decided to try my hand at simple website interfaces with basic technologies like
                    {convert_link('HTML', 'https://vi.wikipedia.org/wiki/HTML')},
                    {convert_link('CSS', 'https://vi.wikipedia.org/wiki/CSS')},
                    {convert_link('Javascript', 'https://vi.wikipedia.org/wiki/JavaScript')}. Fast forward to today and
                    I have been able to build larger website interfaces for an advertising agency, a startup.
                </p>
                <p className="text-[var(--color-text)] leading-9">
                    The main goal that I guide is to build a website with a modern interface, easily accessible to
                    users.
                </p>
                <p className="text-[var(--color-text)] leading-9">
                    By 2023, I started learning about the
                    {convert_link('ReactJS', 'https://react.dev/')}, library, a powerful Javascript library developed by
                    Facebook. It helps me a lot in building user interfaces. After that, I continued to learn
                    {convert_link('NodeJS', 'https://nodejs.org/en')},
                    {convert_link('MongoDB', 'https://www.mongodb.com/fr-fr')}, to support the back-end website building
                    towards the goal of
                    <span className="text-white"> Fullstack Web Developer.</span>
                </p>
                <p className="text-[var(--color-text)] leading-9">
                    Currently, I am learning about {convert_link('NextJS', 'https://nextjs.org/')}, a framework for
                    developing application websites with ReactJS
                </p>
                <p className="text-[var(--color-text)] leading-9">
                    Through the process of learning and accumulating experience, I have built a number of personal
                    projects for myself. Come explore them with me in
                    <Link href="/my-project" className="hover:underline text-white hover:text-blue-600">
                        {` My Project `}
                    </Link>
                    section
                </p>
            </div>
        </div>
    );
}
