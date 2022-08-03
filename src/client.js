import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "j1c44uxj",
  dataset: "production",
  useCdn: true,
});
