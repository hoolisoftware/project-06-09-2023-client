import css from './index.module.scss'

import iconClose from '@/assets/components/faq-block1-icon-close.png'

import Card, {CardTitle, CardContent} from '@/components/Card'


interface props {
    index: number
    title: string
    content: React.ReactElement
    setActiveQuestion: CallableFunction
    active?: boolean
}


export default function Item(props: props) {
    return <Card className={css.item}>
        <CardContent>
            <div className={css.itemInner}>
                <div className={css.itemTop}>
                    <div className={css.itemTitle}>
                        <CardTitle>
                            {props.title}
                        </CardTitle>
                    </div>
                    <div className={[css.itemButtonClose, !props.active && css.itemButtonCloseDisabled].join(' ')} onClick={ () => props.setActiveQuestion(props.index)}>
                        <img className={css.itemIconClose} src={iconClose}/>
                    </div>
                </div>
            </div>
        </CardContent>
            {
                props.active &&
                <CardContent className={css.itemContent}>
                    {props.content}
                </CardContent>
            }
    </Card>
}