import css from './index.module.scss'

interface props extends React.HTMLAttributes<HTMLButtonElement>
{
    fullWidth?: boolean
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
}

export default function Button(props: props)
{
    return <button onClick={ props.onClick } type={props.type} disabled={props.disabled} className={
        [
            css.button,
            props.fullWidth && css.fullWidth,
            props.className
        ].join(' ')
    }>
        {props.children}
    </button>
}