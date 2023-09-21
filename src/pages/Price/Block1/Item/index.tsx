import css from './index.module.scss'

import iconClose from '../../../../assets/components/faq-block1-icon-close.png'

import type { Treatment, PriceSection, Price } from '../../../../data/treatments'

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
                    </CardContent>
                }
            </div>
        </Card>
    </div>
}