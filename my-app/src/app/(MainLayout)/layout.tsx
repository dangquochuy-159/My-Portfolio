import Header from '@/components/Header/Header';
import MouseTracker from '@/components/MouseTracker/MouseTracker';
import Footer from '@/components/Footer/Footer';

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <MouseTracker>
            <Header />
            {children}
            <Footer />
        </MouseTracker>
    );
}

export default MainLayout;
