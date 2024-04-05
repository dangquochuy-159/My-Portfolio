export interface IRedirect {
    name?: string;
    href: string;
    icon_name?: string;
    icon?: React.ReactNode;
}

export interface IDataHeader {
    logo: string;
    nav: IRedirect[];
}

export interface IIntroduce {
    name: string;
    field_work: string;
    intro: string;
    socials: IRedirect[];
}

export interface IPersonalInfo {
    field_text: string;
    icon: React.ReactNode;
}

export interface IPersonalList {
    img: string;
    info?: IPersonalInfo[];
}

export interface IProject {
    img: string;
    time: string;
    name: string;
    size: string;
    position: string;
    des: string[];
    techs: IRedirect[];
    github?: IRedirect[];
    website?: IRedirect;
}
