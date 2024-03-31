'use client';
import { DataHeader, DataIntroduce } from '@/data/data_portfolio';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
    const data_header = DataHeader;
    const data_intro = DataIntroduce;
    const pathName = usePathname();
    return (
        <header className="h-[100px] w-full bg-[var(--color-background)] text-white fixed top-0 left-0 z-50">
            <div className="container h-full m-auto flex justify-between">
                <div className="">
                    <ul className="h-full flex justify-end items-center gap-10">
                        {data_intro.socials.map((social) => (
                            <li key={social.name} className="opacity-70 rounded-full hover:opacity-100 hover:scale-125">
                                <a href={social.href} target="_blank">
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <nav className="h-full">
                    <ul className="h-full flex justify-end items-center gap-10">
                        {data_header.nav?.map((data) => (
                            <li
                                key={data.href}
                                className={`${
                                    pathName == data.href ? '!text-white' : 'text-[var(--color-text)]'
                                } nav--item hover:text-white`}
                            >
                                <Link href={data.href} className="p-2 rounded-md">
                                    {data.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
