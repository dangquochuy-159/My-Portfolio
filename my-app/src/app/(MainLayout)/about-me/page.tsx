import BoxAbout from '@/components/BoxAbout/BoxAbout';
import BoxImage from '@/components/BoxAbout/BoxImage';
import BoxInfo from '@/components/BoxAbout/BoxInfo';
import TitlePage from '@/components/TitlePage/TitlePage';
import { Data_Education, Data_Personal_Info, Data_Skills } from '@/data/data_portfolio';

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

                <BoxAbout>
                    <BoxImage img={data_personal_info.img} />
                    <BoxInfo title="Personal Information" info={data_personal_info.info} />
                </BoxAbout>

                {/* Education */}

                <BoxAbout>
                    <BoxImage img={data_education.img} className="block xl:hidden" />
                    <BoxInfo title="Personal Information" info={data_education.info} imgRight={true} />
                    <BoxImage img={data_education.img} className="hidden xl:block " />
                </BoxAbout>

                {/* Skills Programming */}
                <BoxAbout>
                    <BoxImage img={data_skills.img} />
                    <BoxInfo title="Personal Information" info={data_skills.info} />
                </BoxAbout>
            </section>
        </div>
    );
}

export default AboutMe;
