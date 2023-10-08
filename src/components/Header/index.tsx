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
                            <Link to='/price/'>
                                <div className={css.dropdownItem}>
                                    Прайс-лист
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
                        <Link to='/specialists/'>Специалисты</Link>
                    </li>
                    <li className={location.pathname === '/treatments/' ? css.active : ''}>
                        <Link to='/treatments/'>
                            Услуги&nbsp;
                        </Link>
                        <img src={arrow} alt="" />
                        <div className={css.dropdown}>
                            {
                                Array.isArray(data) && data.map(item=>
                                    <Link to={`/treatments/${item.id}/`} key={item.id}>
                                        <div className={css.dropdownItem}>
                                            {item.title}
                                        </div>
                                    </Link>
                                )
                            }
                            <Link to='/training/'>
                                <div className={css.dropdownItem}>
                                    Обучение
                                </div>
                            </Link>
                            <Link to='/book/'>
                                <div className={css.dropdownItem}>
                                    Консультация со специалистом
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