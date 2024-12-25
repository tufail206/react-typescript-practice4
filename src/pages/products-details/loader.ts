import {defer, LoaderFunction } from "react-router-dom"
import { ProductsSchema } from "../products/type"


const loader:LoaderFunction = ({params}) => {
  const {id}=params

  const product = fetch(`https://fakestoreapi.com/products/${id}`).then(response => response.json())

  return defer({product: product  }) as unknown as Promise<ProductsSchema>
}

export default loader
