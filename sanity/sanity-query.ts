import { createClient, groq } from "next-sanity";
import clientconfig from "./config/clientconfig";
import { Project } from "../schematypes/Project";

export async function getProjects(): Promise<Project[]> {
    return createClient(clientconfig).fetch(
        groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
    )
}