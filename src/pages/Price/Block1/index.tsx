import css from './index.module.scss'

import arrow from '../../../assets/components/treatmentprices-arrow.png'

import { API_URL } from '@/config'
import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import Heading from '../../../components/Heading'
import Card, {CardContent, CardTitle} from '../../../components/Card'
import Container from '../../../components/Container'
import Button from '../../../components/Button'

import Item from './Item'
import {useTranslation} from "react-i18next";


export default function Block() {
    const {t} = useTranslation();
    
    
    const {data} = useQuery({
        queryFn: async () => {
            const {data} = await axios.get(`${API_URL}services/services/`)
            return data
        }
    })

    const [activeItem, setActiveItem] = useState<number|null>(0)

    const toggleActiveItem = (index: number) => {
        if (index===activeItem) {
            setActiveItem(null)
        } else {
            setActiveItem(index)
        }
    } 

    return <Container>
        <div className={css.heading}>
            <Heading center >{t("PriceList_block1_mainTitle")}</Heading>
        </div>
        <div className={css.section}>
            <div className={css.sectionBlock}>
                {
                    Array.isArray(data) && data.map(item =>
                        <Item
                            index={item.id}
                            key={item.id}
                            treatment={item}
                            active={item.id===activeItem}
                            setActive={toggleActiveItem}
                        />
                    )
                }
            </div>
            <div className={css.sectionBlock}>
                <Card>
                    <CardContent>
                        <div className={css.cardContent}>
                            <CardTitle>
                                <div className={css.cardTitle}>{t("PriceList_block1_title")}</div>
                            </CardTitle>
                            <div className={css.cardText}>{t("PriceList_block1_subTitle")}</div>
                            <Link to='/book/' className={css.button}>
                                <Button fullWidth>
                                    {t("PriceList_block1_button")}
                                    &nbsp;
                                    <img src={arrow} alt="arrow" />
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </Container>
}