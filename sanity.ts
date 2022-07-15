import {
  createClient,
  createCurrentUserHook,
  createPreviewSubscriptionHook,
} from 'next-sanity'

console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2022-07-02',
}

export const sanityClient = createClient(config)

export const useCurrentUser = createCurrentUserHook({
  projectId: config.projectId as string,
  dataset: config.dataset,
})
