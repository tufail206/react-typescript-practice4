export type ProductsSchema={
    id: number,
  image:string,
    title: string,
    price: number,
    category: string,
  description: string,
  rating:{
    rate: number,
    count: number
  }
}