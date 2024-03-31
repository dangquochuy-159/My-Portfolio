import BoxInfo from '@/components/BoxInfo/BoxInfo';
import TitlePage from '@/components/TitlePage/TitlePage';
import { Data_Education, Data_Personal_Info, Data_Skills } from '@/data/data_portfolio';

function AbboutMe() {
    const data_personal_info = Data_Personal_Info;
    const data_education = Data_Education;
    const data_skills = Data_Skills;
    return (
        <>
            <TitlePage
                title="Welcome to my portfolio page!"
                des="I'm a fullstack web developer, proficient in both front-end and back-end programming. I specialize in
                    creating websites that are modern and optimized for user experience."
            />
            <section className="mt-20 grid grid-cols-3 gap-10">
                <BoxInfo title_box="Personal Information" data={data_personal_info} />
                <BoxInfo title_box="Education - Certificate" data={data_education} />
                <BoxInfo title_box="Programming skills" data={data_skills} />
            </section>
        </>
    );
}

export default AbboutMe;
