interface IPersonalItem {
    field_text: string;
    icon: React.ReactNode;
}
interface IProps {
    title_box: string;
    data: IPersonalItem[];
}

const BoxInfo: React.FC<IProps> = ({ title_box, data }) => {
    return (
        <div className="col-span-1 p-4 rounded-xl bg-[var(--color-box)]">
            <h2 className="font-bold text-white text-center">{title_box}</h2>
            <ul className="flex flex-col gap-5 text-[var(--color-text)] mt-3">
                {data.map((item) => (
                    <li key={item.field_text} className="flex gap-5 items-center">
                        {item.icon}
                        <span>{item.field_text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoxInfo;
