import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import {
  getAllCoffeeSlugs,
  getCoffeeBySlug,
  getCoffeeBySlugTest,
} from '../../lib/api'
import Coffee from '../../components/coffee'
import Head from 'next/head'
import { Coffee as CoffeeModel } from '../../viewmodels/coffee'

type CoffeeProps = {
  coffee: CoffeeModel
  preview: boolean
}

export default function Post({ coffee, preview }: CoffeeProps) {
  const router = useRouter()
  if (!router.isFallback && !coffee?.urlPattern) {
    console.log(coffee);
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <div>Loading...</div>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {`${coffee.productName} | Next.js Example`}
                </title>
                <meta property="og:image" content={coffee.image} />
              </Head>
              <Coffee 
                productName={coffee.productName}
                price = {coffee.price}
                longDescription= {coffee.longDescription}
                image = {coffee.image}
                productStatus= {coffee.productStatus}
                urlPattern = {coffee.urlPattern}
               />
            </article>
            <SectionSeparator />
          </>
        )}
      </Container>
    </Layout>
  )
}

type StaticProps = {
  params: {
    urlPattern: string
  }
  preview: boolean | null
}

export async function getStaticProps({ params, preview = null }: StaticProps) {
  
  return await Promise.all([
    getCoffeeBySlug(params.urlPattern, preview ?? false),
  ]).then((values) => ({
    props: {
      coffee: values[0],
      preview,
    },
  }))
}

export async function getStaticPaths() {
  await getCoffeeBySlugTest();
  const slugs = await getAllCoffeeSlugs()
  return {
    paths: slugs.map(
      (urlPattern) =>
        ({
          params: {
            urlPattern,
          },
        } || [])
    ),
    fallback: false,
  }
}