import css from './index.module.scss'

import iconClose from '../../../../assets/components/faq-block1-icon-close.png'

import {useState} from 'react'

import Card from '../../../../components/Card'


export default function Item() {
    const [active, setActive] = useState<boolean>(true)

    return <Card className={css.item}>
        <div className={css.itemInner}>
            <div className={css.itemTop}>
                <div className={css.itemTitle}>Laser Cosmetology</div>
                <div className={css.itemButtonClose} onClick={ () => setActive(!active)}>
                    <img className={css.itemIconClose} src={iconClose}/>
                </div>
            </div>
            {
                active &&
                <div className={css.content}>
                    <div className={css.contentHeading}>
                        Laser Ablation Treatment SmartXide DOT2
                    </div>
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
                    <div className={css.contentHeading}>
                        Contour Plastics
                    </div>
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
            }
        </div>
    </Card>
}