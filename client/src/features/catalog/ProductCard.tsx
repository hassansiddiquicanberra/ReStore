import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
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
        height="130"
        image={product.pictureUrl}
        alt={product.name}
        sx={{ bgcolor: "primary.light" }}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5" component="div">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Link to={`/catalog/${product.id}`}>
          <Button size="small" sx={{ textDecoration: "none" }}>
            View
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
