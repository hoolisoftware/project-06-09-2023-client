import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from '../../components/WrapperFirstBlock'

import Intro from '../_CommonBlocks/Intro'
import Block2 from './Block2'
import Block3 from './Block3'
import HappyClients from '../_CommonBlocks/HappyClients'
import CallForm from '../_CommonBlocks/CallForm'
import ContactForm from '../_CommonBlocks/ContactForm'

import illustration from '../../assets/components/treatmentdetail-introillustration.jpg'
import {useTranslation} from "react-i18next";

export default function Page()
{
    const {t} = useTranslation();
    return <PageLayout
        title={t("learning")}
    >
        <WrapperFirstBlock>
            <Intro
                title={'Training'}
                illustration={illustration}
            />
        </WrapperFirstBlock>
        <Block2/>
        <Block3/>
        <HappyClients/>
        <CallForm/>
        <ContactForm/>
    </PageLayout>
}