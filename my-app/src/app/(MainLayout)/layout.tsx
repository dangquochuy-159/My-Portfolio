import Header from '@/components/Header/Header';
import MouseTracker from '@/components/MouseTracker/MouseTracker';
import Footer from '@/components/Footer/Footer';

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <MouseTracker>
            <Header />
            <main className="container mx-auto py-[150px] h-full ">{children}</main>
            {/* <Footer /> */}
        </MouseTracker>
    );
}

export default MainLayout;
