import { PortableTextBlock } from 'sanity';


type KeyValue = {
    key: string
    value: string
}

type InfoDetails = {
    image: string
    designation: string
    items: KeyValue[];
}


type ExtraSkillsContent = {
    title: string
    extraSkill: PortableTextBlock[]
}


type Ratting = {
    title: string
    ratting: number
}