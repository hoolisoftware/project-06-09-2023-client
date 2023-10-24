import css from './index.module.scss'

import Heading from '../../../components/Heading'
import {useTranslation} from "react-i18next";


export default function Block() {
    const {t} = useTranslation();
    
    return <div className={css.container}>
        <div className={css.heading}>
            <Heading center>{t("Contacts_block1_title")}</Heading>
        </div>
        <iframe
            className={css.map}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3969.338160814978!2d24.943591!3d60.169657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bcc2768e851%3A0x242006f7a188c6e5!2sClinic%20Estetic!5e0!3m2!1sen!2sus!4v1695213271909!5m2!1sen!2sus"
            style={{ border: 0 }}
            allowFullScreen={undefined}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
}