'use client';
import { DataHeader, DataIntroduce } from '@/data/data_portfolio';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon_Contact, Icon_Home, Icon_Info, Icon_Project } from '../Icon/Icon';
import path from 'path';

function HeaderMobile() {
    const data_header = DataHeader;
    const data_intro = DataIntroduce;
    const pathName = usePathname();
    return (
        <header className="block md:hidden w-full text-white">
            <div className="container h-full m-auto flex flex-col md:flex-row justify-between">
                <div className="w-full h-[var(--height-header-mobile)] fixed bottom-0 left-0 z-50 bg-[var(--color-background)]">
                    <ul className="h-full flex justify-center md:justify-end items-center gap-10">
                        {data_intro.socials.map((social) => (
                            <li key={social.name} className="opacity-100 md:opacity-70 rounded-full">
                                <a href={social.href} target="_blank">
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <nav className="w-full h-[var(--height-header-mobile)] fixed top-0 left-0 z-50 bg-[var(--color-background)]">
                    <ul className="h-full flex justify-center md:justify-end items-center gap-10">
                        {data_header.nav?.map((data) => (
                            <li
                                key={data.href}
                                className={`${
                                    pathName == data.href ? '!text-white' : 'text-[var(--color-text)]'
                                } hover:text-white`}
                            >
                                <Link href={data.href} className="p-2 rounded-md">
                                    {data.icon_name === 'home' ? (
                                        <Icon_Home color={`${pathName == data.href ? '#5febd5' : '#ffffff'}`} />
                                    ) : (
                                        ''
                                    )}
                                    {data.icon_name === 'about' ? (
                                        <Icon_Info color={`${pathName == data.href ? '#5febd5' : '#ffffff'}`} />
                                    ) : (
                                        ''
                                    )}
                                    {data.icon_name === 'project' ? (
                                        <Icon_Project color={`${pathName == data.href ? '#5febd5' : '#ffffff'}`} />
                                    ) : (
                                        ''
                                    )}
                                    {data.icon_name === 'contact' ? (
                                        <Icon_Contact color={`${pathName == data.href ? '#5febd5' : '#ffffff'}`} />
                                    ) : (
                                        ''
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default HeaderMobile;
