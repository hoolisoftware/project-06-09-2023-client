import css from './index.module.scss'

import arrow from '../../../../assets/components/news-arrow.png'

import { Link } from 'react-router-dom'

import Card, {CardContent, CardTitle} from '../../../../components/Card'

interface Props
{
    id: number
    title: string
    excerpt: string
}

export default function Item(props: Props) {

    return <div className={css.item}>
        <Card>
            <CardContent>
                <CardTitle>{props.title}</CardTitle>
                <Link to={`/news/${props.id}/`} className={css.itemButtonLink}>
                    <img className={css.itemIconClose} src={arrow}/>
                </Link>
                <div className={css.content}>
                    {props.excerpt}
                </div>
            </CardContent>
        </Card> 
    </div>
        
}