import axios from 'axios'
import { useQuery } from 'react-query'

import css from './index.module.scss'

import { API_URL } from '@/config'

import Heading from '../../../components/Heading'
import {useTranslation} from "react-i18next";


interface BeforeAfterUnit {
    id: number
    image: string
    name: string
}


export default function Block() {
    const {data} = useQuery('before-after-sections', {
        queryFn: async () => {
            const {data} = await axios.get(`${API_URL}clinic/before-after-sections/`)
            return data
        }
    })

    const {t} = useTranslation();
    

    return <div className={css.block}>
        <div className={css.container}>
            <div className={css.heading}>
                <Heading center>{t("BeforeAndAfter_block1_title")}</Heading>
            </div>
            {
                Array.isArray(data) && data.map(item =>
                    <div className={css.section}>
                        <div className={css.sectionInner}>
                            <div className={css.sectionHeading}>{item.title}</div>
                            <div className={css.sectionIllustrations}>
                                {
                                    item.units.map((unit: BeforeAfterUnit) =>
                                        <img className={css.sectionIllustration} src={unit.image} alt={unit.name} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
}