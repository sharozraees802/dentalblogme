import Layout from '../components/layout/Layout';
import Link from 'next/link';
import ContactForm from '../components/form/ContactForm';

const Contact = () => {
    return (
        <Layout>
            <div className="container-fluid">
            <img
                width="1490px"
                height="200px"
                src="../static/images/contact/contact.png"
                alt="Card image"
              />
                <div className="row">
                    <div className="col-md-8 offset-md-2" style={{marginTop: "90px"}}>
                        
                        <h2>Contact Us</h2>
                        <hr />
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
