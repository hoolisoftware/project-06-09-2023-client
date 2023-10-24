import { API_URL } from '@/config'
import axios from 'axios'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useQuery } from 'react-query'

import { RootState } from '@/app/store'
import css from './index.module.scss'
import logo from '../../assets/logo.svg'
import iconLocation from '../../assets/components/footer-icon-location.png'
import iconPhone from '../../assets/components/footer-icon-phone.png'
import iconMail from '../../assets/components/footer-icon-mail.png'
import {useTranslation} from "react-i18next";


export default function Component(){
    const config = useSelector((state: RootState) => state.data.config)
    const {data} = useQuery('media', {
        queryFn: async () => {
            const {data} = await axios.get(`${API_URL}clinic/media/`)
            return data
        }
    })
    const {t} = useTranslation();
    

    return <div className={css.footer}>
        <div className={css.footerContainer}>
            <div className={css.section1}>
                <div className={css.section1SectionLogo}>
                    <img className={css.logo} src={logo} />
                    <div className={css.section1Media}>
                        {
                            Array.isArray(data) && data.map((item, index) =>
                                <a href={item.link} key={index}>
                                    <img src={item.icon} alt={item.name} className={css.icon} />
                                </a>
                            )
                        }
                    </div>
                </div>
                <div className={css.section1SectionContacts}>
                    <div className={css.contactItem}>
                        <img src={iconLocation} alt="icon" className={css.icon} />
                        {config?.address}
                    </div>
                    <a href={`tel:${config?.phone_raw}`} className={css.contactItem}>
                        <img src={iconPhone} alt="icon" className={css.icon} />
                        {config?.phone}
                    </a>
                    <a href={`mailto:${config?.email}`} className={css.contactItem}>
                        <img src={iconMail} alt="icon" className={css.icon} />
                        {config?.email}
                    </a>
                </div>
            </div>
        </div>
        <div className={css.section2}>
            {t("Footer_rights")}
        </div>
    </div>
}