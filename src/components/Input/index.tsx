import css from './index.module.scss'

interface props extends React.HTMLAttributes<HTMLInputElement>
{
    type: string
    fullWidth?: boolean
}


export default function Input(props: props) {
    return <input
        type={props.type}
        placeholder={props.placeholder}
        className={
            [
                css.input,
                props.fullWidth && css.fullWidth,
                props.className
            ].join(' ')
        }
    />
}