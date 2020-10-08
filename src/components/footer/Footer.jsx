import React from 'react'

const Footer = (props) => {
    return (
        <footer>
            <div className="container">
                <div className="footer-wrapper">
                    <div>
                        <img src="https://i.ibb.co/4Tv9DxG/logo-footer.png" alt="footer-logo" />
                    </div>
                    <div >
                        426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург») <br />
                        <a href="tel:+7 (3412) 93-88-61" className="footer-tel">+7 (3412) 93-88-61</a> <a href="tel:43-29-29" className="footer-tel">, 43-29-29</a> <br /><br />
                        <a href="https://htc-cs.ru" className="site-link">htc-cs.ru</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;