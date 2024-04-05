import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import MouseTracker from '@/components/MouseTracker/MouseTracker';
import HeaderMobile from '@/components/HeaderMobile/HeaderMobile';

export const metadata: Metadata = {
    title: 'HuyDev Portfolio',
    description: 'HuyDev - Fullstack Web Developer',
};

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <MouseTracker>
            <Header />
            <HeaderMobile />
            <main className="container mx-auto md:py-[150px] h-full ">{children}</main>
            {/* <Footer /> */}
        </MouseTracker>
    );
}

export default MainLayout;
