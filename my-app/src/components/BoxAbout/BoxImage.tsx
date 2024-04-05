import { IPersonalList } from '@/models/CommonInterfaces';
import ImageTag from '../ImageTag/ImageTag';

interface PropsBoxImage extends IPersonalList {
    className?: string;
}

const BoxImage: React.FC<PropsBoxImage> = ({ img, className }) => {
    return (
        <div className={`${className} col-span-5 xl:col-span-2 w-full h-full`}>
            <ImageTag
                src={img}
                alt="logo"
                className="w-3/5 xl:w-2/3 h-full rounded-lg overflow-hidden  mx-auto"
                classImage="!relative object-contain object-top"
            />
        </div>
    );
};

export default BoxImage;
