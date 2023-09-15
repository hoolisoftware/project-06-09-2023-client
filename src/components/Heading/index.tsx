import css from './index.module.scss'

interface props extends React.HTMLAttributes<HTMLDivElement>
{
    center?: boolean
}

export default function Heading(props: props) {
    return (
        <div className={
            [
                css.heading,
                props.center && css.headingCenter
            ].join(' ')
        }>
            {props.children}
        </div>
    )
}