import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube  } from '@fortawesome/free-brands-svg-icons';
import data from './committees/committees.json';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>Hakkımızda</h6>
                        <p className="text-justify">IEEE Ege Öğrenci Topluluğu, 10 Aralık 2010 tarihinde Ege Üniversitesi Elektrik-Elektronik Bölümü bünyesinde kurulmuştur. Global Student Branch kurulumu bulunduğundan uluslararası düzeyde resmiyet kazanmıştır. IEEE Ege, bünyesinde bulunan 8 komite sayesinde havacılık, telekomünikasyon, yazılım, güç ve enerji, biyoteknoloji, robotik gibi bir çok mühendislik alanını kapsar ve bu alanlarda etkinlikler, konferanslar, teknik çalışmalar düzenler. Bu komiteler sırasıyla; Aerospace & Electronic Systems Society, Communications Society, Computer Society, Educational Activities, Engineering in Medicine & Biology Society, Power & Energy Society, Robotics & Automation Society ve Women in Engineering Affinity Group’dur.</p>
                    </div>

                    <div className="col-xs-6 col-md-3  committees">
                        <h6>Komitelerimiz</h6>
                        <ul className="footer-links">
                            {Object.entries(data).map(([key, value]) =>
                                value.shortname ? (
                                <li key={key}>
                                    <a
                                        title={value.shortname}
                                        href={`/${key}`}
                                        style={{ display: "block" }}
                                    >
                                        {value.shortname}
                                    </a>
                                </li>
                                ) : null
                            )}
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Navigasyon</h6>
                        <ul className="footer-links">
                            <li><a href="/#">Anasayfa</a></li>
                            <li><a href="/ekibimiz">Ekibimiz</a></li>
                            <li><a href="/#etkinliklerimiz">Etkinliklerimiz</a></li>
                            
                            <li><a href="/#about-us">Hakkımızda</a></li>
                            <li><a href="/#komitelerimiz">Komitelerimiz</a></li>
                            
                            
                            <li><a href="/developers">Geliştirici Ekibimiz</a></li>
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
                                <a className="facebook" href="https://www.facebook.com/IEEEegesb/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                            </li>
                            <li>
                                <a className="twitter" href="https://twitter.com/ieeeegesb" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                            </li>
                            <li>
                                <a className="linkedin" href="https://www.linkedin.com/company/ieee-ege-student-branch/mycompany/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </li>
                            <li>
                                <a className="instagram" href="https://www.instagram.com/ieeeegesb/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                            </li>
                            <li>
                                <a className="youtube" href="https://www.youtube.com/channel/UC7xZXbbjVN89xlnHWe-AJVQ" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                            </li>
                        
                        </ul>
                    </div>
                    
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;
