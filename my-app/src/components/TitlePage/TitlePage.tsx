interface ITitlePage {
    title: string;
    des: string;
}

const TitlePage: React.FC<ITitlePage> = ({ title, des }) => {
    return (
        <div className=" text-center">
            <h1 className="text-white text-4xl italic ">{title}</h1>
            <p className="text-[var(--color-text)] leading-7 my-5">{des}</p>
        </div>
    );
};

interface ITitlePage {
    title: string;
    des: string;
}

export default TitlePage;
