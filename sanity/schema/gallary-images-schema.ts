
const gallaryImages = {
    name: "gallaryimages",
    title: "Gallary Images",
    type: "document",
    fields: [

        {
            name: "tags",
            title: "Tag Name",
            type: "array",
            of: [{ type: 'string' }],
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

export default gallaryImages;
