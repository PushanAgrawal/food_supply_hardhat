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
const AI = () => {
    
  const [formData, setFormData] = useState({ type: '', location: '', id:'',prize:'',qunatitiy:''});
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
   

    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send('eth_requestAccounts', [])
      console.log("hi")
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, abi, signer)
      var details={
        "type":formData.name,
        "geoLocation":formData.location,
        "id":formData.id,
        "prize":formData.prize,
        "currOwner":signer.getAddress()
    }
    let hash = await ipfsUp(details);
    console.log("hash: "+hash)
      try {
        const transactionResponse = contract.addItem(hash, formData.id, formData.type);
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
        label="Id"
        variant="outlined"
        fullWidth
        name="id"
        margin="normal"
        value={formData.id}
        onChange={handleInputChange}
        />
      <TextField
        label="Type"
        variant="outlined"
        fullWidth
        name='type'
        margin="normal"
        value={formData.type}
        onChange={handleInputChange}
        />
        <TextField
        label="qunatity"
        variant="outlined"
        fullWidth
        name='qunatitiy'
        margin="normal"
        value={formData.qunatitiy}
        onChange={handleInputChange}
        />
        <TextField
        label="geoLocation"
        variant="outlined"
        fullWidth
        name='location'
        margin="normal"
        value={formData.location}
        onChange={handleInputChange}
        />
        <TextField
        label="prize"
        variant="outlined"
        fullWidth
        name='prize'
        margin="normal"
        value={formData.prize}
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
        ADD ITEM
      </Button>
    </form>
    </Card>
    
    
          </Box>
            </Box>
  )
}

export default AI