import { Data_Education, Data_Personal_Info, Data_Skills } from '@/data/data_portfolio';

function AbboutMe() {
    const data_personal_info = Data_Personal_Info;
    const data_education = Data_Education;
    const data_skills = Data_Skills;
    return (
        <>
            <section className=" text-center">
                <h1 className="text-white text-4xl italic ">Welcome to my portfolio page!</h1>
                <p className="text-[var(--color-text)] leading-7 my-5">
                    {`I'm a fullstack web developer, proficient in both front-end and back-end programming. I specialize in
                    creating websites that are modern and optimized for user experience.`}
                </p>
            </section>
            <section className="mt-20 grid grid-cols-3 gap-10">
                <div className="col-span-1 p-4 rounded-xl bg-[var(--color-box)]">
                    <h2 className="font-bold text-white text-center">Personal Information</h2>
                    <ul className="flex flex-col gap-5 text-[var(--color-text)] mt-3">
                        {data_personal_info.map((item) => (
                            <li key={item.field_text} className="flex gap-5 items-center">
                                {item.icon}
                                <span>{item.field_text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-1 p-4 rounded-xl bg-[var(--color-box)]">
                    <h2 className="font-bold text-white  text-center">Education - Certificate</h2>
                    <ul className="flex flex-col gap-5 text-[var(--color-text)] mt-3">
                        {data_education.map((item) => (
                            <li key={item.field_text} className="flex gap-5 items-center">
                                {item.icon}
                                <span>{item.field_text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-1 p-4 rounded-xl bg-[var(--color-box)]">
                    <h2 className="font-bold text-white  text-center">Programming skills</h2>
                    <ul className="flex flex-col gap-5 text-[var(--color-text)] mt-3">
                        {data_skills.map((item) => (
                            <li key={item.field_text} className="flex gap-5 items-center">
                                {item.icon}
                                <span>{item.field_text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default AbboutMe;
