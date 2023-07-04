import { createClient, groq } from "next-sanity";
import clientconfig from "./config/clientconfig";
import { Project } from "../schematypes/Project";

const apiClient = createClient(clientconfig)

export async function getProjects(): Promise<Project[]> {
  return apiClient.fetch(
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


export async function getSkills(): Promise<any> {
  let result = await createClient(clientconfig).fetch(
    groq`*[_type == "skills"][0]{
      _id,
      _createdAt,
      title,
      description,
      content
    }`
  )
  return result
}

export async function getAppData(): Promise<any> {
  let result = await createClient(clientconfig).fetch(
    groq`*[_type == "appdata"][0]{
      _id,
      _createdAt,
      cvname,
      cvrole,
      email,
      objective,
      bannerImage,
      profileImage
    }`
  )
  return result
}