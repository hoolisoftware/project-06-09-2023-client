import css from './index.module.scss'

import {useEffect, useState} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link, useLocation } from "react-router-dom";  
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

import { RootState } from '@/app/store'
import arrow from '../../assets/icons/arrow-down.svg'
import logo from '../../assets/logo.png'
import phone from '../../assets/icons/phone.svg'
import {useTranslation} from "react-i18next";
import { useServices } from '@/hooks/use-query/services';
import getTranslatedField from '@/utils/getTranslatedField';
import { languages } from '@/config/languages';


export default function Component(){
    const config = useSelector((state: RootState) => state.data.config)

    const {data} = useServices()
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)
    const location = useLocation()

    const {t, i18n} = useTranslation();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        localStorage.setItem("selectedLanguage", language); // Сохраняем выбранный язык в localStorage
    };

    // Загрузка сохраненного языка при монтировании компонента
    useEffect(() => {
        const savedLanguage = localStorage.getItem("selectedLanguage");
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    return <>
        <header className={css.header}>
            <div className={css.headerInner}>
                <Link to="/">
                    <img className={css.logo} src={logo} alt="" />
                </Link>
                <ul className={css.menu}>
                    <li className={location.pathname === '/about/' ? css.active : ''}>
                        <Link to='/about/'>{t("Header_AboutClinik")}</Link>&nbsp;
                        <img src={arrow} alt="" />
                        <div className={css.dropdown}>
                            <Link to='/faq/'>
                                <div className={css.dropdownItem}>
                                    {t("Header_AboutClinik_question")}
                                </div>
                            </Link>
                            <Link to='/news/'>
                                <div className={css.dropdownItem}>
                                    {t("Header_AboutClinik_news")}
                                </div>
                            </Link>
                            <Link to='/training/'>
                                <div className={css.dropdownItem}>
                                    {t("Header_AboutClinik_learning")}
                                </div>
                            </Link>
                            <Link to='/price/'>
                                <div className={css.dropdownItem}>
                                    {t("Header_AboutClinik_price")}
                                </div>
                            </Link>
                            <Link to='/before-after/'>
                                <div className={css.dropdownItem}>
                                    {t("Header_AboutClinik_after")}
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className={location.pathname === '/specialists/' ? css.active : ''}>
                        <Link to='/specialists/'>{t("Header_professionals")}</Link>
                    </li>
                    <li className={location.pathname === '/treatments/' ? css.active : ''}>
                        <Link to='/treatments/'>
                            {t("Header_services")}&nbsp;
                        </Link>
                        <img src={arrow} alt="" />
                        <div className={css.dropdown}>
                            {
                                Array.isArray(data) && data.map(item=>
                                    <a href={`/treatments/${item.id}/`} key={item.id}>
                                        <div className={css.dropdownItem}>
                                            {getTranslatedField(item, 'title', i18n.language)}
                                        </div>
                                    </a>
                                )
                            }
                            <Link to='/training/'>
                                <div className={css.dropdownItem}>
                                    {t("Header_services_learning")}
                                </div>
                            </Link>
                            <Link to='/book/'>
                                <div className={css.dropdownItem}>
                                    {t("Header_services_consultation")}
                                </div>
                            </Link>
                            <Link to='/treatments/'>
                                <div className={css.dropdownItem}>
                                    {t("Header_services_another")}
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className={location.pathname === '/price/' ? css.active : ''}>
                        <Link to='/price/'>{t("Header_price")}</Link>
                    </li>
                    <li className={location.pathname === '/contacts/' ? css.active : ''}>
                        <Link to='/contacts/'>{t("Header_Contacts")}</Link>
                    </li>
                    <li className={location.pathname === '/about/' ? css.active : ''}>
                        <Link to='#'>{t("Header_language")}</Link>&nbsp;
                        <img src={arrow} alt="" />
                        <div className={css.dropdown}>
                            {
                                languages.map(item =>
                                    <Link to='#'>
                                        <div className={css.dropdownItem} onClick={() => changeLanguage(item[0])}>
                                            {item[1]}
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                    </li>
                </ul>
                <div className={css.menuButton} onClick={ () => setMobileMenu(true) }>
                    <GiHamburgerMenu/>
                </div>
                <a href={`tel:${config?.phone_raw}`} className={css.phone}>
                    <img className={css.phoneIcon} src={phone} alt="phone icon" />
                    <span className={css.phoneText}>
                        {config?.phone}
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
                            {t("Header_AboutClinik")}
                        </Link>
                    </li>
                    <li className={css.active}>
                        <Link to='/news/'>
                            {t("Header_AboutClinik_news")}
                        </Link>
                    </li>
                    <li className={css.active}>
                        <Link to='/faq/'>
                            {t("Header_AboutClinik_question")}
                        </Link>
                    </li>
                    <li className={css.active}>
                        <Link to='/about/'>
                            {t("Header_services_learning")}
                        </Link>
                    </li>
                    <li className={css.active}>
                        <Link to='/before-after/'>
                            {t("Header_AboutClinik_after")}
                        </Link>
                    </li>
                    <li>
                        <Link to='/specialists/'>
                            {t("Header_professionals")}
                        </Link>
                    </li>
                    <li>
                        <Link to='/treatments/'>
                            {t("Header_services")}
                        </Link>
                    </li>
                    <li>
                        <Link to='/price/'>
                            {t("Header_price")}
                        </Link>
                    </li>
                    <li>
                        <Link to='/contacts/'>
                            {t("Header_Contacts")}
                        </Link>
                    </li>
                    <hr />
                    {
                        languages.map(item=>
                            <li>
                                <Link to='#' onClick={() => changeLanguage(item[0])}>
                                    {item[1]}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        }
    </>
}