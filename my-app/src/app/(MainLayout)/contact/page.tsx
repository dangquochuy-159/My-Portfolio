import { Icon_Facebook, Icon_Location, Icon_Mail, Icon_Phone } from '@/components/Icon/Icon';
import TitlePage from '@/components/TitlePage/TitlePage';

function Contact() {
    return (
        <>
            <TitlePage
                title="Contact me to work together"
                des="Thank you for visiting my portfolio page. If you are impressed, you can contact me via the methods below."
            />
            <div className="grid grid-cols-1 xl:grid-cols-2 justify-center gap-8 text-[var(--color-primary)] font-extrabold mt-10">
                <div className="col-span-1 flex flex-col gap-4 md:rounded-lg justify-center items-center w-full h-48 bg-[var(--color-box)]">
                    <Icon_Phone className="h-8 w-8" />
                    <a href="tel:0854395048" className="hover:underline">
                        (+84) 854395048
                    </a>
                </div>
                <div className="col-span-1 flex flex-col gap-4 md:rounded-lg justify-center items-center w-full h-48 bg-[var(--color-box)]">
                    <Icon_Mail className="h-8 w-8" />
                    <a href="mailto: quochuy22122002@gmail.com" className="hover:underline">
                        quochuy22122002@gmail.com
                    </a>
                </div>
                <div className="col-span-1 flex flex-col gap-4 md:rounded-lg justify-center items-center w-full h-48 bg-[var(--color-box)]">
                    <Icon_Facebook color="#5febd5" className="h-8 w-8" />
                    <a href="https://www.facebook.com/quochuy2212" target="_blank" className="hover:underline">
                        Đặng Quốc Huy
                    </a>
                </div>
                <div className="col-span-1 flex flex-col gap-4 md:rounded-lg justify-center items-center w-full h-48 bg-[var(--color-box)]">
                    <Icon_Location className="h-8 w-8" />
                    <a href="https://maps.app.goo.gl/n2C8es2rxUv9qkmk8" target="_blank" className="hover:underline">
                        Go Vap District, Ho Chi Minh City
                    </a>
                </div>
            </div>
        </>
    );
}

export default Contact;
