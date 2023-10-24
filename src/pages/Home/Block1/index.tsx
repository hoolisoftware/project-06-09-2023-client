import css from './index.module.scss'

import { Link } from 'react-router-dom'

import circle from '../../../assets/components/home-block1-circle.svg'
import bgLayer1 from '../../../assets/components/home-block1-bglayer1.png'
import bgLayer2 from '../../../assets/components/home-block1-bglayer2.png'
import bgLayer3 from '../../../assets/components/home-block1-bglayer3.png'
import {useTranslation} from "react-i18next";

export default function Block(){
    const {t} = useTranslation();
    

    return <div className={css.container}>
        <img className={css.bgLayer1} src={bgLayer1} alt="bgLayer1" />
        <img className={css.bgLayer2} src={bgLayer2} alt="bgLayer2" />
        <img className={css.bgLayer3} src={bgLayer3} alt="bgLayer3" />
        <div className={css.circle}>
            <img className={css.circleBg} src={circle} alt="circle" />
            <div className={css.circleContent}>
                <div className={css.circleContentHeading}>{t("Home_block1_title")}</div>
                <div className={css.circleContentDescription}>{t("Home_block1_subTitle1")}<br /> {t("Home_block1_subTitle2")}</div>
                <Link to='/book/' className={css.button}>{t("Home_block1_button")}</Link>
            </div>
        </div>
    </div>
}