import Header from '../Header';
import Uheader from '../Uheader/Uheader';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Uheader />
            <Header />
           {children}
            <Footer />
            </div>
    );
};

export default Layout;
