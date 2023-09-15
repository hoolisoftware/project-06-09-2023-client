import css from './index.module.scss'

interface props extends React.HTMLAttributes<HTMLDivElement>
{

}

export default function WrapperFirstBlock(props: props)
{
    return (
        <div className={css.wrapper}>
            {props.children}
        </div>
    )
}