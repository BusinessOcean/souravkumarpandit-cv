import { PortableTextBlock } from 'sanity';

type Image = {
    alt: string
    imageUrl: string

}

type ImagesGallary = Image[]

type ImageContent = {
    title: string
    imageUrl: string
    link: string
    description: PortableTextBlock[];
}