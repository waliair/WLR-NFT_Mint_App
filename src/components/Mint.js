import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAppData, MintNFT} from "../features/wallet/walletSlice";

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: 'unset',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: 'unset',
  color: theme.palette.text.secondary,
}));

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  }
];

const Mint = () => {
  const dispatch = useDispatch()
  const [mintAmount, setMintAmount] = useState(1);
  const { address, balance } = useSelector(getAppData);
  const handleMint = () => {
    dispatch(MintNFT(mintAmount))
  }

  return (
    <Grid container spacing={0}>
      <Grid item={true} mt={3} xs={12}>
        <Item>
          <Typography variant="h6" sx={{color: 'chartreuse'}} border="1px solid orange" borderRadius="10px" fontSize="14px" gutterBottom>
            Connected Wallet Address: {address}
          </Typography>
        </Item>
        <Item>
          <Typography variant="h6" sx={{color: 'chartreuse'}} border="1px solid orange"  borderRadius="10px" fontSize="14px" gutterBottom>
            Your Current Balance is: {balance} ETH
          </Typography>
        </Item>

      </Grid>
      <Grid item={true} mt={3} xs={12}>
        <Item>
          <Typography variant="h6" sx={{color: 'whitesmoke'}} gutterBottom>
            Plaese select the amount of NFTs to mint.
          </Typography>
        </Item>
        <Item>
          <Slider
            name="amount"
            aria-label="Always visible"
            defaultValue={1}
            step={1}
            onChange={(e) => setMintAmount(e.target.value)}
            min={1}
            marks={marks}
            max={5}
            valueLabelDisplay="on"
            sx={{
              color: 'white',
              '& .MuiSlider-markLabel': {
                color: 'white',
              },
              '& .MuiSlider-valueLabel': {
                backgroundColor: 'white',
                color: 'black'
              }
            }}
          />
        </Item>
      </Grid>
      <Grid item={true} xs={12}>
        <Item>
          {
            balance >= 0.06
              ? (
                <Button onClick={handleMint} sx={{width: '190px', fontSize: '12px'}} variant="contained" color="success">Mint ({mintAmount})</Button>
              )
              : (
                <Button onClick={handleMint} sx={{width: '190px', fontSize: '12px'}} variant="contained" disabled={true} color="success">Insufficient Balance</Button>
              )
          }

        </Item>
      </Grid>
    </Grid>
  )
}

export default Mint;