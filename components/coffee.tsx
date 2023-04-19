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
        <div className="container">
      <article className="product-detail">
        <div className="row">
          <div className="col-md-12">
            <header>
              <h2>{productName}</h2>
            </header>
          </div>
        </div>
        <div className="row-fluid">
          <div className="col-lg-7 col-md-6">
            <figure className="image">
            <Image
                width={350}
                height={350}
                alt={`Image for ${productName}`}
                src={image}
                className={cn('shadow-small', {
                    'hover:shadow-medium transition-shadow duration-200': productName,
                })}
            />
            </figure>
            <div className="description">
            {longDescription}
              <div className="product-detail-properties">
                <h4>Parameters</h4>
                <dl className="row">
                  <dt className="col-xs-12 col-sm-4">Price</dt>
                  <dd className="col-xs-12 col-sm-8">{price}</dd>
                  <dt className="col-xs-12 col-sm-4">Status</dt>
                  <dd className="col-xs-12 col-sm-8">{productStatus}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
    )
  }