import css from './index.module.scss'

export default function Card(props: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={
        [
            css.card,
            props.className
        ].join(' ')
    }>
        {props.children}
    </div>
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={
        [
            css.cardContent,
            props.className
        ].join(' ')
    }>
        {props.children}
    </div>
}

export function CardTitle(props: React.HTMLAttributes<HTMLDialogElement>) {
    return <div className={css.cardTitle}>
        {props.children}
    </div>
}