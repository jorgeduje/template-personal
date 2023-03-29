import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
const ProductsList = ({ products }) => {
  const navigate = useNavigate();
  return (
    <Grid container rowSpacing={2} marginTop="50px">
      {products.map((product) => (
        <Grid
          item
          xs={12}
          md={6}
          xl={4}
          key={product.id}
          sx={{ paddingLeft: "0 !important" }}
        >
          <Card sx={{ maxWidth: 350, margin: "auto", height: "300px" }}>
            <CardMedia
              sx={{ height: 140 }}
              image={product.img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                onClick={() => navigate(`/products/${product.id}`)}
                sx={{
                  color: "white",
                  textTransform: "none",
                  textShadow: "2px 2px 2px grey",
                }}
              >
               Ver detalle
              </Button>
              {/* <Button size="small" variant="contained">Learn More</Button> */}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
