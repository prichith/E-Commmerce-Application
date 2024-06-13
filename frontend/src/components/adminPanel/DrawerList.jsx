import * as React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { fetchGroupProducts } from '../../redux/products';
import './admin.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state) => state.categories); // all categories

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  function fetchProducts(category){
    dispatch(fetchGroupProducts(category));
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <h3 className='drawerhead'> Add new Category</h3>
      <Divider />

      <h3 className='drawerhead'> Show Products</h3>
      <List>
        {allCategories.map((category, index) => (
          <ListItem key={category._id} disablePadding>
            <ListItemButton className='drawerFlex' onClick={()=> fetchProducts(category.name)} >
              <img className='drawerCatImg' src={`http://localhost:3002/images/categories/${category.image}`}/>
              <ListItemText primary={category.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button className='hoverEffect' onClick={toggleDrawer(true)}>categories</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
