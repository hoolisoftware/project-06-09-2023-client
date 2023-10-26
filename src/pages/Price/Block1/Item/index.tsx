import { useTranslation } from 'react-i18next'

import css from './index.module.scss'

import iconClose from '../../../../assets/components/faq-block1-icon-close.png'

import type { Service } from '@/hooks/use-query/services'

import Card, {CardContent} from '../../../../components/Card'
import getTranslatedField from '@/utils/getTranslatedField'

interface props
{
    index: number
    treatment: Service
    setActive: CallableFunction
    active: boolean
}

export default function Item(props: props) {
    const {t, i18n} = useTranslation()

    return <div className={css.item}>
        <Card>
            <div className={css.itemInner}>
                <CardContent>
                    <div className={css.itemTop}>
                        <div className={css.itemTitle}>{props.treatment.title}</div>
                        <div className={[css.itemButtonClose, !props.active && css.itemButtonCloseDisabled].join(' ')} onClick={ () => props.setActive(props.index) }>
                            <img className={css.itemIconClose} src={iconClose}/>
                        </div>
                    </div>
                </CardContent>
                {
                    props.active &&
                    <CardContent>
                        {
                            props.treatment.prices?.map((item, index) => (
                                <div key={index}>
                                    { item.prices.length ?
                                        <>
                                            <div className={css.contentHeading}>
                                                {getTranslatedField(item, 'title', i18n.language)}
                                            </div>        
                                            {
                                                item.prices?.map(
                                                    (item, index) => (
                                                        <div key={index} className={css.contentPriceBlock}>
                                                            <span>{getTranslatedField(item, 'title', i18n.language)}</span>
                                                            {
                                                                item.price === -1 ? '' :
                                                                item.price === 0 ? t('free') :
                                                                <span>{item.starting_from && t('from')} € {item.price}</span>
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
                                                <span>{item.starting_from && t('from') } € {item.price}</span>
                                            }
                                        </div>
                                    }
                                </div>
                            ))
                        }
                    </CardContent>
                }
            </div>
        </Card>
    </div>
}