import css from './index.module.scss'

import iconClose from '../../../../assets/components/faq-block1-icon-close.png'

import {useState} from 'react'

import { Treatment, Price, PriceSection } from '../../../../data/treatments'

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
                                { (item as PriceSection).prices &&
                                    <>
                                        <div className={css.contentHeading}>
                                            {item.title}
                                        </div>        
                                        {
                                            (item as PriceSection).prices?.map(
                                                item => (
                                                    <div className={css.contentPriceBlock}>
                                                        <span>{item.title}</span>
                                                        {
                                                            item.price !== -1 && 
                                                            <span>{item.startingFrom && 'от'} € {item.price}</span>
                                                        }
                                                    </div>
                                                )
                                            )
                                        }
                                    </>
                                }
                                {
                                    Number.isInteger((item as Price).price) &&
                                    <div className={css.contentPriceBlock}>
                                        <span>{item.title}</span>
                                        {
                                            (item as Price).price !== -1 && 
                                            (item as Price).price === 0 ? 'БЕСПЛАТНО' :
                                            <span>{(item as Price).startingFrom && 'от'} € {(item as Price).price}</span>
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