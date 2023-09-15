import css from './index.module.scss'

interface props
{
    title: React.ReactElement
    subTitle?: React.ReactElement
    content: React.ReactElement
    illustration: string
    right?: boolean
}


export default function Block(props: props){
    return <div className={css.container}>
        <img className={[css.illustration, props.right && css.illustrationRight].join(' ')} src={props.illustration} alt='illustration' />
        <div className={css.content}>
            {
                props.title &&
                <div className={css.heading}>
                    {props.title}
                </div>
            }
            {
                props.subTitle &&
                <div className={css.subheading}>
                    {props.subTitle}
                </div>
            }
            <p className={css.paragraph}>
                {props.content}
            </p>
        </div>
    </div>
}