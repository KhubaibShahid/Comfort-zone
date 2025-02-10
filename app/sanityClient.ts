import {createClient} from "@sanity/client"


const client = createClient(
    {
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID : "",
    dataset : process.env.NEXT_PUBLIC_SANITY_DATASET ? process.env.NEXT_PUBLIC_SANITY_DATASET : "",
    apiVersion : "2024-12-14",
    useCdn : false,
    token : process.env.NEXT_PUBLIC_SANITY_TOKEN ? process.env.NEXT_PUBLIC_SANITY_TOKEN : ""
}
)

export default client;