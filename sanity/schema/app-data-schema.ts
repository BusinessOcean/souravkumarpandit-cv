import { UserIcon } from '@sanity/icons'


const appdata = {
    name: "appdata",
    title: "AppData",
    type: "document",
    icon: UserIcon,
    fields: [
        {
            name: "cvname",
            title: "Name",
            type: "string"
        },
        {
            name: "cvrole",
            title: "Role",
            type: "string"
        },
        {
            name: "email",
            title: "Email",
            type: "string"
        },
        {
            name: "objective",
            title: "Objective",
            type: "array",
            of: [{ type: 'block' }]
        },
        {
            name: "bannerImage",
            title: "BannerImage",
            type: "image",
            // options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },
        {
            name: "profileImage",
            title: "ProfileImage",
            type: "image",
            // options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
            ]
        },

        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
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

export default appdata;