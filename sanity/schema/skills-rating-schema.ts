import { UserIcon } from "@sanity/icons";

const skillrating = {
  name: "skillrating",
  title: "Skill Rating",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "skill_sets",
      title: "Skill Sets",
      type: "array",

      of: [
        {
          name: "skill_item",
          title: "Skill Item",
          type: "document",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "percent",
              title: "Percent",
              type: "number",
            },
          ]
        }
      ]
    }


  ],
};

export default skillrating;
