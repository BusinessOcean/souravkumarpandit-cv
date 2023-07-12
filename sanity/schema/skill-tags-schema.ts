import { AiFillTag } from "react-icons/ai";

const skillstag = {
  name: "skillstags",
  title: "Skill Tags",
  type: "document",
  icon: AiFillTag,
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "icon",
      title: "icon",
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
  ]


};

export default skillstag;
