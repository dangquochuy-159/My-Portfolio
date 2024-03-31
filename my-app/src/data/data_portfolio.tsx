import {
    Icon_Cerifications,
    Icon_Date,
    Icon_Facebook,
    Icon_Github,
    Icon_Instagram,
    Icon_LinkedIn,
    Icon_Location,
    Icon_Mail,
    Icon_Major,
    Icon_Phone,
    Icon_School,
    Icon_Skills,
    Icon_User,
} from '@/components/Icon/Icon';

interface IRedirect {
    name?: string;
    href: string;
}

interface IDataHeader {
    logo: string;
    nav: IRedirect[];
}

interface ISocial extends IRedirect {
    icon: React.ReactNode;
}

interface IIntroduce {
    name: string;
    field_work: string;
    intro: string;
    socials: ISocial[];
}

interface IPersonalItem {
    field_text: string;
    icon: React.ReactNode;
}

interface IPersonal {}

interface IProject {
    time: string;
    name: string;
    size: string;
    position: string;
    roles: string[];
    des: string[];
    techs: IRedirect[];
    github: IRedirect[];
    website?: IRedirect;
}

export const DataHeader: IDataHeader = {
    logo: '/image/logo_header.png',
    nav: [
        { name: 'Home', href: '/' },
        { name: 'About me', href: '/about-me' },
        { name: 'Project', href: '/my-project' },
        { name: 'Contact', href: '/contact' },
    ],
};

export const DataIntroduce: IIntroduce = {
    name: 'Dang Quoc Huy',
    field_work: 'Fullstack Web Developer',
    intro: `Welcome to my portfolio! I'm a fullstack web developer, proficient in both front-end and back-end programming. 
            I specialize in creating websites that are modern and optimized for user experience.`,
    socials: [
        {
            name: 'Github',
            href: 'https://github.com/dangquochuy-159',
            icon: <Icon_Github />,
        },
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/quochuy2212',
            icon: <Icon_Facebook />,
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/dqh.2212',
            icon: <Icon_Instagram />,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/quochuy2212',
            icon: <Icon_LinkedIn />,
        },
    ],
};
export const Data_Personal_Info: IPersonalItem[] = [
    { field_text: 'Dang Quoc Huy', icon: <Icon_User /> },
    { field_text: '22/12/2002', icon: <Icon_Date /> },
    { field_text: '(+84) 854395048', icon: <Icon_Phone /> },
    { field_text: 'quochuy22122002@gmail.com', icon: <Icon_Mail /> },
    { field_text: 'Go Vap District, Ho Chi Minh City', icon: <Icon_Location /> },
];

export const Data_Education: IPersonalItem[] = [
    { field_text: 'University of Transport Ho Chi Minh City (10/2020 - now)', icon: <Icon_School /> },
    { field_text: ' Information Technology', icon: <Icon_Major /> },
    { field_text: 'HTML, CSS, JavaScript (F8) ', icon: <Icon_Cerifications /> },
    { field_text: 'React JS (F8)', icon: <Icon_Cerifications /> },
    { field_text: 'English certificate B1 (UTH) ', icon: <Icon_Cerifications /> },
];

export const Data_Skills: IPersonalItem[] = [
    { field_text: 'Javascript, Typescript', icon: <Icon_Skills /> },
    { field_text: 'HTML,CSS, SCSS', icon: <Icon_Skills /> },
    { field_text: 'TailwindCSS, Bootstrap', icon: <Icon_Skills /> },
    { field_text: 'ReactJS, NextJS', icon: <Icon_Skills /> },
    { field_text: 'NodeJS, ExpressJS, Socket.io, RESTful API', icon: <Icon_Skills /> },
    { field_text: 'MongoDB, MySQL', icon: <Icon_Skills /> },
    { field_text: 'Git, Github, Gitlab', icon: <Icon_Skills /> },
];

export const DataProject: IProject[] = [
    {
        time: '10/2023 - 12/2023',
        name: 'E-commerce website (FamilyPet)',
        size: '2',
        position: 'FULLSTACK DEVELOPER',
        roles: ['Design and Programming.', 'Responsive, Optimize website.', 'Database Design.'],
        des: [
            'Website Client-Server',
            'This is an e-commerce website. Helps users more easily reach sellers on the online platform.',
            'Regarding the functionality of the website: there are full functions for buying and selling activities',
            'Users: can log in, register an account, view product information, buy and pay for products, comment and rate products.',
            'Administrator: can manage products, orders, customers, sales statistics, products, orders.',
        ],
        techs: [
            {
                name: 'ReactJS',
                href: 'https://react.dev/',
            },
            {
                name: 'HTML',
                href: 'https://vi.wikipedia.org/wiki/HTML',
            },
            {
                name: 'CSS',
                href: 'https://vi.wikipedia.org/wiki/CSS',
            },
            {
                name: 'SCSS',
                href: 'https://sass-lang.com/documentation/',
            },
            {
                name: 'Tailwind',
                href: 'https://tailwindcss.com/',
            },
            {
                name: 'NodeJS',
                href: 'https://nodejs.org/en',
            },
            {
                name: 'ExpressJS',
                href: 'https://expressjs.com/',
            },
            {
                name: 'MongoDB',
                href: 'https://www.mongodb.com/fr-fr',
            },
            {
                name: 'RESRful API',
                href: 'https://aws.amazon.com/vi/what-is/restful-api/',
            },
        ],
        github: [
            {
                name: 'Github_FamiltPet_Frontend',
                href: 'https://github.com/dangquochuy-159/FamilyPet-Client',
            },
            {
                name: 'Github_FamiltPet_Backend',
                href: 'https://github.com/dangquochuy-159/FamilyPet-Server',
            },
        ],
        website: {
            name: 'FamilyPet',
            href: 'https://familypet.website/',
        },
    },
    {
        time: '04/2023 - 05/2023',
        name: 'E-commerce website (Shoppet)',
        size: '2',
        position: 'FULLSTACK DEVELOPER',
        roles: ['Design and Programming.', 'Responsive, Optimize website.', 'Database Design.'],
        des: [
            'WebSerVer MVC',
            'This is an e-commerce website. Helps users more easily reach sellers on the online platform.',
            'Regarding the functionality of the website: there are full functions for buying and selling activities',
            'Users: can log in, register an account, view product information, buy and pay for products, comment and rate products.',
            'Administrator: can manage products, orders, customers, sales statistics, products, orders.',
        ],
        techs: [
            {
                name: 'HTML',
                href: 'https://vi.wikipedia.org/wiki/HTML',
            },
            {
                name: 'CSS',
                href: 'https://vi.wikipedia.org/wiki/CSS',
            },
            {
                name: 'SCSS',
                href: 'https://sass-lang.com/documentation/',
            },
            {
                name: 'Bootstrap',
                href: 'https://getbootstrap.com/',
            },
            {
                name: 'NodeJS',
                href: 'https://nodejs.org/en',
            },
            {
                name: 'ExpressJS',
                href: 'https://expressjs.com/',
            },
            {
                name: 'MongoDB',
                href: 'https://www.mongodb.com/fr-fr',
            },
            {
                name: 'Handlebarsjs',
                href: 'https://handlebarsjs.com/',
            },
        ],
        github: [
            {
                name: 'Gihub_Shoppet',
                href: 'https://github.com/dangquochuy-159/e-commerce_website_shoppet',
            },
        ],
    },
];
