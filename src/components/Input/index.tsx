import css from './index.module.scss'

interface props extends React.HTMLAttributes<HTMLInputElement>
{
    type: string
    name?: string
    disabled?: boolean
    fullWidth?: boolean
    required?: boolean
}


export default function Input(props: props) {
    return <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        required={props.required}
        className={
            [
                css.input,
                props.fullWidth && css.fullWidth,
                props.className
            ].join(' ')
        }
    />
}