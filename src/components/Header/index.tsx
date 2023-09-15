import css from './index.module.scss'

import logo from '../../assets/logo.svg'
import phone from '../../assets/icons/phone.svg'
import arrow from '../../assets/icons/arrow-down.svg'

import {useState} from 'react'
import { Link, useLocation } from "react-router-dom";  

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Component(){


    const [mobileMenu, setMobileMenu] = useState<boolean>(false)
    const location = useLocation()

    return <>
        <header className={css.header}>
            <div className={css.headerInner}>
                <Link to="/">
                    <img className={css.logo} src={logo} alt="" />
                </Link>
                <ul className={css.menu}>
                    <li className={location.pathname === '/about/' ? css.active : ''}>
                        <Link to='/about/'>About our clinic</Link>&nbsp;
                        <img src={arrow} alt="" />
                        <div className={css.dropdown}>
                            <Link to='/faq/'>
                                <div className={css.dropdownItem}>
                                    FAQ
                                </div>
                            </Link>
                            <Link to='/news/'>
                                <div className={css.dropdownItem}>
                                    News
                                </div>
                            </Link>
                            <Link to='/training/'>
                                <div className={css.dropdownItem}>
                                    Training
                                </div>
                            </Link>
                            <Link to='/before-after/'>
                                <div className={css.dropdownItem}>
                                    Before and after
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className={location.pathname === '/specialists/' ? css.active : ''}>
                        <Link to='/specialists/'><Link to='/specialists/'>Specialists</Link></Link>
                    </li>
                    <li className={location.pathname === '/treatments/' ? css.active : ''}>
                        <Link to='/treatments/'>
                            Treatments&nbsp;
                        </Link>
                        <img src={arrow} alt="" />
                        <div className={css.dropdown}>
                            <Link to='/treatments/1/'>
                                <div className={css.dropdownItem}>
                                    Laser Cosmetology
                                </div>
                            </Link>
                            <Link to='/treatments/1/'>
                                <div className={css.dropdownItem}>
                                    Injection Cosmetology
                                </div>
                            </Link>
                            <Link to='/treatments/1/'>
                                <div className={css.dropdownItem}>
                                    Apparatus Cosmetology
                                </div>
                            </Link>
                            <Link to='/treatments/1/'>
                                <div className={css.dropdownItem}>
                                    Facial Plastic Surgery
                                </div>
                            </Link>
                            <Link to='/treatments/'>
                                <div className={css.dropdownItem}>
                                    More...
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className={location.pathname === '/price/' ? css.active : ''}>
                        <Link to='/price/'>Price</Link>
                    </li>
                    <li className={location.pathname === '/contacts/' ? css.active : ''}>
                        <Link to='/contacts/'>Contacts</Link>
                    </li>
                </ul>
                <div className={css.menuButton} onClick={ () => setMobileMenu(true) }>
                    <GiHamburgerMenu/>
                </div>
                <a href='tel:0942451501' className={css.phone}>
                    <img className={css.phoneIcon} src={phone} alt="phone icon" />
                    <span className={css.phoneText}>
                        0 942 451 501
                    </span>
                </a>
            </div>
        </header>
        {
            mobileMenu &&
            <div className={css.mobileMenu}>
                <div className={css.mobileMenuButtonClose} onClick={ () => setMobileMenu(false) }>
                    <AiOutlineClose/>
                </div>
                <ul className={css.mobileMenuList}>
                    <li className={css.active}>
                        <Link to='/about/'>
                            About our clinic
                        </Link>
                    </li>
                    <li className={css.active}>
                        <Link to='/news/'>
                            News
                        </Link>
                    </li>
                    <li className={css.active}>
                        <Link to='/faq/'>
                            FAQ
                        </Link>
                    </li>
                    <li className={css.active}>
                        <Link to='/about/'>
                            Training
                        </Link>
                    </li>
                    <li className={css.active}>
                        <Link to='/before-after/'>
                            Before and after
                        </Link>
                    </li>
                    <li>
                        <Link to='/specialists/'>
                            Specialists
                        </Link>
                    </li>
                    <li>
                        <Link to='/treatments/'>
                            Treatments
                        </Link>
                    </li>
                    <li>
                        <Link to='/price/'>
                            Price
                        </Link>
                    </li>
                    <li>
                        <Link to='/contacts/'>
                            Contacts
                        </Link>
                    </li>
                </ul>
            </div>
        }
    </>
}