import css from './index.module.scss'

import Header from '../Header'
import Footer from '../Footer'
import ModalMessage from '../ModalMessage'

export default function PageLayout(props: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={css.layout}>
        <div>
            <Header/>
            {props.children}
        </div>
        <Footer/>
        <ModalMessage/>
    </div>
}