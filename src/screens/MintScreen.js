import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { FaEthereum } from "react-icons/fa";
import ConnectWallet from "../components/ConnectWallet";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'unset',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: 'unset',
  color: theme.palette.text.secondary,
}));

const MintScreen = () => {
  return(
    <Container sx={{ height: '70vh', borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center'}} maxWidth="xl" className="gradient">
      <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2}>
          <Grid item={true} xs={12} sx={{display:'flex', justifyContent:'center'}}>
            <Item>
              <Avatar
                alt="WLR NFT"
                src="/preview.gif"
                sx={{ width: 100, height: 100 }}
              />
            </Item>
          </Grid>
          <Grid item={true} xs={12}>
            <Item>
              <Typography sx={{ color: 'white' }} variant="h3" component="div">
                Mint Portal - WLR NFT
              </Typography>
            </Item>
          </Grid>
          <Grid item={true} xs={12}>
            <Item>
              <Typography variant="h5" sx={{ color: 'white' }} gutterBottom>
                Price 0.06 <FaEthereum /> each mint.
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <ConnectWallet />
      </Box>
    </Container>
  )
}

export default MintScreen;