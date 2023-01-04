import { LoadingButton } from "@mui/lab";
import {
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Link,
} from "@mui/material";
import { ProductModel } from "../../app/models/productModel";

interface Props {
  product: ProductModel;
}

function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: "secondary.main",
            }}
          >
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
      />

      <CardMedia
        component="img"
        image={product.pictureUrl}
        alt={product.name}
        sx={{
          height: 140,
          objectFit: "contain",
          bgcolor: "primary.light",
        }}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <LoadingButton size="small">Add To Cart</LoadingButton>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
