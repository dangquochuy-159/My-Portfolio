import { DataIntroduce } from '@/data/data_portfolio';

function Footer() {
    const data_intro = DataIntroduce;
    return (
        <div className="w-full fixed bottom-0 left-0 pb-5">
            <ul className="flex gap-7 justify-center">
                {data_intro.socials.map((social) => (
                    <li key={social.name} className=" rounded-full">
                        <a href={social.href}>{social.icon}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Footer;
