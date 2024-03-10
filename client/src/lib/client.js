import sanityClient from "@sanity/client";


export const client=sanityClient({
    projectId: "soe584oa",
    dataset: "production",
    apiVersion: "2024-03-09",
    useCdn:true,
});  