import css from './index.module.scss'

import illustration1 from '../../../assets/components/home-block5-illustration1.png'
import illustration2 from '../../../assets/components/home-block5-illustration2.jpg'
import illustration3 from '../../../assets/components/home-block5-illustration3.jpg'
import illustration4 from '../../../assets/components/home-block5-illustration4.png'

import bgLayer1 from '../../../assets/components/home-block5-bglayer1.png'
import bgLayer2 from '../../../assets/components/home-block5-bglayer2.png'

import Heading from '../../../components/Heading'
import {useTranslation} from "react-i18next";


export default function Block(){
    const {t} = useTranslation();
    
    return <div className={css.block}>
        <img className={css.bgLayer2} src={bgLayer2} alt="bgLayer2" />
        <img className={css.bgLayer1} src={bgLayer1} alt="bgLayer1" />
        <div className={css.container}>
            <Heading center>
                <div className={css.heading}>{t("Home_block5_title")}</div>
            </Heading>
            <div className={css.cards}>
                <div className={css.card}>
                    <img className={css.cardImage} src={illustration1} alt='illustration1'/>
                    <div className={css.cardHeading}>{t("Home_block5_card1_subtitle")}</div>
                    <div className={css.cardContent}>
                        {t("Home_block5_card1_text")}
                    </div>
                </div>
                <div className={css.card}>
                    <img className={css.cardImage} src={illustration2} alt='illustration2'/>
                    <div className={css.cardHeading}>{t("Home_block5_card2_subtitle")}</div>
                    <div className={css.cardContent}>
                        {t("Home_block5_card2_text")}
                    </div>
                </div>
                <div className={css.card}>
                    <img className={css.cardImage} src={illustration3} alt='illustration3'/>
                    <div className={css.cardHeading}>{t("Home_block5_card3_subtitle")}</div>
                    <div className={css.cardContent}>
                        {t("Home_block5_card3_text")}
                    </div>
                </div>
                <div className={css.card}>
                    <img className={css.cardImage} src={illustration4} alt='illustration4'/>
                    <div className={css.cardHeading}>{t("Home_block5_card4_subtitle")}</div>
                    <div className={css.cardContent}>
                        {t("Home_block5_card4_text")}
                    </div>
                </div>
            </div>
        </div>
    </div>
}