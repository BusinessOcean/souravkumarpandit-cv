// import { PortableTextBlock } from 'sanity';
// type CareerObjective = {
//     name: string
//     designation: string
//     careerObjective: PortableTextBlock[];
// }

// type SectionTitleDescription = {
//     title: string
//     description: PortableTextBlock[];
// }

const careerskills = {
    name: "skills",
    title: "Skills",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "array",
            of: [{ type: 'block' }]
        },

        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "document",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string"
                        },
                        {
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: { hotspot: true },
                            fields: [
                                {
                                    name: "alt",
                                    title: "Alt",
                                    type: "string"
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ]
}

export default careerskills;