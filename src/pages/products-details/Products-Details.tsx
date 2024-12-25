import { Await, useLoaderData } from "react-router-dom"
import { ProductsSchema } from "../products/type"
import { Suspense } from "react"
import { Button, Card, CardMedia } from "@mui/material"


const Products_Details = () => {
  const { product }=useLoaderData() as {product : Promise<ProductsSchema>}
  return (
    <div>
      <h1>products details</h1>
      <Suspense fallback={<h1>Product Details Loading...</h1>}>
        <Await resolve={product}>
          {
            (productData) => {
              return (
                <Card sx={{margin:"20px",display:"flex",gap:"20px"}}>
                  
                  <CardMedia sx={{width:"400px"
                  }}>
                    <img src={productData.image} alt="" width={"100%"} height={400} />
                  </CardMedia>
                  <div style={{width:"60%"}}>
                    <h2>{productData.title}</h2>
                    <p style={{margin:"6px 0",letterSpacing:"2px"}}>{productData.description}</p>
                    <p>price ${productData.price}</p>
                    <h4>total :{productData.rating.count}</h4>
                    <h4>rate : {productData.rating.rate}</h4>
                    <Button variant="outlined" size="large" sx={{margin:"6px 0"}}> Add to Cart</Button>
                  </div>

                </Card>
              )
            }
          }

</Await>
      </Suspense>
    </div>
  )
}

export default Products_Details
