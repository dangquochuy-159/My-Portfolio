'use client';
import { Icon_Facebook, Icon_Location, Icon_Mail, Icon_Phone } from '@/components/Icon/Icon';
import ImageTag from '@/components/ImageTag/ImageTag';
import TitlePage from '@/components/TitlePage/TitlePage';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const refToName = useRef<HTMLInputElement>(null);
    const refToMail = useRef<HTMLInputElement>(null);
    const refPhone = useRef<HTMLInputElement>(null);
    const refMessage = useRef<HTMLTextAreaElement>(null);

    const service_id: string = process.env.NEXT_PUBLIC_SERVICE_ID ?? '';
    const template_id: string = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '';
    const public_key: string = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? '';

    const SendEmail = async () => {
        const templateParams = {
            from_name: process.env.NEXT_PUBLIC_FROM_MAIL,
            mail_to: refToMail.current?.value,
            to_name: refToName.current?.value,
            message: refMessage.current?.value,
        };

        try {
            await emailjs.send(service_id, template_id, templateParams, {
                publicKey: public_key,
            });

            toast('Thank you for contacting me, your information has been sent successfully');
        } catch (err) {
            if (err instanceof EmailJSResponseStatus) {
                console.log('EMAILJS FAILED...', err);
                return;
            }

            console.log('ERROR', err);
        }
    };
    return (
        <div className="py-[var(--height-header)] md:py-0">
            <TitlePage
                title="Contact me to work together"
                des="Thank you for visiting my portfolio page. If you are impressed, you can contact me via the methods below."
            />
            <div className="w-full h-full">
                <ImageTag
                    src="/image/contact.png"
                    alt="logo"
                    className="w-2/3 xl:w-1/3 h-full m-auto md:rounded-md overflow-hidden"
                    classImage=" !relative object-contain"
                />
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 justify-center gap-8 text-[var(--color-primary)] font-extrabold mt-10 pb-24">
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
            <div className="pb-48">
                <div className="flex flex-col gap-y-5 w-1/2">
                    <label className="text-white">Your Name</label>
                    <input ref={refToName} className="border-2 border-solid border-black text-black bg-white" />
                    <label className="text-white">Your Phone</label>
                    <input ref={refPhone} className="border-2 border-solid border-black text-black bg-white" />
                    <label className="text-white">Your Mail</label>
                    <input ref={refToMail} className="border-2 border-solid border-black text-black bg-white" />
                    <label className="text-white">Your Message</label>
                    <textarea ref={refMessage} className="border-2 border-solid border-black text-black bg-white" />
                    <button className="bg-red-500 text-white" onClick={SendEmail}>
                        Submit
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Contact;
