import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from '../../components/WrapperFirstBlock'

import Block2 from './Block2'
import CallForm from '../_CommonBlocks/CallForm'
import ContactForm from '../_CommonBlocks/ContactForm'
import {useTranslation} from "react-i18next";

export default function Page()
{
    const {t} = useTranslation();
    return <PageLayout
        title={t("services")}
    >
        <WrapperFirstBlock>
            <Block2/>
        </WrapperFirstBlock>
        <CallForm/>
        <ContactForm/>
    </PageLayout>
}