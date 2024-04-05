import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'HuyDev Portfolio - CV - Fullstack Web Developer',
};

function MainLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

export default MainLayout;
