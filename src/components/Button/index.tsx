import css from './index.module.scss'

interface props extends React.HTMLAttributes<HTMLButtonElement>
{
    fullWidth?: boolean
    disabled?: boolean
}

export default function Button(props: props)
{
    return <button disabled={props.disabled} className={
        [
            css.button,
            props.fullWidth && css.fullWidth,
            props.className
        ].join(' ')
    }>
        {props.children}
    </button>
}