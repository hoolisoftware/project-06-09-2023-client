import {useTranslation} from "react-i18next";
import css from './index.module.scss'

import arrow from '../../../assets/components/treatmentprices-arrow.png'

import { API_URL } from '@/config'
import axios from 'axios'
import { useQuery } from 'react-query'

import Heading from '../../../components/Heading'
import Card, {CardContent, CardTitle} from '../../../components/Card'
import Container from '../../../components/Container'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

import Item from './Item'


interface Post{
    id: number
    title: string
    excerpt: string
    categories: string[]
}

export default function Block() {
    const {data} = useQuery<Post[]>('news', {
        queryFn: async () => {
            const {data} = await axios.get(`${API_URL}blog/posts/`)
            return data
        }
    })

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
                            title={item.title}
                            excerpt={item.excerpt}
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