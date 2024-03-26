import Image from 'next/image';

interface IProps {
    src: string;
    alt: string;
    className: string;
}

const ImageTag: React.FC<IProps> = ({ src, alt, className }) => {
    return (
        <div className={`${className} relative`}>
            <Image
                src={src}
                alt={alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-4"
            />
        </div>
    );
};

export default ImageTag;
