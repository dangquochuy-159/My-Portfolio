import { IconGitLink, IconWebsite } from '@/components/Icon/Icon';
import { DataProject } from '@/data/data_portfolio';

function Project() {
    const data_project = DataProject;
    return (
        <section className="h-auto text-[var(--color-text)] relative flex flex-col gap-y-8 pb-10">
            {data_project?.map((project_item) => (
                <div key={project_item.time} className=" grid grid-cols-4 bg-[var(--color-box)] p-10 rounded-xl">
                    <div className="col-span-3 flex flex-col gap-2">
                        <p className="text-[var(--color-text)]"> {project_item.time}</p>

                        <p className="text-[var(--color-primary)] text-2xl font-extrabold ">{project_item.name}</p>

                        <div className="flex gap-2">
                            <h3 className="text-white  font-bold">Team size:</h3>
                            <p className="italic">{project_item.size}</p>
                        </div>
                        <div className="flex gap-2">
                            <h3 className="text-white  font-bold">My position:</h3>
                            <p className="italic">{project_item.position}</p>
                        </div>
                        <div>
                            <h3 className="text-white  font-bold">My responsibility: </h3>
                            <ul className="flex flex-col mt-2 gap-2 px-12 italic">
                                {project_item.roles.map((role) => (
                                    <li key={role} className="list-disc">
                                        {role}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white  font-bold">Description:</h3>
                            <ul className="flex flex-col mt-2 gap-2 px-12 italic">
                                {project_item.des?.map((desItem) => (
                                    <li key={desItem} className="list-disc">
                                        {desItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h3 className="text-white mb-2 font-bold">Technology description:</h3>

                        <div className="flex flex-wrap gap-x-2 gap-y-4">
                            {project_item.techs?.map((tech) => (
                                <a
                                    key={tech.href}
                                    href={tech.href}
                                    target="_blank"
                                    className="text-white border-2 border-[var(--color-primary)] 
                                    rounded-md py-1 px-2 hover:text-[var(--color-primary)]"
                                >
                                    {tech.name}
                                </a>
                            ))}
                        </div>

                        <h3 className="text-white my-2  font-bold">Github:</h3>

                        <div className="flex flex-col">
                            {project_item.github?.map((itemGit) => (
                                <a
                                    key={itemGit.href}
                                    href={itemGit.href}
                                    target="_blank"
                                    className="text-[var(--color-primary)] flex gap-2 items-center hover:underline"
                                >
                                    <IconGitLink />
                                    <span>{itemGit.name}</span>
                                </a>
                            ))}
                        </div>

                        {project_item.website && (
                            <>
                                <h3 className="text-white my-2  font-bold">Website:</h3>
                                <a
                                    href={project_item.website?.href}
                                    target="_blank"
                                    className="text-[var(--color-primary)] flex gap-2 items-center hover:underline"
                                >
                                    <IconWebsite />
                                    <span>{project_item.website?.name}</span>
                                </a>
                            </>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Project;
