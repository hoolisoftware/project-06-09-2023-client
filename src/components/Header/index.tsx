import css from './index.module.scss'

import { API_URL } from '@/config'
import axios from 'axios'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useQuery } from 'react-query'
import { Link, useLocation } from "react-router-dom";  
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

import { RootState } from '@/app/store'
import arrow from '../../assets/icons/arrow-down.svg'
import logo from '../../assets/logo.png'
import phone from '../../assets/icons/phone.svg'
import { setTreatments } from '@/features/data/dataReducer'
import {useTranslation} from "react-i18next";


export default function Component(){
    const dispatch = useDispatch()
    const config = useSelector((state: RootState) => state.data.config)
    const {data} = useQuery('services', {
        queryFn: async () => {
            const {data} = await axios.get(`${API_URL}services/services/`)
            dispatch(setTreatments(data))
            return data
        },
        onError: (error) => {
            window.alert(error)
        }
    })

    const [mobileMenu, setMobileMenu] = useState<boolean>(false)
    const location = useLocation()

    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

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
                                            {item.title}
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
                        <Link>{t("Header_language")}</Link>&nbsp;
                        <img src={arrow} alt="" />
                        <div className={css.dropdown}>
                            <Link>
                                <div className={css.dropdownItem} onClick={() => changeLanguage("en")}>
                                    English
                                </div>
                            </Link>
                            <Link>
                                <div className={css.dropdownItem} onClick={() => changeLanguage("ru")}>
                                    Русский
                                </div>
                            </Link>
                            <Link>
                                <div className={css.dropdownItem} onClick={() => changeLanguage("fin")}>
                                    Suomalainen
                                </div>
                            </Link>
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
                </ul>
            </div>
        }
    </>
}