import css from './index.module.scss'

import iconClose from '../../../../assets/components/faq-block1-icon-close.png'

import type { Treatment } from '@/types'

import Card, {CardContent} from '../../../../components/Card'

interface props
{
    index: number
    treatment: Treatment
    setActive: CallableFunction
    active: boolean
}

export default function Item(props: props) {

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
                            props.treatment.prices?.map(item => (
                                <>
                                    { item.prices.length ?
                                        <>
                                            <div className={css.contentHeading}>
                                                {item.title}
                                            </div>        
                                            {
                                                item.prices?.map(
                                                    item => (
                                                        <div className={css.contentPriceBlock}>
                                                            <span>{item.title}</span>
                                                            {
                                                                item.price === -1 ? '' :
                                                                item.price === 0 ? 'БЕСПЛАТНО' :
                                                                <span>{item.starting_from && 'от'} € {item.price}</span>
                                                            }
                                                        </div>
                                                    )
                                                )
                                            }
                                        </>
                                    :
                                        <div className={css.contentPriceBlock}>
                                            <span>{item.title}</span>
                                            {
                                                item.price === -1 ? '' :
                                                item.price === 0 ? 'БЕСПЛАТНО' :
                                                <span>{item.starting_from && 'от'} € {item.price}</span>
                                            }
                                        </div>
                                    }
                                </>
                            ))
                        }
                    </CardContent>
                }
            </div>
        </Card>
    </div>
}