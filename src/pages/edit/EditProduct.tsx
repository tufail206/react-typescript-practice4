import { Await, Form, useLoaderData, SubmitOptions, useSubmit, useActionData } from "react-router-dom";
import { ProductsSchema } from "../products/type";
import { Suspense } from "react";
import { TextField, Button, Grid, Paper, Typography, Box, CircularProgress } from "@mui/material";
import { Controller, FieldValues, useForm } from "react-hook-form";

const EditProduct = () => {
    // Fetch the product data from loader
    const { product } = useLoaderData() as { product: Promise<ProductsSchema> };
    const submitProduct = useSubmit();
    const actionData = useActionData();

    // Define form data type
    type FormData = {
        title: string;
        description: string;
        price: number;
    };

    // Set up react-hook-form
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    // Form submit handler
    const submit = (data: FieldValues) => {
        const submitOptions: SubmitOptions = {
            method: "PUT",
            encType: "application/json",
        };
        submitProduct(data, submitOptions);
        console.log(actionData);
    };

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 3 }}>
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Edit Product
                </Typography>

                <Suspense fallback={<CircularProgress />}>
                    <Await resolve={product}>
                        {(editItem) => (
                            <Form onSubmit={handleSubmit(submit)}>
                                <Grid container spacing={3}>
                                    {/* Title Input */}
                                    <Grid item xs={12}>
                                        <Controller
                                            control={control}
                                            name="title"
                                            defaultValue={editItem?.title || ""}
                                            rules={{
                                                required: "Title is required",
                                                minLength: { value: 3, message: "Title must be at least 3 characters" },
                                            }}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    label="Title"
                                                    variant="outlined"
                                                    fullWidth
                                                    error={!!errors.title}
                                                    helperText={errors.title?.message}
                                                />
                                            )}
                                        />
                                    </Grid>

                                    {/* Description Input */}
                                    <Grid item xs={12}>
                                        <Controller
                                            control={control}
                                            name="description"
                                            defaultValue={editItem?.description || ""}
                                            rules={{
                                                required: "Description is required",
                                                minLength: { value: 3, message: "Description must be at least 3 characters" },
                                            }}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    label="Description"
                                                    variant="outlined"
                                                    fullWidth
                                                    multiline
                                                    minRows={4}
                                                    error={!!errors.description}
                                                    helperText={errors.description?.message}
                                                />
                                            )}
                                        />
                                    </Grid>

                                    {/* Price Input */}
                                    <Grid item xs={12}>
                                        <Controller
                                            control={control}
                                            name="price"
                                            defaultValue={editItem?.price || 0}
                                            rules={{
                                                required: "Price is required",
                                                min: { value: 100, message: "Price must be at least 100" },
                                            }}
                                            render={({ field }) => (
                                                <TextField
                                                    {...field}
                                                    label="Price"
                                                    type="number"
                                                    variant="outlined"
                                                    fullWidth
                                                    error={!!errors.price}
                                                    helperText={errors.price?.message}
                                                />
                                            )}
                                        />
                                    </Grid>

                                    {/* Submit Button */}
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="primary" fullWidth>
                                            Save Changes
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Await>
                </Suspense>
            </Paper>
        </Box>
    );
};

export default EditProduct;
