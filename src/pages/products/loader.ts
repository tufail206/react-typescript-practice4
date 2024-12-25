import {defer, LoaderFunction } from "react-router-dom"
import { ProductsSchema } from "./type"

const loader:LoaderFunction=async()=>{

    const products = fetch("https://fakestoreapi.com/products").then(response => response.json()) 


    return defer({ products })as unknown as Promise<{ products: ProductsSchema[] }>;
}
export default loader