import * as styles from "./styles"
import { IapiPaginationItem } from "../../../utils/ApiRequests.d"
import Image from "next/image"

interface Iprops {
  data: IapiPaginationItem
}

function formatPrice(price: number){
  return price.toLocaleString("pt-br", {
    currency: "brl",
    maximumFractionDigits: 2,
    style: "currency"
  })
}

export default function WineCard( { data }:Iprops ){
  return (
    <styles.Container>
      <article>
        <section className="wine_image_sect">
          <Image
            src={data.image}
            width={123}
            height={181}
            alt={data.name}
            placeholder="blur"
            blurDataURL={data.image}
          />
        </section>
        <section className="wine_info_sect">
          <h2>
            <a href="#">
              {data.name}
            </a>
          </h2>

          <div>
            <p>{formatPrice(data.price)}</p>
            <span>{data.discount}% OFF</span>
          </div>
          <div>
            <p>SÓCIO WINE</p>
            <span>
              {formatPrice(data.priceMember)}
            </span>
          </div>
          <div>
            <p>
              NÃO SÓCIO {formatPrice(data.priceNonMember)}
            </p>
          </div>
        </section>
      </article>
    </styles.Container>
  )
}