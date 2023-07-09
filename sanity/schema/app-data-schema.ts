import { UserIcon } from "@sanity/icons";

const appdata = {
  name: "appdata",
  title: "AppData",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "cvname",
      title: "Name",
      type: "string",
    },
    {
      name: "cvrole",
      title: "Role",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "objective",
      title: "Objective",
      type: "array",
      of: [{ type: "block" }],
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
          type: "string",
        },
      ],
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
          type: "string",
        },
      ],
    },

    {
      name: "social",
      title: "Social",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          // options: { hotspot: true },
          fields: [

            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "string",
            },
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "extrakeyvalue",
      title: "Left Content",
      type: "array",
      of: [
        {
          name: "keyvalue",
          title: "Key Value",
          type: "document",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "value",
              title: "Value",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default appdata;
