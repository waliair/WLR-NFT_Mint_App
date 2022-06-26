import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {useDispatch, useSelector} from "react-redux";
import {getAppData, Web3Wallet} from "../features/wallet/walletSlice";
import Mint from "./Mint";

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: 'unset',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  boxShadow: 'unset',
  color: theme.palette.text.secondary,
}));

const ConnectWallet = () => {
  const dispatch = useDispatch()

  const handleConnectWallet = () => {
    dispatch(Web3Wallet())
  }

  const appData = useSelector(getAppData)

  return (
    <Grid container spacing={2}>
      {
        !appData.address ? (
          <Grid mt={3} container spacing={0}>
            <Grid item={true} xs={12}>
              <Item>
                <Typography sx={{color: 'whitesmoke'}} variant="h5">
                  Before start, please connect your wallet.
                </Typography>
              </Item>
            </Grid>
            <Grid item={true} mt={3} xs={12}>
              <Item>
                <Button onClick={handleConnectWallet} variant="contained" size="large">
                  Connect Wallet
                </Button>
              </Item>
            </Grid>
          </Grid>
        ) : (
          <Mint />
        )

      }
    </Grid>
  )

}

export default ConnectWallet;