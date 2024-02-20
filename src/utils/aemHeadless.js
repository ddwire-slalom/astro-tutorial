import AEMHeadless from '@adobe/aem-headless-client-nodejs';

export const getAEMHeadless = () => {
  const aemHeadlessClient = new AEMHeadless({
    serviceURL: import.meta.env.AEM_HOST_URI,
    endpoint: 'content/graphql/endpoint.gql',
    auth: [import.meta.env.AEM_USER, import.meta.env.AEM_PASS],
  });
  return aemHeadlessClient;
}

export async function getAllArticles() {
  const aemHeadlessClient = getAEMHeadless();
  
  const blogEntries = await aemHeadlessClient.runPersistedQuery('slalom-aem-commons/articles-all');
  return blogEntries
}