import css from './index.module.scss'

export interface Props extends React.HTMLAttributes<HTMLInputElement>
{
    type?: string
    name?: string
    disabled?: boolean
    fullWidth?: boolean
    required?: boolean
    value?: string
}


export default function Input(props: Props) {
    return <input
        onChange={props.onChange}
        value={props.value}
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