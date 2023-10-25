import {useTranslation} from "react-i18next";
import css from './index.module.scss'

import arrow from '../../../assets/components/treatmentprices-arrow.png'

import { usePosts } from "@/hooks/use-query/news";
import Heading from '../../../components/Heading'
import Card, {CardContent, CardTitle} from '../../../components/Card'
import Container from '../../../components/Container'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import getTranslatedField from "@/utils/getTranslatedField";

import Item from './Item'


export default function Block() {
    const {data} = usePosts()

    const {t, i18n} = useTranslation();

    return <Container>
        <div className={css.heading}>
            <Heading center >{t("News_pageTitle")}</Heading>
        </div>
        <div className={css.section}>
            <div className={css.sectionBlock}>
                {
                    Array.isArray(data) && data?.map((item) =>
                        <Item
                            id={item.id}
                            key={item.id}
                            title={getTranslatedField(item, 'title', i18n.language)}
                            excerpt={getTranslatedField(item, 'excerpt', i18n.language)}
                        />
                    )
                }
            </div>
            <div className={css.sectionBlock}>
                <Card>
                    <CardContent>
                        <div className={css.cardContent}>
                            <CardTitle>
                                <div className={css.cardTitle}>{t("News_searchTitle")}</div>
                            </CardTitle>
                            <Input
                                placeholder={t("News_searchPlaceholder")}
                                type='text'
                                fullWidth
                            />
                            <Button fullWidth>
                                {t("News+searchButton")}
                                &nbsp;
                                <img src={arrow} alt="arrow" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </Container>
}