import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { red } from "@mui/material/colors";

import Like from "./Like";

export default function Cards({item, pageTheme }) {

  const [open, setOpen] = React.useState(false);
  <IconButton
    aria-label="expand row"
    size="small"
    onClick={() => setOpen(!open)}
  >
    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
  </IconButton>;

  return (
    <>
      <Card
        style={{...pageTheme}}
        sx={{
          display: "inline-block",
          maxHeight: 1000,
          margin: "auto",
          height: "auto",
          maxWidth: 500,
          margin: 3,
        }}
        key={item.url}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              News
            </Avatar>
          }
          title={item.title}
          subheader={item.publishedAt}
        />
        <CardMedia
          component="img"
          height="194"
          image={item.urlToImage}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" style={pageTheme}>
            {item.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Like value={item.url} style={pageTheme} />
          </IconButton>
        </CardActions>
     
      </Card>
    </>
  );
}
