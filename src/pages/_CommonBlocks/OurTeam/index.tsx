import {useTranslation} from "react-i18next";
import Markdown from 'react-markdown'

import css from './index.module.scss'
import bgLayer from '@/assets/components/ourteam-bglayer1.png'

import { useSpecialists } from '@/hooks/use-query/specialists'
import getTranslatedField from '@/utils/getTranslatedField'
import Heading from '@/components/Heading'
import Container from '@/components/Container'
import Card from '@/components/Card'


export default function Block() {
    const {data} = useSpecialists()

    const {t, i18n} = useTranslation();

    return (
        <div className={css.block}>
            <img className={css.bgLayer} src={bgLayer} alt="" />
            <Container>
                <div className={css.heading}>
                    <Heading center>{t("professionals_title1")}</Heading>
                </div>
                <div className={css.cards}>
                    {
                        Array.isArray(data) && data.map(item =>
                            <Card className={css.card} key={item.id}>
                                <div className={css.cardInner}>
                                    <img className={css.cardImage} src={item.photo}/>
                                    <div className={css.cardName}>{getTranslatedField(item, 'full_name', i18n.language)}</div>
                                    <div className={css.cardPosition}>
                                        { getTranslatedField(item, 'position', i18n.language) }
                                    </div>
                                </div>
                                <div className={css.cardHr}></div>
                                <div className={css.cardInner}>
                                    <div className={css.cardContent}>
                                        <Markdown>
                                            { getTranslatedField(item, 'about', i18n.language) }
                                        </Markdown>
                                    </div>
                                </div>
                            </Card>
                        )
                    }
                </div>
            </Container>
        </div>
    )
}