import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import { ipfsUp } from './ipfs';
import { useState } from 'react';
import { abi , contractAddress } from './constants';
import { ethers } from './ethers-5.6.esm.min';
function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}`)
    return new Promise((resolve, reject) => {
        try {
            provider.once(transactionResponse.hash, (transactionReceipt) => {
                console.log(
                    `Completed with ${transactionReceipt.confirmations} confirmations. `
                )
                resolve()
            })
        } catch (error) {
            reject(error)
        }
    })
  }
const Register = () => {
    
  const [formData, setFormData] = useState({ name: '', location: '', id:'',Add:''});
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    var details={
      "Transaction_id":"1",
      "Mode_of_payment":"Ethereum",
      "Status": "pending",
      "Payment_id":"1",
    "Sender_account":"0xA1fc730522D5846A98FC0Db82BFE931CC42c0ee9",
    "Receiver_account":"0x02869714153A46E861FaaD428b5fa32F05528190"
    }
    let hash = await ipfsUp(details);
    console.log(hash)

    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send('eth_requestAccounts', [])
      console.log("hi")
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, abi, signer)
      try {
        const transactionResponse = contract.addSeedproducer('0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',hash);
        await listenForTransactionMine(transactionResponse, provider)
        await transactionResponse.wait(1)
      } catch (error) {
        console.log(error)
      }
    } 

    // Add your logic to handle form submission without reloading the page
    
  };
  return (
    <Box
    
    display="flex"
    justifyContent="center"
    alignItems="center"
    

    >

    <Box
    width={1500}
    display='flex'
    flex-direction= 'row'
    justify-content='space-around'
   

    >
      <Card variant="outlined">

    <form onSubmit={handleSubmit} style={{margin:'6px'}}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        name='name'
        margin="normal"
        value={formData.name}
        onChange={handleInputChange}
        />
      <TextField
        label="Id"
        variant="outlined"
        fullWidth
        name="id"
        margin="normal"
        value={formData.id}
        onChange={handleInputChange}
        />
      <TextField
        label="Wallet Address"
        variant="outlined"
        fullWidth
        name='Add'
        margin="normal"
        value={formData.Add}
        onChange={handleInputChange}
        />
        <TextField
        label="location"
        variant="outlined"
        fullWidth
        name='location'
        margin="normal"
        value={formData.location}
        onChange={handleInputChange}
        />
   
     
      {/* <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Role</InputLabel>
        <Select
          label="Role"
          // value={role}
          // onChange={(e) => setRole(e.target.value)}
          >
          <MenuItem value="developer">1</MenuItem>
          <MenuItem value="designer">Designer</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
        </Select>
      </FormControl> */}
      <Button type="submit" variant="contained" color="primary">
        ADD SEED PRODUCER
      </Button>
    </form>
    </Card>
    
    
          </Box>
            </Box>
  )
}

export default Register