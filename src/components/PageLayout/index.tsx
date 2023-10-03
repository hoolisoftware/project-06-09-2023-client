import css from './index.module.scss'

import Header from '../Header'
import Footer from '../Footer'
import ModalMessage from '../ModalMessage'

interface Props extends React.HTMLAttributes<HTMLDivElement>
{
    title?: string
}

export default function PageLayout(props: Props) {
    document.title = `${props.title ? `${props.title} | ` : ''}Plastic Clinic`

    return <div className={css.layout}>
        <div>
            <Header/>
            {props.children}
        </div>
        <Footer/>
        <ModalMessage/>
    </div>
}