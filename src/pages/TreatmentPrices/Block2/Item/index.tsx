import css from './index.module.scss'

import iconClose from '../../../../assets/components/faq-block1-icon-close.png'

import {useState} from 'react'

import { Service } from '@/hooks/use-query/services'
import getTranslatedField from '@/utils/getTranslatedField'
import { useTranslation } from 'react-i18next'

import Card from '../../../../components/Card'


interface props
{
    treatment: Service
}


export default function Item(props: props) {
    const [active, setActive] = useState<boolean>(true)

    const {t, i18n} = useTranslation()

    return <Card className={css.item}>
        <div className={css.itemInner}>
            <div className={css.itemTop}>
                <div className={css.itemTitle}>{getTranslatedField(props.treatment, 'title', i18n.language) }</div>
                <div className={[css.itemButtonClose, !active && css.itemButtonCloseDisabled].join(' ')} onClick={ () => setActive(!active)}>
                    <img className={css.itemIconClose} src={iconClose}/>
                </div>
            </div>
            {
                active &&
                <div className={css.content}>
                    {
                        props.treatment.prices?.map(item => (
                            <>
                                { item.prices.length ?
                                    <>
                                        <div className={css.contentHeading}>
                                            {getTranslatedField(item, 'title', i18n.language)}
                                        </div>        
                                        {
                                            item?.prices?.map(
                                                item => (
                                                    <div className={css.contentPriceBlock}>
                                                        <span>{getTranslatedField(item, 'title', i18n.language)}</span>
                                                        {
                                                            item.price === -1 ? '' :
                                                            item.price === 0 ? t('free') :
                                                            <span>{item.starting_from && 'от'} € {item.price}</span>
                                                        }
                                                    </div>
                                                )
                                            )
                                        }
                                    </>
                                :
                                    <div className={css.contentPriceBlock}>
                                        <span>{getTranslatedField(item, 'title', i18n.language)}</span>
                                        {
                                            item.price === -1 ? '' :
                                            item.price === 0 ? t('free') :
                                            <span>{item.starting_from && t('from')} € {item.price}</span>
                                        }
                                    </div>
                                }
                            </>
                        ))
                    }
                </div>
            }
        </div>
    </Card>
}