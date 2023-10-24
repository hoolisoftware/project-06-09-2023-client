import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from "../../components/WrapperFirstBlock"

import CallForm from '../_CommonBlocks/CallForm'
import ContactForm from '../_CommonBlocks/ContactForm'

import Block1 from './Block1'
import {useTranslation} from "react-i18next";

export default function Page()
{
    document.title = 'FAQ'
    const {t} = useTranslation();
    return <PageLayout
        title={t("FAQ")}
    >
        <WrapperFirstBlock>
            <Block1/>
        </WrapperFirstBlock>
        <CallForm/>
        <ContactForm/>
    </PageLayout>
}