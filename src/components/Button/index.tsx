import css from './index.module.scss'

interface props extends React.HTMLAttributes<HTMLButtonElement>
{
    fullWidth?: boolean
}

export default function Button(props: props)
{
    return <button className={
        [
            css.button,
            props.fullWidth && css.fullWidth,
            props.className
        ].join(' ')
    }>
        {props.children}
    </button>
}