import { Await, useLoaderData, useNavigate } from "react-router-dom"
import { ProductsSchema } from "./type"
import { Suspense } from "react"
import { Box, Button, Card } from "@mui/material"

const Products = () => {
  const { products } = useLoaderData() as { products: Promise<ProductsSchema >}
  const navigate=useNavigate()
  return (
    <div>
      <h1>products page</h1>
      
      
      <div style={{display:"flex",flexWrap:"wrap",gap:"20px" ,margin:"30px 0"}}>
        <Suspense fallback={<h1>Loading Products... </h1>}>
<Await resolve={products}>
         {
              ( items  )=>{
                return (items as ProductsSchema[]).map(item => (
                  <Card key={item.id} sx={{width:"23%"}}>
                  
                      <div>
                        <img src={item.image} alt={item.title} width={"100%"} height={300} />
                      </div>
                      <Box sx={{padding:"6px"}} >
                        <h2>{item.title}</h2>
                        <p>{item.description.substring(0, 120)}</p>
                        <p>price ${item.price}</p>
                        <Button variant="outlined" sx={{margin:"3px 4px"}} size="large" onClick={() => navigate(`/products/edit/${item.id}`)}>Edit</Button>
                        <Button variant="outlined" sx={{margin:"3px 4px"}} size="large" onClick={() =>   navigate(`/products/${item.id}`)} >See Details</Button>
                      </Box>
                  
         </Card>
  ))
 }

         }
</Await>
        </Suspense>
      </div>

    </div>
  )
}

export default Products
