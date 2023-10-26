import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from '../../components/WrapperFirstBlock'

import {useParams} from "react-router-dom"

import Intro from '../_CommonBlocks/Intro'
import HappyClients from '../_CommonBlocks/HappyClients'
import CallForm from '../_CommonBlocks/CallForm'
import ContactForm from '../_CommonBlocks/ContactForm'
import { useService } from '@/hooks/use-query/services'
import getTranslatedField from '@/utils/getTranslatedField'
import { useTranslation } from 'react-i18next'

import Block2 from './Block2'
import Block3 from './Block3'
import Block4 from './Block4'
import Block5 from './Block5'
import Block6 from './Block6'

export default function Page() {
    const {treatmentId} = useParams()
    const {data} = useService(treatmentId)

    const {i18n} = useTranslation()

    return <PageLayout
        title={data?.title}
    >
        <WrapperFirstBlock>
            <Intro
                title={data && getTranslatedField(data, 'title', i18n.language)}
                illustration={data?.image}
            />
        </WrapperFirstBlock>
        { data &&
            <Block2 treatment={data}/>
        }
        {
            Number(treatmentId) === 1 &&
            <>
                <Block3/>
                <Block4/>
                <Block5/>
                <Block6/>
            </>
        }
        <HappyClients/>
        <CallForm/>
        <ContactForm/>
    </PageLayout>
}