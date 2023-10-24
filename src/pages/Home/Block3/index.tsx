import css from './index.module.scss'

import bgLayer1 from '../../../assets/components/home-block3-bglayer1.png'
import bgLayer2 from '../../../assets/components/home-block3-bglayer2.png'
import bgLayer3 from '../../../assets/components/home-block3-bglayer3.png'
import bgLayer4 from '../../../assets/components/home-block3-bglayer4.png'
import circleMask from '../../../assets/components/home-block3-circlemask.png'

import {useDispatch} from 'react-redux'
import { toggleModalMessage } from '../../../features/modal/modalReducer'

import Button from '../../../components/Button'
import {useTranslation} from "react-i18next";


export default function Block(){
    const dispatch = useDispatch()
    const {t} = useTranslation();
    

    return <div className={css.block}>
        <img className={[css.bgLayer, css.bgLayer4].join(' ')} src={bgLayer4} alt="bgLayer" />
        <img className={[css.bgLayer, css.bgLayer3].join(' ')} src={bgLayer3} alt="bgLayer" />
        <img className={[css.bgLayer, css.bgLayer2].join(' ')} src={bgLayer2} alt="bgLayer" />
        <img className={[css.bgLayer, css.bgLayer1].join(' ')} src={bgLayer1} alt="bgLayer" />
        <div className={css.container}>
            <div className={css.circle}>
                <div className={css.circleContent}>
                    <img className={css.circleMask} src={circleMask} alt="circleMask" />
                    <div className={css.circleTitle}>{t("home_block3_title")}</div>
                    <div className={css.circleDescription}>{t("Home_block3_subTitle1")} <br />{t("Home_block3_subTitle2")}</div>
                    <Button className={css.circleButton} onClick={ () => dispatch(toggleModalMessage()) }>{t("Home_block3_button")}</Button>
                </div>
            </div>
        </div>
    </div>
}