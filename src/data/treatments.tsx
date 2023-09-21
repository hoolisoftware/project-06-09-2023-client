import treatment1 from '../assets/components/treatments-treatment1.jpg'
import treatment2 from '../assets/components/treatments-treatment2.jpg'
import treatment3 from '../assets/components/treatments-treatment3.png'
import treatment4 from '../assets/components/treatments-treatment4.png'
import treatment5 from '../assets/components/treatments-treatment5.png'
import treatment6 from '../assets/components/treatments-treatment6.png'
import treatment7 from '../assets/components/treatments-treatment7.png'
import treatment8 from '../assets/components/treatments-treatment8.png'
import treatment9 from '../assets/components/treatments-treatment9.png'

export interface Price
{
    title: string
    price: number
    startingFrom?: boolean
}

export interface PriceSection
{
    title: string
    prices: Price[]
}

export interface Treatment
{
    id: number
    image: string
    title: string
    points?: string[]
    prices: (PriceSection|Price)[]
    link?: string
}

export const treatments: Treatment[] = [
    {
        id: 1,
        title: 'Лазерная косметология',
        image: treatment1,
        points: [
            'Консультация',
            'Лазерная аблативная шлифовка SmartXide DOT 2',
        ],
        prices: [
            {
                title: 'Лазерная аблативная шлифовка SmartXide DOT 2',
                prices: [
                    {
                        title: 'Все лицо',
                        price: 880
                    },
                    {
                        title: 'Все лицо + шея',
                        price: 980
                    },
                    {
                        title: 'Лоб',
                        price: 250
                    },
                    {
                        title: 'Все лицо + шея + декольте',
                        price: 1080
                    },
                    {
                        title: 'Переорбитальная область',
                        price: 300
                    },
                    {
                        title: 'Щеки',
                        price: 200
                    },
                    {
                        title: 'Периоральная область',
                        price: 300
                    },
                    {
                        title: 'Шея',
                        price: 300
                    },
                    {
                        title: 'Область декольте',
                        price: 300
                    },
                    {
                        title: 'Кисти рук',
                        price: 300
                    },
                    {
                        title: 'Локти',
                        price: 250
                    }
                ]
            },
            {
                title: 'Контурная пластика',
                prices: [
                    {
                        title: 'Juvederm 0,5 ml',
                        price: 280
                    },
                    {
                        title: 'Juvederm 1,0 ml',
                        price: 380
                    },
                    {
                        title: 'Genyal 1,0 ml',
                        price: 300
                    },
                    {
                        title: 'Restylane 1,0 ml',
                        price: 360
                    },
                    {
                        title: 'Emmervel Lips 1,0 ml',
                        price: 360
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Инъекционная косметология',
        image: treatment2,
        points: [
            'Инъекционные методики',
            'Ботулинотерапия',
            'Botox',
            'Dysport',
            'Azzalure',
            'Vistabel',
        ],
        prices: [
            {
                title: 'Инъекционные методики, Ботулинотерапия, Botox, Dysport, Azzalure, Vistabel',
                prices: [
                    {
                        title: 'Все лицо',
                        price: 390
                    },
                    {
                        title: 'Все лицо + шея',
                        price: 460
                    },
                    {
                        title: 'Все лицо + шея + декольте',
                        price: 580
                    },
                    {
                        title: 'Лоб',
                        price: 350
                    },
                    {
                        title: 'Межбровье сибелиус',
                        price: 240
                    },
                    {
                        title: 'Переорбитальная область',
                        price: 350
                    },
                    {
                        title: 'Бруксизм',
                        price: 350
                    },
                    {
                        title: 'Шея',
                        price: 250
                    },
                    {
                        title: 'Область декольте',
                        price: 250
                    },
                    {
                        title: 'Локти',
                        price: 300
                    }
                ]
            },
            {
                title: 'Контурная пластика',
                prices: [
                    {
                        title: 'Juvederm 0,5 ml',
                        price: 280
                    },
                    {
                        title: 'Juvederm 1,0 ml',
                        price: 380
                    },
                    {
                        title: 'Genyal 1,0 ml',
                        price: 300
                    },
                    {
                        title: 'Restylane 1,0 ml',
                        price: 360
                    },
                    {
                        title: 'Emmervel Lips 1,0 ml',
                        price: 360
                    },
                    {
                        title: 'PRP plasmahoito',
                        price: 360
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Аппаратная косметология',
        image: treatment3,
        points: [
            'Фракционный лифтинг Fractora'
        ],
        prices: [
            {
                title: 'Фракционный лифтинг Fractora',
                prices: [
                    {
                        title: 'Все лицо',
                        price: 480
                    },
                    {
                        title: 'Все лицо + шея',
                        price: 680
                    },
                    {
                        title: 'Лоб',
                        price: 120
                    },
                    {
                        title: 'Щеки',
                        price: 280
                    },
                    {
                        title: 'Шея',
                        price: 280
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'Пластическая хирургия лица',
        image: treatment4,
        points: [
            'Консультация',
            'Блефаропластика (пластика век)',
            'Ринопластика ( пластика носа)',
            'Хейлопластика (пластика губ)',
            'Малярпластика (пластика скул)',
            'Уменьшение проекции скул',
            'Хирургическое омоложение лица',
            'Радиочастотный лифтинг Face Tite'
        ],
        prices: [
            {
                title: 'Консультация',
                price: 0
            },
            {
                title: 'Блефаропластика (пластика век)',
                prices: [
                    {
                        title: 'Верхняя блефаропластика',
                        price: 1500
                    },
                    {
                        title: 'Нижняя блефаропластика',
                        price: 1800
                    }
                ]
            },
            {
                title: 'Ринопластика ( пластика носа)',
                prices: [
                    {
                        title: 'Коррекция крыльев носа',
                        price: 3400
                    },
                    {
                        title: 'Уменьшающая ринопластика',
                        price: 6900
                    }
                ]
            },
            {
                title: 'Отопластика ( пластика ушей)',
                price: 1500
            },
            {
                title: 'Хейлопластика (пластика губ)',
                prices: [
                    {
                        title: 'Наполнение гиалуроновой кислотой',
                        price: 360
                    },
                    {
                        title: 'Наполнение собственным жиром',
                        price: 1200
                    }
                ]
            },
            {
                title: 'Малярпластика (пластика скул)',
                prices: [
                    {
                        title: 'Увеличение проекции скул',
                        price: -1
                    },
                    {
                        title: 'Наполнение гиалуроновой кислотой 1ml',
                        price: 360
                    },
                    {
                        title: 'Наполнение гиалуроновой кислотой 2ml',
                        price: 600
                    },
                    {
                        title: 'Наполнение собственным жиром',
                        price: 1200
                    }
                ]
            },
            {
                title: '*Уменьшение проекции скул',
                prices: [
                    {
                        title: 'Ботулинотоксин', 
                        price: 350,
                    },
                    {
                        title: 'Операция', 
                        price: 1300,
                    }
                ]
            },
            {
                title: 'Липофилинг',
                prices: [
                    {
                        title: 'Лицоот', 
                        price: 1200,
                        startingFrom: true
                    },
                    {
                        title: 'Телоот', 
                        price: 2500,
                        startingFrom: true
                    }
                ]
            },
            {
                title: 'Хирургическое омоложение лица',
                prices: [
                    {
                        title: 'Подтяжка лица',
                        price: 5600
                    },
                    {
                        title: 'Нижняя подтяжка лица',
                        price: 2800
                    }
                ]
            },
            {
                title: 'Радиочастотный лифтинг Face Tite',
                prices: [
                    {
                        title: '1 зона ( в зависимости от объема коррекции)',
                        price: 800
                    },
                    {
                        title: 'Одноразовые насадки',
                        price: -1
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        title: 'Пластическая хирургия тела',
        image: treatment5,
        points: [
            'Маммопластика',
            'Липосакция',
            'Радиочастотная липосакция Body Tite',
            'Целлюлит',
            'BodyFX'
        ],
        prices: [
            {
                title: 'Маммопластика',
                prices: [
                    {
                        title: '*Увеличивающая маммопластика (В Финляндии)',
                        price: 5600
                    },
                    {
                        title: '*3200 В Таллине',
                        price: 3200
                    },
                    {
                        title: '*Мастопексия (подтяжка груди)',
                        price: 3600
                    },
                    {
                        title: 'Лечение гинекомастии у мужчин',
                        price: 1800
                    },
                    {
                        title: 'Классическая абдоминопластика',
                        price: 4800
                    }
                ]
            },
            {
                title: 'Липосакция WAL',
                prices: [
                    {
                        title: 'Липосакция тела 1 зона',
                        price: 800,
                        startingFrom: true
                    },
                    {
                        title: 'Липосакция тела 2 зоны',
                        price: 1200
                    },
                    {
                        title: 'Липосакци тела 3 зоны',
                        price: 1500
                    },
                    {
                        title: 'Липосакция тела 4 зоны',
                        price: 2200
                    },
                    {
                        title: 'Липосакция тела 6 зон',
                        price: 3000
                    },
                    {
                        title: 'Дополнительная зона',
                        price: 400
                    },
                    {
                        title: 'Липосакция грудных желез при гинекомасти',
                        price: 1200
                    },
                    {
                        title: 'Липофилинг тела (парная зона)',
                        price: 2800
                    },
                ]
            },
            {
                title: 'Радиочастотная липосакция Body Tite',
                prices: [
                    {
                        title: 'Липосакция тела 1 зонаот',
                        price: 1000
                    },
                    {
                        title: 'Липосакция тела 2 зоны',
                        price: 2000
                    },
                    {
                        title: 'Липосакция тела 4 зоны',
                        price: 2700
                    },
                    {
                        title: 'Липосакция тела 6 зон',
                        price: 3600
                    },
                    {
                        title: 'Дополнительная зонаот',
                        price: 500
                    }
                ]
            },
            {
                title: 'BodyFX',
                prices: [
                    {
                        title: 'Липосакция тела 1 зона',
                        price: 180,
                        startingFrom: true
                    },
                    {
                        title: 'Липосакция тела 2 зоны',
                        price: 320
                    },
                    {
                        title: 'Липосакция тела 4 зоны',
                        price: 580
                    },
                    {
                        title: 'Липосакция тела 6 зон',
                        price: 800
                    },
                    {
                        title: 'Дополнительная зона',
                        price: 500,
                        startingFrom: true
                    }
                ]
            },
            {
                title: 'BodyTite',
                prices: [
                    {
                        title: 'Липосакция тела 1 зона',
                        price: 1000,
                        startingFrom: true
                    },
                    {
                        title: 'Липосакция тела 2 зоны',
                        price: 2000
                    },
                    {
                        title: 'Липосакция тела 4 зоны',
                        price: 2700
                    },
                    {
                        title: 'Липосакция тела 6 зон',
                        price: 3600
                    },
                    {
                        title: 'Дополнительная зона',
                        price: 500,
                        startingFrom: true
                    },
                ]
            }
        ]
    },
    {
        id: 6,
        title: 'Пластическая хирургия груди',
        image: treatment6,
        prices: [
            {
                title: 'Маммопластика',
                prices: [
                    {
                        title: 'Увеличивающая маммопластика (В Финляндии)',
                        price: 3600
                    },
                    {
                        title: 'Мастопексия (подтяжка груди)',
                        price: 3600
                    },
                    {
                        title: 'Лечение гинекомастии у мужчин',
                        price: 1800
                    },
                    {
                        title: 'Классическая абдоминопластика',
                        price: 4800
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        link: '/training/',
        title: 'Обучение',
        image: treatment7,
        prices: [
            {
                title: 'Test',
                prices: []
            }
        ]
    },
    {
        id: 8,
        title: 'Консультации со специалистом',
        image: treatment8,
        prices: []
    },
    {
        id: 9,
        title: 'Услуги для мужчин',
        image: treatment9,
        points: [
            'Устранение морщин',
            'Ботулинотерапия',
            'Радиочастотный лифтинг Фрактора',
            'Лазерная аблативная шлифовка SmartXide DOT 2',
            'Устранение второго подбородка'
        ],
        prices: [
            {
                title: 'Устранение морщин',
                prices: [
                    {
                        title: 'Juvederm 0,5 ml',
                        price: 280
                    },
                    {
                        title: 'Juvederm 1,0 ml',
                        price: 380
                    },
                    {
                        title: 'Genyal 1,0 ml',
                        price: 300
                    },
                    {
                        title: 'Restylane 1,0 ml',
                        price: 360
                    },
                    {
                        title: 'Emmervel Lips 1,0 ml',
                        price: 360
                    }
                ]
            },
            {
                title: 'Ботулинотерапия',
                prices: [
                    {
                        title: 'Все лицо',
                        price: 390
                    },
                    {
                        title: 'Все лицо + шея',
                        price: 460
                    },
                    {
                        title: 'Все лицо + шея + декольте',
                        price: 580
                    },
                    {
                        title: 'Лоб',
                        price: 350
                    },
                    {
                        title: 'Межбровье сибелиус',
                        price: 240
                    },
                    {
                        title: 'Переорбитальная область',
                        price: 100
                    },
                    {
                        title: 'Бруксизм',
                        price: 350
                    },
                    {
                        title: 'Шея',
                        price: 250
                    }
                ]
            },
            {
                title: 'Радиочастотный лифтинг Фрактора',
                prices: [
                    {
                        title: 'Все лицо',
                        price: 480
                    },
                    {
                        title: 'Все лицо + шея',
                        price: 680
                    },
                    {
                        title: 'Лоб',
                        price: 120
                    },
                    {
                        title: 'Щеки',
                        price: 280
                    },
                    {
                        title: 'Шея',
                        price: 280
                    }
                ]
            },
            {
                title: 'Лазерная аблативная шлифовка SmartXide DOT 2',
                prices: [
                    {
                        title: 'Все лицо',
                        price: 880
                    },
                    {
                        title: 'Все лицо + шея',
                        price: 980
                    },
                    {
                        title: 'Лоб',
                        price: 250
                    },
                    {
                        title: 'Все лицо + шея + декольте',
                        price: 1080
                    },
                    {
                        title: 'Переорбитальная область',
                        price: 300
                    },
                    {
                        title: 'Щеки',
                        price: 200
                    },
                    {
                        title: 'Периоральная область',
                        price: 300
                    },
                    {
                        title: 'Шея',
                        price: 300
                    }
                ]
            },
            {
                title: 'Устранение второго подбородка',
                prices: [
                    {
                        title: 'Блефаропластика',
                        price: -1
                    },
                    {
                        title: 'Верхняя блефаропластика',
                        price: 1500
                    },
                    {
                        title: 'Нижняя блефаропластика',
                        price: 1800
                    },
                ]
            },
            {
                title: 'Пластическая хирургия тела',
                prices: [
                    {
                        title: 'Липосакция WAL',
                        price: -1
                    },
                    {
                        title: 'Липосакция тела 1 зона', 
                        price: 800,
                        startingFrom: true
                    },
                    {
                        title: 'Липосакция тела 2 зоны',
                        price: 1200
                    },
                    {
                        title: 'Липосакция тела 3 зоны',
                        price: 1500
                    },
                    {
                        title: 'Липосакция тела 4 зоны',
                        price: 2200
                    },
                    {
                        title: 'Дополнительная зона',
                        price: 400
                    }
                ]
            },
            {
                title: 'Радиочастотная липосакция Body Tite',
                prices: [
                    {
                        title: 'Липосакция тела 1 зона',
                        price: 1000,
                        startingFrom: true
                    },
                    {
                        title: 'Липосакция тела 2 зоны',
                        price: 2000
                    },
                    {
                        title: 'Липосакция тела 4 зоны',
                        price: 2700
                    },
                    {
                        title: 'Липосакция тела 6 зон',
                        price: 3600
                    },
                    {
                        title: 'Дополнительная зонаот ',
                        price: 500
                    },
                ]
            },
            {
                title: 'Лечение проблемной кожи',
                prices: [
                    {
                        title: 'Лазерная терапия',
                        price: 1000
                    },
                    {
                        title: 'Плазмалифтинг',
                        price: 360
                    }
                ]
            },
            {
                title: 'Лечение гинекомастии',
                price: 1800
            }
        ]
    },
]

export default function getTreatment(id: number) {
    return treatments.find(item => item.id === id)
}