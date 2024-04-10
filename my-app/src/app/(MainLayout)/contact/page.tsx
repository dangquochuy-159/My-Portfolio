'use client';
import { Icon_Facebook, Icon_Location, Icon_Mail, Icon_Phone, Icon_Send } from '@/components/Icon/Icon';
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
    const refLoading = useRef<HTMLDivElement>(null);

    const service_id: string = process.env.NEXT_PUBLIC_SERVICE_ID ?? '';
    const template_id: string = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '';
    const public_key: string = process.env.NEXT_PUBLIC_PUBLIC_KEY ?? '';

    const SendEmail = async () => {
        let name_input = refToName.current?.value;
        let phone_input = refPhone.current?.value;
        let mail_input = refToMail.current?.value;
        let message_input = refMessage.current?.value;

        const element = refLoading.current;
        if (!!name_input && !!phone_input && !!mail_input) {
            if (element) element.style.display = 'block';

            const templateParams = {
                from_name: process.env.NEXT_PUBLIC_FROM_MAIL,
                mail_to: mail_input,
                to_name: name_input,
                message: message_input ?? '',
            };

            try {
                await emailjs.send(service_id, template_id, templateParams, {
                    publicKey: public_key,
                });
                if (element) element.style.display = 'none';
                toast('Thank you for contacting me, your information has been sent successfully');
                if (refToName.current && refPhone.current && refToMail.current && refMessage.current) {
                    refToName.current.value = '';
                    refPhone.current.value = '';
                    refToMail.current.value = '';
                    refMessage.current.value = '';
                }
            } catch (err) {
                if (err instanceof EmailJSResponseStatus) {
                    console.log('EMAILJS FAILED...', err);
                    return;
                }
                console.log('ERROR', err);
            }
        }
    };
    return (
        <div className="py-[var(--height-header)] md:py-0">
            <TitlePage
                title="Contact me to work together"
                des="Thank you for visiting my portfolio page. If you are impressed, you can contact me via the methods below."
            />
            <div className="w-full">
                <ImageTag
                    src="/image/contact.png"
                    alt="logo"
                    className="w-full xl:w-1/3 m-auto md:rounded-md overflow-hidden"
                    classImage=" !relative object-contain"
                />
            </div>
            <div className="grid grid-cols-2 gap-x-10">
                <div className="col-span-1 space-y-5 text-[var(--color-primary)] pb-24">
                    <h2 className="text-white text-4xl font-extrabold">Contact Info</h2>
                    <div className="flex gap-x-4 md:rounded-lg items-center w-full h-16">
                        <span className="w-1/12">
                            <Icon_Phone className="h-8 w-8" />
                        </span>
                        <span>Phone:</span>
                        <a href="tel:0854395048" className="hover:underline">
                            (+84) 854395048
                        </a>
                    </div>
                    <div className="flex gap-x-4 md:rounded-lg items-center w-full h-16">
                        <span className="w-1/12">
                            <Icon_Mail className="h-8 w-8" />
                        </span>
                        <span>Email:</span>
                        <a href="mailto: quochuy22122002@gmail.com" className="hover:underline">
                            quochuy22122002@gmail.com
                        </a>
                    </div>
                    <div className="flex gap-x-4 md:rounded-lg items-center w-full h-16">
                        <span className="w-1/12">
                            <Icon_Facebook color="#5febd5" className="h-10 w-10" />
                        </span>
                        <span>Facebook:</span>
                        <a href="https://www.facebook.com/quochuy2212" target="_blank" className="hover:underline">
                            Đặng Quốc Huy
                        </a>
                    </div>
                    <div className="flex gap-x-4 md:rounded-lg items-center w-full h-16">
                        <span className="w-1/12">
                            <Icon_Location className="h-10 w-10" />
                        </span>
                        <span>Address:</span>
                        <a href="https://maps.app.goo.gl/n2C8es2rxUv9qkmk8" target="_blank" className="hover:underline">
                            Go Vap District, Ho Chi Minh City
                        </a>
                    </div>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="col-span-1 flex flex-col gap-y-5">
                    <h2 className="text-white text-4xl font-extrabold">Contact Form</h2>
                    <div className="flex flex-col gap-y-2 ">
                        <label className="text-white font-semibold">Name</label>
                        <input
                            ref={refToName}
                            className="h-12 px-2 outline-none border-2 border-solid border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-box)] rounded-md"
                            required={true}
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 ">
                        <label className="text-white font-semibold">Phone</label>
                        <input
                            ref={refPhone}
                            className="h-12 px-2 outline-none border-2 border-solid border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-box)] rounded-md"
                            required={true}
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 ">
                        <label className="text-white font-semibold">Email</label>
                        <input
                            ref={refToMail}
                            className="h-12 px-2 outline-none border-2 border-solid border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-box)] rounded-md"
                            required={true}
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label className="text-white">Message</label>
                        <textarea
                            ref={refMessage}
                            className="h-48 p-2 outline-none border-2 border-solid border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-box)] rounded-md"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-y-2">
                        <button
                            onClick={SendEmail}
                            className="flex items-center justify-center gap-x-2 w-1/4 m-auto bg-red-500 text-white h-10 rounded-md font-semibold hover:bg-red-400"
                        >
                            <span>Send</span>
                            <span>
                                <Icon_Send className="h-4 w-4" color="#ffffff" />
                            </span>
                        </button>
                        <div ref={refLoading} className=" hidden">
                            <div className=" lds-dual-ring text-center text-white"></div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Contact;
