import css from './index.module.scss'

import logo from '../../assets/logo.svg'

import iconFacebook from '../../assets/components/footer-icon-facebook.png'
import iconYoutube from '../../assets/components/footer-icon-youtube.png'
import iconLocation from '../../assets/components/footer-icon-location.png'
import iconPhone from '../../assets/components/footer-icon-phone.png'
import iconMail from '../../assets/components/footer-icon-mail.png'


export default function Component(){
    return <div className={css.footer}>
        <div className={css.footerContainer}>
            <div className={css.section1}>
                <div className={css.section1SectionLogo}>
                    <img className={css.logo} src={logo} alt="" />
                    <div className={css.section1Media}>
                        <a href="https://facebook.com">
                            <img src={iconFacebook} alt="icon" className={css.icon} />
                        </a>
                        <a href="https://youtube.com">
                            <img src={iconYoutube} alt="icon" className={css.icon} />
                        </a>
                    </div>
                </div>
                <div className={css.section1SectionContacts}>
                    <div className={css.contactItem}>
                        <img src={iconLocation} alt="icon" className={css.icon} />
                        Aleksanterinkatu 15b 2 krs
                    </div>
                    <a href='tel:0942451501' className={css.contactItem}>
                        <img src={iconPhone} alt="icon" className={css.icon} />
                        +358 942 451 501
                    </a>
                    <a href='mailto:info@clinicestetic.fi' className={css.contactItem}>
                        <img src={iconMail} alt="icon" className={css.icon} />
                        info@clinicestetic.fi
                    </a>
                </div>
            </div>
        </div>
        <div className={css.section2}>
            © 2017 Clinicestetic. Все права защищены 
        </div>
    </div>
}