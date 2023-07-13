
const companysList = {
    name: "companys",
    title: "Companys",
    type: "document",
    fields: [

        {
            name: "companyTitle",
            title: "Company Title",
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

export default companysList;
