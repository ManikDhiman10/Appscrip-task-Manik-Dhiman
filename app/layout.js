import './globals.css'; // This is your global CSS file
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
    title: 'E-Commerce',
    description: 'The best e-commerce store',
};

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default Layout;
