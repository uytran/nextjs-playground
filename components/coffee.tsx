import Image from './image'
import cn from 'classnames'

export type CoffeeProps = {
    productName: string
    price: number | null
    image: string
    longDescription: string
    productStatus: string
    urlPattern: string
  }
  
  export default function Coffee({ productName, price, image, longDescription, productStatus }: CoffeeProps) {
    return (
        <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
                {productName}
            </h1>
            <h3>
                {price}, {productStatus}
            </h3>
            <Image
                width={2000}
                height={1000}
                alt={`Image for ${productName}`}
                src={image}
                className={cn('shadow-small', {
                    'hover:shadow-medium transition-shadow duration-200': productName,
                })}
            />
            <p>
                {longDescription}
            </p>
        </div>
    )
  }