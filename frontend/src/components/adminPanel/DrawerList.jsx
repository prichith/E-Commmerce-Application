import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGroupProducts } from "../../redux/products";
import { setNewCategoryForm } from "../../redux/adminPage";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./admin.css";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state) => state.categories); // all categories

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  function fetchProducts(category) {
    dispatch(fetchGroupProducts(category));
  }

  function formOpen() {
    // add new category form
    dispatch(setNewCategoryForm(true));
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Divider />
      <h3 className="drawerhead">All Categories</h3>
      <List>
        {allCategories.map((category, index) => (
          <ListItem key={category._id} disablePadding>
            <ListItemButton
              className="drawerFlex"
              onClick={() => fetchProducts(category.name)}
            >
              <img
                className="drawerCatImg"
                src={`http://localhost:3002/images/categories/${category.image}`}
              />
              <ListItemText primary={category.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <h3 className="drawerhead">Add New</h3>
      <div className="catAddButton">
        <button className="addCategoryButton" onClick={formOpen}>
          Add Category
        </button>
      </div>
    </Box>
  );

  return (
    <div>
      <Button className="hoverEffect" onClick={toggleDrawer(true)}>
        categories
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
