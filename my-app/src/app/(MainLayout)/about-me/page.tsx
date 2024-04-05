'use client';
import ImageTag from '@/components/ImageTag/ImageTag';
import TitlePage from '@/components/TitlePage/TitlePage';
import { DataIntroduce, Data_Education, Data_Personal_Info, Data_Skills } from '@/data/data_portfolio';

function AboutMe() {
    const data_personal_info = Data_Personal_Info;
    const data_education = Data_Education;
    const data_skills = Data_Skills;

    return (
        <div className="py-[var(--height-header)] md:py-0 ">
            <TitlePage
                title="Welcome to my portfolio page!"
                des="I'm a fullstack web developer, proficient in both front-end and back-end programming. I specialize in
                    creating websites that are modern and optimized for user experience."
            />
            <section className="w-full space-y-24 mt-24 pb-24">
                {/* Personal */}
                <div className="grid grid-cols-5 w-full">
                    <div className="col-span-5 xl:col-span-2 w-full h-full">
                        <ImageTag
                            src={data_personal_info.img}
                            alt="logo"
                            className=" w-3/5 xl:w-2/3 h-full rounded-lg overflow-hidden mx-auto"
                            classImage="!relative object-contain object-to  object-top"
                        />
                    </div>
                    <div className="col-span-5 xl:col-span-3 w-full h-auto">
                        <ul className="flex flex-col gap-14 text-[var(--color-text)] mt-3  ">
                            <h2 className="font-bold text-2xl text-[var(--color-primary)] text-center xl:text-left">
                                Personal Information
                            </h2>
                            {data_personal_info.info.map((item) => (
                                <li
                                    key={item.field_text}
                                    className="flex gap-5 items-center justify-center xl:justify-start text-center"
                                >
                                    <span className="hidden xl:block">{item.icon} </span>
                                    <span>{item.field_text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Education */}
                <div className="grid grid-cols-5 w-full">
                    <div className="block xl:hidden col-span-5 xl:col-span-2 w-full h-full">
                        <ImageTag
                            src={data_education.img}
                            alt="logo"
                            className=" w-2/3 h-full rounded-lg overflow-hidden  mx-auto"
                            classImage="!relative object-contain object-top"
                        />
                    </div>
                    <div className="col-span-5 xl:col-span-3 w-full h-auto">
                        <ul className="flex flex-col gap-14 text-[var(--color-text)] mt-3 ">
                            <h2 className="font-bold text-2xl text-[var(--color-primary)] text-center xl:text-right">
                                Education - Certificate
                            </h2>
                            {data_education.info.map((item) => (
                                <li
                                    key={item.field_text}
                                    className="flex xl:justify-end gap-5 items-center justify-center text-center"
                                >
                                    <span>{item.field_text}</span>
                                    <span className="hidden xl:block">{item.icon} </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden xl:block col-span-5 xl:col-span-2 w-full h-full">
                        <ImageTag
                            src={data_education.img}
                            alt="logo"
                            className=" w-2/3 h-full rounded-lg overflow-hidden  mx-auto"
                            classImage="!relative object-contain object-top"
                        />
                    </div>
                </div>

                {/* Skills Programming */}
                <div className="grid grid-cols-5 w-full space-x-0 xl:space-x-14 ">
                    <div className="col-span-5 xl:col-span-2 w-full h-full">
                        <ImageTag
                            src={data_skills.img}
                            alt="logo"
                            className="w-2/3 xl:w-full h-full rounded-lg overflow-hidden  mx-auto"
                            classImage="!relative object-contain object-top"
                        />
                    </div>
                    <div className="col-span-5 xl:col-span-3 w-full h-auto">
                        <ul className="flex flex-col gap-14 text-[var(--color-text)] mt-3">
                            <h2 className="font-bold text-2xl text-[var(--color-primary)] text-center xl:text-left">
                                Programming skills
                            </h2>
                            {data_skills.info.map((item) => (
                                <li
                                    key={item.field_text}
                                    className="flex gap-5 items-center justify-center xl:justify-start text-center"
                                >
                                    <span className="hidden xl:block">{item.icon} </span>
                                    <span>{item.field_text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;
