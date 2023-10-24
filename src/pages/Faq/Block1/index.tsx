import { useState } from 'react'
import {useTranslation} from "react-i18next";
import Markdown from 'react-markdown'

import css from './index.module.scss'

import Heading from '@/components/Heading'
import { useFaq } from "@/hooks/use-query/faq";
import Item from './Item'
import getTranslatedField from '@/utils/getTranslatedField'


export default function Block() {
    const {data, isLoading, isError} = useFaq()

    const [activeQuestion, setActiveQuestion] = useState<number|null>(0)

    const toggleActiveQuestion = (index: number) => {
        if (index===activeQuestion) {
            setActiveQuestion(null)
        } else {
            setActiveQuestion(index)
        }
    }

    const {t, i18n} = useTranslation();
    
    return <div className={css.container}>
        <div className={css.heading}>
            <Heading center>{t("Question_pageTitle")}</Heading>
        </div>
        <div className={css.items}>
            {
                Array.isArray(data) && data.map((item) =>
                    <Item
                        index={item.id}
                        active={item.id === activeQuestion}    
                        title={ getTranslatedField(item, 'question', i18n.language) }
                        setActiveQuestion={toggleActiveQuestion}
                        content={
                            <Markdown children={ getTranslatedField(item, 'answer', i18n.language) }/>
                        }
                    />
                )
            }
            {
                isLoading &&
                <Heading center>
                    <h6>Загрузка...</h6>
                </Heading>
            }
            {
                isError &&
                <Heading center>
                    <h6>Ошибка загрузки, пожалуйста попробуйте ещё раз...</h6>
                </Heading>
            }
        </div>
    </div>
}