import css from './index.module.scss'

import iconClose from '../../../../assets/components/faq-block1-icon-close.png'

import {useState} from 'react'

import { Treatment} from '@/types'

import Card from '../../../../components/Card'


interface props
{
    treatment: Treatment
}


export default function Item(props: props) {
    const [active, setActive] = useState<boolean>(true)

    return <Card className={css.item}>
        <div className={css.itemInner}>
            <div className={css.itemTop}>
                <div className={css.itemTitle}>{props.treatment.title}</div>
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
                                            {item.title}
                                        </div>        
                                        {
                                            item?.prices?.map(
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
                </div>
            }
        </div>
    </Card>
}