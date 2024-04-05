import { IPersonalInfo } from '@/models/CommonInterfaces';

interface PropsBoxAbout {
    title: string;
    info?: IPersonalInfo[];
    imgRight?: boolean;
}

const BoxInfo: React.FC<PropsBoxAbout> = ({ title, info, imgRight }) => {
    return (
        <div className="col-span-5 xl:col-span-3 w-full h-auto">
            <ul className="flex flex-col gap-14 text-[var(--color-text)] mt-3">
                <h2
                    className={`font-bold text-2xl text-[var(--color-primary)] text-center ${
                        imgRight ? ' xl:text-right' : ' xl:text-left'
                    }`}
                >
                    {title}
                </h2>
                {info?.map((item) => (
                    <li
                        key={item.field_text}
                        className={`flex gap-5 items-center justify-center ${
                            imgRight ? 'xl:justify-end' : 'xl:justify-start'
                        } text-center`}
                    >
                        {imgRight ?? <span className="hidden xl:block">{item.icon} </span>}
                        <span>{item.field_text}</span>
                        {imgRight && <span className="hidden xl:block">{item.icon} </span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoxInfo;
