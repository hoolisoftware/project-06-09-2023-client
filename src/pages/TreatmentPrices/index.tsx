import PageLayout from '../../components/PageLayout'
import WrapperFirstBlock from '../../components/WrapperFirstBlock'

import axios from 'axios'
import {useParams} from "react-router-dom"
import { useQuery } from 'react-query'

import type { Treatment } from '@/types'

import Intro from '../_CommonBlocks/Intro'
import HappyClients from '../_CommonBlocks/HappyClients'
import CallForm from '../_CommonBlocks/CallForm'
import ContactForm from '../_CommonBlocks/ContactForm'

import Block2 from './Block2'
import Block3 from './Block3'
import Block4 from './Block4'
import Block5 from './Block5'
import Block6 from './Block6'

export default function Page() {
    const {treatmentId} = useParams()
    const {data} = useQuery<Treatment>({
        queryFn: async () => {
            const {data} = await axios.get(`http://localhost:8000/api/services/services/${treatmentId}/`) 
            return data
        }
    })

    return <PageLayout
        title={data?.title}
    >
        <WrapperFirstBlock>
            <Intro
                title={data?.title}
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