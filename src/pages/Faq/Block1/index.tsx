import css from './index.module.scss'

import { API_URL } from '@/config'
import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import Markdown from 'react-markdown'

import Heading from '../../../components/Heading'

import Item from './Item'
import {useTranslation} from "react-i18next";



interface FAQ
{
    id: number
    question: string
    answer: string
}

export default function Block() {
    const {data, status} = useQuery('faq', {
        queryFn: async () => {
            const {data} = await axios.get(`${API_URL}faq/faq/`)
            return data
        }
    })

    const [activeQuestion, setActiveQuestion] = useState<number|null>(0)

    const toggleActiveQuestion = (index: number) => {
        if (index===activeQuestion) {
            setActiveQuestion(null)
        } else {
            setActiveQuestion(index)
        }
    }

    const {t, i18n} = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    
    return <div className={css.container}>
        <div className={css.heading}>
            <Heading center>{t("Question_pageTitle")}</Heading>
        </div>
        <div className={css.items}>
            {
                status === 'success' &&
                Array.isArray(data) && data.map((item: FAQ) =>
                    <Item
                        index={item.id}
                        active={item.id === activeQuestion}    
                        title={item['question']}
                        setActiveQuestion={toggleActiveQuestion}
                        content={
                            <Markdown children={item.answer}/>
                        }
                    />
                )
            }
            {
                status === 'loading' &&
                <Heading center>
                    <h6>Загрузка...</h6>
                </Heading>
            }
            {
                status === 'error' &&
                <Heading center>
                    <h6>Ошибка загрузки, пожалуйста попробуйте ещё раз...</h6>
                </Heading>
            }
        </div>
    </div>
}