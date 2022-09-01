import { IapiPaginationItem } from "../../../utils/ApiRequests.d"
import WineCard from "../../atom/WineCard"
import CartAddButton from "../../atom/CartAddButton"
import * as styles from "./styles"

interface Iprops{
  wineList: Array<IapiPaginationItem>
}

export default function WineList({wineList: data}:Iprops){
  const liComponents = data.map( wine => (
    <li key={wine.id} aria-label={wine.name} >
      <WineCard data={wine}/>

      <CartAddButton />
    </li>
  ))
  return(
    <styles.Container>
      {liComponents}
    </styles.Container>
  )
}