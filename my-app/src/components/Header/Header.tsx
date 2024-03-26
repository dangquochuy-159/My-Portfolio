'use client';
import { DataHeader } from '@/data/data_portfolio';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    const data_header = DataHeader;

    return (
        <header className="h-[100px] w-full bg-transparent text-white fixed top-0 left-0">
            <div className="container h-full m-auto">
                <nav className="h-full">
                    <ul className="h-full flex justify-end items-center gap-10">
                        {data_header.nav?.map((data) => (
                            <li key={data.href} className="nav--item">
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
