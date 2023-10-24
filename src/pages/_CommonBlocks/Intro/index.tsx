import css from './index.module.scss'

import iconPhone from '../../../assets/components/intro-iconphone.png'
import maskCircle from '../../../assets/components/intro-maskcircle.png'

import Card from '../../../components/Card'
import {useTranslation} from "react-i18next";

interface props
{
    title?: string
    illustration?: string
}

export default function Intro(props: props) {

    const {t} = useTranslation();
    
    return <div className={css.block}>
        <div className={css.container}>
            <div className={css.circle}>
                <img className={css.circleMask} src={maskCircle} alt="mask" />
                <div className={css.circleText}>
                    {props.title}
                </div>
            </div>
            <div className={css.section}>
                <img className={css.sectionIllustration} src={props.illustration}/>
                <Card className={css.sectionContent}>
                    <div className={css.sectionText}>
                        {t("Training_block1_pageSubTitle")}
                    </div>
                    <div className={css.sectionPhone}>
                        <img src={iconPhone} alt="phone icon" />
                        &nbsp;(358) 942-451-501
                    </div>
                </Card>
            </div>
        </div>
    </div>
}