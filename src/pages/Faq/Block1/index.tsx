import css from './index.module.scss'

import { useState } from 'react'

import Heading from '../../../components/Heading'

import Item from './Item' 

export default function Block() {
    const questons = [
        [
            "What’s the difference between botox and hyaluronic acid?",
        ],
        [
            "Hello! I’m 43, I don’t dare yet to make plastics. Injections with hyaluronic acid were advises as an alternative. But how to choose fillers correctly? I’d like to get rid of wrinkles and to make lip plastics. My skin is combined.",
        ],
        [
            "Hello! There is now increasing talk about a new method – radiofrequency liposuction. Can you explain, what is the fundamental difference between radiofrequency liposuction and traditional liposuction?"
        ],
        [
            "Good afternoon! As I understand, the effect of lifting is the main advantage of RF liposuction. Are there any other benefits?"
        ],
        [
            "When its possible to estimate the final result?"
        ],
        [
            "What procedures can RF liposuctions be combined with?"
        ],
        [
            "When is the best time for RF liposuction?"
        ],
        [
            "Hello! How long will the result of the breast lift last?"
        ]
    ]

    const [activeQuestion, setActiveQuestion] = useState<number|null>(0)

    const toggleActiveQuestion = (index: number) => {
        if (index===activeQuestion) {
            setActiveQuestion(null)
        } else {
            setActiveQuestion(index)
        }
    }
    
    return <div className={css.container}>
        <div className={css.heading}>
            <Heading center>FAQ</Heading>
        </div>
        <div className={css.items}>
            {
                questons.map((item, index) =>
                    <Item
                        index={index}
                        active={index === activeQuestion}    
                        title={item[0]}
                        setActiveQuestion={toggleActiveQuestion}
                        content={
                            <>
                                Difference between hyaluronic acid and botox is how they effect the skin. Hyaluronic acid is injected under the skin, while botox is injected into the muscle.
                                <br /><br />
                                Botox relaxes muscles and relieves tension, thereby smoothing wrinkles. Botox lasts from 4-6 months. Hyaluronic acid effects the skin somewhat differently. It keeps water in the skin cells, giving it elasticity and tightness. Hyaluronic acid lasts from 8-12 months.
                                <br /><br />
                                ”The main purpose of hyaluronic acid is a water saturation of our skin. Strange, but true: one molecule of hyaluronic acid can keep up to five hundred of water molecules.”        
                            </>
                        }
                    />
                )
            }
        </div>
    </div>
}