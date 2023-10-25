import css from './index.module.scss'

import { Link } from 'react-router-dom'

import buttonArrow from '@/assets/components/button-arrow.svg'
import Heading from '@/components/Heading'
import Container from '@/components/Container'

import TrainingImage from '@/assets/components/treatments-treatment7.png'
import BookImage from '@/assets/components/treatments-treatment8.png'
import {useTranslation} from "react-i18next";
import { useServices } from '@/hooks/use-query/services'
import getTranslatedField from '@/utils/getTranslatedField'


interface props
{
    showPoints?: boolean
}


export default function Block(props: props) {
    const {t, i18n} = useTranslation();
    const {data} = useServices()

    return <Container>
        <div className={css.heading}>
            <div className={css.heading}>
                <Heading center>
                    {t("home_block2_title")}
                </Heading>
            </div>
            <div className={css.treatments}>
                {
                    Array.isArray(data) && data.map(item=>
                        <div className={css.treatment} key={item.id}>
                            <div className={css.treatmentImageContainer}>
                                <img className={css.treatmentImage} src={item.image} alt="treatmentImage" />
                                <Link to={`/treatments/${item.id}/`} className={css.treatmentLink}>
                                    <img src={buttonArrow} alt="arrow" />
                                </Link>
                            </div>
                            <div className={css.treatmentContent}>
                                <div className={css.treatmentName}>{getTranslatedField(item, 'title', i18n.language)}</div>
                                {
                                    props.showPoints && item.prices?.slice(0, 10)?.map((price, index) =>
                                        <div className={css.treatmentPoint} key={index}>{getTranslatedField(price, 'title', i18n.language) }</div>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
                <div className={css.treatment}>
                    <div className={css.treatmentImageContainer}>
                        <img className={css.treatmentImage} src={TrainingImage} alt="treatmentImage" />
                        <Link to={'/training/'} className={css.treatmentLink}>
                            <img src={buttonArrow} alt="arrow" />
                        </Link>
                    </div>
                    <div className={css.treatmentContent}>
                        <div className={css.treatmentName}>{t("home_block2_servicesList1")}</div>
                    </div>
                </div>
                <div className={css.treatment}>
                    <div className={css.treatmentImageContainer}>
                        <img className={css.treatmentImage} src={BookImage} alt="treatmentImage" />
                        <Link to={'/book/'} className={css.treatmentLink}>
                            <img src={buttonArrow} alt="arrow" />
                        </Link>
                    </div>
                    <div className={css.treatmentContent}>
                        <div className={css.treatmentName}>{t("home_block2_servicesList2")}</div>
                    </div>
                </div>
            </div>
        </div>
    </Container> 
}