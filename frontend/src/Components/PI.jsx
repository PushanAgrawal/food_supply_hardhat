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
const PI = () => {

  const [formData, setFormData] = useState({  id:'',  paymentid:'', modeofpayement:'',senderaccount:'',reciveraccount:'',trancId:''});
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
        
        "payemntid":formData.paymentid,
        "modeofpayemnt ":formData.modeofpayement,
        'senderaccount':formData.senderaccount,
        'reciveraccount':formData.reciveraccount,
        'trancId':formData.trancId,
        'status':'initiated'
        
    }
    let hash = await ipfsUp(details);
    console.log("hash: "+hash)
      try {
        const transactionResponse = contract.paymentInitiated(formData.id, hash);
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
        label="Transaction Id"
        variant="outlined"
        fullWidth
        name="trancId"
        margin="normal"
        value={formData.trancId}
        onChange={handleInputChange}
        />
 
      <TextField
        label="Mode of Payment"
        variant="outlined"
        fullWidth
        name='modeofpayement'
        margin="normal"
        value={formData.modeofpayement}
        onChange={handleInputChange}
        />
        <TextField
        label="Payment Id "
        variant="outlined"
        fullWidth
        name='paymentid'
        margin="normal"
        value={formData.paymentid}
        onChange={handleInputChange}
        />
      
        <TextField
        label="Sender Account "
        variant="outlined"
        fullWidth
        name='senderaccount'
        margin="normal"
        value={formData.senderaccount}
        onChange={handleInputChange}
        />
        <TextField
        label="Receiver Account "
        variant="outlined"
        fullWidth
        name='reciveraccount'
        margin="normal"
        value={formData.reciveraccount}
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
        PAYMENT INITIATED
      </Button>
    </form>
    </Card>
    
    
          </Box>
            </Box>
  )
}

export default PI