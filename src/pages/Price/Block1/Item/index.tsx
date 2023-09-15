import css from './index.module.scss'

import iconClose from '../../../../assets/components/faq-block1-icon-close.png'

import Card, {CardTitle, CardContent} from '../../../../components/Card'

interface props
{
    index: number
    title: string
    setActive: CallableFunction
    active: boolean
}

export default function Item(props: props) {

    return <div className={css.item}>
        <Card>
            <div className={css.itemInner}>
                <CardContent>
                    <div className={css.itemTop}>
                        <div className={css.itemTitle}>{props.title}</div>
                        <div className={css.itemButtonClose} onClick={ () => props.setActive(props.index) }>
                            <img className={css.itemIconClose} src={iconClose}/>
                        </div>
                    </div>
                </CardContent>
                {
                    props.active &&
                    <CardContent>

                        <div className={css.content}>
                            <CardTitle>
                                Laser Ablation Treatment SmartXide DOT2
                            </CardTitle>
                            <div className={css.contentPriceBlock}>
                                <span>Whole Face</span>
                                <span>€ 880</span>
                            </div>
                            <div className={css.contentPriceBlock}>
                                <span>Whole Face+Neck</span>
                                <span>€ 880</span>
                            </div>
                            <div className={css.contentPriceBlock}>
                                <span>Forehead</span>
                                <span>€ 880</span>
                            </div>
                            <div className={css.contentPriceBlock}>
                                <span>Whole Face+Neck +Decollete</span>
                                <span>€ 880</span>
                            </div>
                            <div className={css.contentPriceBlock}>
                                <span>Periorbital Area</span>
                                <span>€ 880</span>
                            </div>
                            <div className={css.contentPriceBlock}>
                                <span>Cheeks</span>
                                <span>€ 880</span>
                            </div>
                            <div className={css.contentPriceBlock}>
                                <span>Perioral Area</span>
                                <span>€ 880</span>
                            </div>
                            <div className={css.contentPriceBlock}>
                                <span>Neck</span>
                                <span>€ 880</span>
                            </div>
                            <div className={css.contentPriceBlock}>
                                <span>Decollete Area</span>
                                <span>€ 880</span>
                            </div>
                            <div className={css.contentPriceBlock}>
                                <span>Hands</span>
                                <span>€ 880</span>
                            </div>
                            <div className={[css.contentPriceBlock, css.contentPriceBlockLast].join(' ')}>
                                <span>Elbows</span>
                                <span>€ 880</span>
                            </div>
                            <CardTitle>
                                Contour Plastics
                            </CardTitle>
                            <div className={css.contentPriceBlock}>
                                <span>Whole Face</span>
                                <span>€ 880</span>
                            </div>
                            <div className={css.contentPriceBlock}>
                                <span>Whole Face+Neck</span>
                                <span>€ 880</span>
                            </div>
                            <div className={css.contentPriceBlock}>
                                <span>Forehead</span>
                                <span>€ 880</span>
                            </div>
                            <div className={css.contentPriceBlock}>
                                <span>Whole Face+Neck +Decollete</span>
                                <span>€ 880</span>
                            </div>
                            <div className={[css.contentPriceBlock, css.contentPriceBlockLast].join(' ')}>
                                <span>Periorbital Area</span>
                                <span>€ 880</span>
                            </div>
                        </div>
                    </CardContent>
                }
            </div>
        </Card>
    </div>
}