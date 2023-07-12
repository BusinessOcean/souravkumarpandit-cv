import { createClient, groq } from "next-sanity";
import clientconfig from "./config/clientconfig";
import { Project } from "../schematypes/Project";

const apiClient = createClient(clientconfig);

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
  );
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
  );
  return result;
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
      profileImage,
      extrakeyvalue,
      social,
    }`
  );
  return result;
}


export async function getProgramingSkills(): Promise<any> {
  let result = await createClient(clientconfig).fetch(
    groq`*[_type == "skillrating"][0]{
      _id,
      _createdAt,
      title,
      skill_sets,
    }`
  );

  return result;
}


export async function getSoftwareSkills(): Promise<any> {
  let result = await createClient(clientconfig).fetch(
    groq`*[_type == "skillrating"][1]{
      _id,
      _createdAt,
      title,
      skill_sets,
    }`
  );
  return result;
}


export async function getExtraSkills(): Promise<any> {
  let result = await createClient(clientconfig).fetch(
    groq`*[_type == "skillstags"]{
      _id,
      _createdAt,
      label,
    }`
  );
  return result;
}
