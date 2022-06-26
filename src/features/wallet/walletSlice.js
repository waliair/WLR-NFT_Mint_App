import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import Web3 from "web3";
import {ABI} from "../../app/CONTRACT_ABI";

const convertETH = (givenNumber) => (givenNumber/1e18).toFixed(4);
const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545')


export const Web3Wallet = createAsyncThunk(
  'connectWallet',
  async () => {
    const accounts = await web3.eth.requestAccounts();
    const wallet = accounts[0];
    const balance = await web3.eth.getBalance(wallet)

    return [wallet, convertETH(balance)];
  }
)

export const MintNFT = createAsyncThunk(
  'mintNFT',
  async (amount, thunkAPI) => {
    const {c_address: CONTRACT_ADDRESS, address: account} = thunkAPI.getState().app;

    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
    const mintRate = Number(await contract.methods.cost().call())
    const totalAmount = amount * mintRate;
    await contract.methods.mint(account, amount).send({from: account, value: String(totalAmount)})
  }
)

const initialState = {
  address: null,
  balance: 0
}

export const counterSlice = createSlice({
  name: 'userWallet',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(Web3Wallet.fulfilled, (state, action) => {
      state.address = action.payload[0];
      state.balance = action.payload[1];
    })
    builder.addCase(MintNFT.fulfilled, (state, action) => {
      console.log("mint ended");
    })
  }
})

export const getAppData = state => state.app;

export default counterSlice.reducer