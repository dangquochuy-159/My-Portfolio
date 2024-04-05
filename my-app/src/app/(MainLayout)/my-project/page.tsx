import { IconGitLink, IconWebsite } from '@/components/Icon/Icon';
import ImageTag from '@/components/ImageTag/ImageTag';
import TitlePage from '@/components/TitlePage/TitlePage';
import { DataProject } from '@/data/data_portfolio';

function Project() {
    const data_project = DataProject;
    return (
        <section className="h-auto text-[var(--color-text)] relative flex flex-col gap-y-8 py-[var(--height-header)] md:pt-0 md:pb-10">
            <TitlePage
                title="Welcome to my project"
                des="Thank you for your interest in my projects. This is the result of my studying, accumulating experience and participating in real projects. Come explore them with me."
            />
            <div className="space-y-14">
                {data_project?.map((project_item) => (
                    <div key={project_item.time} className="grid grid-cols-7 gap-x-4">
                        {/* Image */}
                        <div className="col-span-2 w-full h-full">
                            <a href={project_item.website?.href}>
                                <ImageTag
                                    src={project_item.image}
                                    alt="logo"
                                    className="hidden xl:block w-full h-full rounded-md overflow-hidden"
                                    classImage="object-cover object-top"
                                />
                            </a>
                        </div>
                        {/* Content */}
                        <div className="col-span-5 w-full h-auto space-y-3">
                            {/* Name */}
                            <div className="inline-block">
                                <a
                                    href={project_item.website?.href}
                                    className={`flex items-center gap-2 text-[var(--color-primary)] text-2xl font-extrabold ${
                                        project_item.website?.href ? 'hover:underline' : ''
                                    }`}
                                >
                                    <span> {project_item.name}</span>
                                    {project_item.website?.href ? <IconWebsite /> : ''}
                                </a>
                            </div>
                            {/* Description */}
                            <div className="space-y-3">
                                <p className="italic">{project_item.time}</p>
                                <p className="italic">Team size: {project_item.size}</p>
                                <p className="italic text-white font-bold">{project_item.position}</p>
                                <ul className="flex flex-col gap-2 italic">
                                    {project_item.des?.map((desItem) => (
                                        <li key={desItem} className="">
                                            {desItem}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Tech */}
                            <div className="flex flex-wrap gap-x-6 gap-y-4">
                                {project_item.techs?.map((tech) => (
                                    <a
                                        key={tech.href}
                                        href={tech.href}
                                        target="_blank"
                                        className="text-[var(--color-primary)] font-bold hover:underline"
                                    >
                                        {tech.name}
                                    </a>
                                ))}
                            </div>
                            {/* Github */}
                            <div className="inline-block">
                                {project_item.github?.map((itemGit) => (
                                    <a
                                        key={itemGit.href}
                                        href={itemGit.href}
                                        target="_blank"
                                        className=" text-white flex gap-2 items-center "
                                    >
                                        <IconGitLink />
                                        <span className="hover:text-[var(--color-primary)] hover:underline">
                                            {itemGit.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
