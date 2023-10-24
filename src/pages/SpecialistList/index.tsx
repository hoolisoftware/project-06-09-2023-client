import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from '../../components/WrapperFirstBlock'

import OurTeam from '../_CommonBlocks/OurTeam'
import Certificates from '../_CommonBlocks/Certificates'
import CallForm from '../_CommonBlocks/CallForm'
import ContactForm from '../_CommonBlocks/ContactForm'
import {useTranslation} from "react-i18next";

export default function Page()
{
    const {t} = useTranslation();
    return <PageLayout
        title={t("professionals_block1_title")}
    >
        <WrapperFirstBlock>
            <OurTeam/>
        </WrapperFirstBlock>
        <Certificates/>
        <CallForm/>
        <ContactForm/>
    </PageLayout>
}