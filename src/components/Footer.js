import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter  } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">IEEE Ege topluluğu 2010 yılında kuruldu. CS, RAS, WIE komiteleri kurulduktan sonra faaliyetlerine başlayan topluluk, 2016-2017 döneminin başında enerji sektörü ile bağlantılarını güçlendirmek adına PES’i kurdu. 2017-2018 döneminin başında birçok alanda eğitim vermek üzere EdSoc’u kurdu. 2018-2019 döneminde bünyesine iki yeni komite daha ekledi. Bunlar; AESS ve EMBS. 2021 yılında da girişimcilik mühendisliği üzerine etkinlikler yapan ENET komitemiz kurulmuştur. IEEE Ege olarak teknik, pratik eğitimler, konferanslar, paneller, zirveler düzenliyoruz. Ege Üniversitesi’ne, İzmir’e, Ege Bölgesi’ne ve ülkeye değer katmak için geleceğin adayları gençler olarak daima çalışıyoruz.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><a href="#">C</a></li>
                            <li><a href="#">UI Design</a></li>
                            <li><a href="#">PHP</a></li>
                            <li><a href="#">Java</a></li>
                            <li><a href="#">Android</a></li>
                            <li><a href="#">Templates</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Contribute</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2022 IEEE Ege University Student Branch</p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">  
                            <li>
                                <a className="facebook" href="https://www.facebook.com/IEEEegesb/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                            </li>
                            <li>
                                <a className="twitter" href="https://twitter.com/ieeeegesb" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                            </li>
                            <li>
                                <a className="linkedin" href="https://www.linkedin.com/company/ieee-ege-student-branch/mycompany/" target="_blank" ><FontAwesomeIcon icon={faLinkedin} /></a>
                            </li>
                            <li>
                                <a className="instagram" href="https://www.instagram.com/ieeeegesb/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;