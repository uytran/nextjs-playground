import { contentTypes, Coffee } from '../models'
import { DeliveryClient } from '@kontent-ai/delivery-sdk'
import { Coffee as ViewModelCoffee } from '../viewmodels/coffee'
import pkg from '../package.json'

const sourceTrackingHeaderName = 'X-KC-SOURCE'

const client = new DeliveryClient({
  projectId: process.env.KONTENT_PROJECT_ID ?? '',
  previewApiKey: process.env.KONTENT_PREVIEW_API_KEY,
  globalHeaders: (_queryConfig) => [
    {
      header: sourceTrackingHeaderName,
      value: `@vercel/next.js/example/${pkg.name};${pkg.version}`,
    },
  ],
})

function parseCoffee(coffee: Coffee): ViewModelCoffee {
    return {
        productName: coffee.elements.product_name.value,
        price: coffee.elements.price.value,
        image: coffee.elements.image.value[0].url,
        longDescription: coffee.elements.long_description.value,
        productStatus: coffee.elements.product_status.value[0].name,
        urlPattern: coffee.elements.url_pattern.value
    }
  }

export async function getAllCoffeeSlugs() {
  return await client
    .items<Coffee>()
    .type(contentTypes.coffee.codename)
    .elementsParameter(['url_pattern'])
    .toPromise()
    .then((response) =>response.data.items.map((coffee) => coffee.elements.url_pattern.value)
    )
}

export async function getCoffeeBySlug(urlPattern: string, preview: boolean) {
  return await client
    .items<Coffee>()
    .type(contentTypes.coffee.codename)
    .queryConfig({
      usePreviewMode: !!preview,
    })
    .equalsFilter('elements.url_pattern', urlPattern)
    .toPromise()
    .then((response) => parseCoffee(response.data.items[0]))
}

export async function getCoffeeBySlugTest() {
  return await client
  .items<Coffee>()
  .type(contentTypes.coffee.codename)
  .elementsParameter(['url_pattern'])
  .toPromise()
  .then((response) =>console.log(response.data.items.map((coffee) => coffee.elements.url_pattern.value))
  )
  }