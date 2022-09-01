import { InferGetStaticPropsType } from "next"
import { apiPagination } from "../utils/apiRequests"
import WineList from "../components/molecule/WineList"

export async function getStaticProps(){
  const data = await apiPagination()

  return {
    props: {
      data
    }
  }
}

/* 
  Foi utilizado o seguinte link para a tipagem do staticProps:
  https://stackoverflow.com/questions/65078245/how-to-make-next-js-getstaticprops-work-with-typescript
*/
export default function HomePage({ data }: InferGetStaticPropsType<typeof getStaticProps>){
  return (
    <>
      <header>

      </header>

      <main>
        <div>
          <span>{data.totalItems}</span> produtos encontrados
        </div>

        <WineList
          wineList={data.items}
        />
      </main>
    
    </>
  )
}