import Header from '@/components/Header/Header';
import MouseTracker from '@/components/MouseTracker/MouseTracker';
import Footer from '@/components/Footer/Footer';
import HeaderMobile from '@/components/HeaderMobile/HeaderMobile';

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
