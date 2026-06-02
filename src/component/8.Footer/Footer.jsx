import "./Footer.css";

const Footer = ({footer}) => {
    return (
        <footer className="footer">
             {/* اليسار */}
            <div className="footer-left">
                <h2>Trippy</h2>
                <p>Choose your favourite destination.</p>
            </div>

            <div className="footer-container">
                {/* الأقسام */}
                <div className="footer-links">
                {footer?.map((section, index) => (
                    <div key={index} className="footer-col">
                    <h4>{section.title}</h4>

                    {section.links?.map((link, i) => (
                        <p key={i}>{link}</p>
                    ))}
                    </div>
                ))}
                </div>
        </div>
    </footer>
    );
};

export default Footer;
