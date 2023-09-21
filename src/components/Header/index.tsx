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
                        <Link to='/about/'>О клинике</Link>&nbsp;
                        <img src={arrow} alt="" />
                        <div className={css.dropdown}>
                            <Link to='/faq/'>
                                <div className={css.dropdownItem}>
                                    Вопрос-ответ
                                </div>
                            </Link>
                            <Link to='/news/'>
                                <div className={css.dropdownItem}>
                                    Новости
                                </div>
                            </Link>
                            <Link to='/training/'>
                                <div className={css.dropdownItem}>
                                    Обучение
                                </div>
                            </Link>
                            <Link to='/before-after/'>
                                <div className={css.dropdownItem}>
                                    До-после
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className={location.pathname === '/specialists/' ? css.active : ''}>
                        <Link to='/specialists/'><Link to='/specialists/'>Специалисты</Link></Link>
                    </li>
                    <li className={location.pathname === '/treatments/' ? css.active : ''}>
                        <Link to='/treatments/'>
                            Услуги&nbsp;
                        </Link>
                        <img src={arrow} alt="" />
                        <div className={css.dropdown}>
                            <Link to='/treatments/1/'>
                                <div className={css.dropdownItem}>
                                    Лазерная косметология
                                </div>
                            </Link>
                            <Link to='/treatments/2/'>
                                <div className={css.dropdownItem}>
                                    Инъекционная косметология
                                </div>
                            </Link>
                            <Link to='/treatments/3/'>
                                <div className={css.dropdownItem}>
                                    Аппаратная косметология
                                </div>
                            </Link>
                            <Link to='/treatments/4/'>
                                <div className={css.dropdownItem}>
                                    Пластическая хиррургия лица
                                </div>
                            </Link>
                            <Link to='/treatments/'>
                                <div className={css.dropdownItem}>
                                    Другое...
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className={location.pathname === '/price/' ? css.active : ''}>
                        <Link to='/price/'>Стоимость</Link>
                    </li>
                    <li className={location.pathname === '/contacts/' ? css.active : ''}>
                        <Link to='/contacts/'>Контакты</Link>
                    </li>
                </ul>
                <div className={css.menuButton} onClick={ () => setMobileMenu(true) }>
                    <GiHamburgerMenu/>
                </div>
                <a href='tel:+358942451501' className={css.phone}>
                    <img className={css.phoneIcon} src={phone} alt="phone icon" />
                    <span className={css.phoneText}>
                        +358 942 451 501
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
                            О клинике
                        </Link>
                    </li>
                    <li className={css.active}>
                        <Link to='/news/'>
                            Новости
                        </Link>
                    </li>
                    <li className={css.active}>
                        <Link to='/faq/'>
                            Вопрос-ответ
                        </Link>
                    </li>
                    <li className={css.active}>
                        <Link to='/about/'>
                            Обучение
                        </Link>
                    </li>
                    <li className={css.active}>
                        <Link to='/before-after/'>
                            До-после
                        </Link>
                    </li>
                    <li>
                        <Link to='/specialists/'>
                            Специалисты
                        </Link>
                    </li>
                    <li>
                        <Link to='/treatments/'>
                            Услуги
                        </Link>
                    </li>
                    <li>
                        <Link to='/price/'>
                            Стоимость
                        </Link>
                    </li>
                    <li>
                        <Link to='/contacts/'>
                            Контакты
                        </Link>
                    </li>
                </ul>
            </div>
        }
    </>
}