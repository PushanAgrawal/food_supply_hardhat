const { ethers } = require("hardhat")
const { ipfsUp} = require("./app.js")

const DEF_sleep = 1000;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms || DEF_sleep));
}
async function main(){

    const [owner,seed,farmer,process,dist,retail] = await ethers.getSigners();
    const tranc =  await ethers.getContractFactory('transaction');
  

    const tranc_dep = await tranc.deploy();
    console.log("hi")
    let details={
      "name": 'pushan',
      "location": 'biratnagar',
      "chainAddress": 'syx'  ,
      "govtAuthId": 'abcd',
      "items":['rice'],
  }
  

  
    let hash = await ipfsUp(details);
    hash = hash.toString();
    console.log(hash)
    await sleep(30000)
    console.log("hi")
    const addseed = await tranc_dep.addSeedproducer(seed.address,"TX HASH");
    await sleep(10000)
    console.log("hi")
    const addf = await tranc_dep.addFarmer(farmer.address,"tx hash");
    await sleep(10000)
    console.log("hi")
    const addpro = await tranc_dep.addProcessor(process.address,"TX HASH");
    await sleep(10000)
    console.log("hi")
    const adddist = await tranc_dep.addDistributor(dist.address,"TX HASH");
    await sleep(10000)
    console.log("hi")
    const addre = await tranc_dep.addRetailer(retail.address,"TX HASH");
    await sleep(10000)
    console.log("hi")
    // first transaction seed and farmer
    const spxists= await tranc_dep.connect(seed).seedproducerExists(seed.address);
    var addit= await tranc_dep.connect(seed).addItem('1',"ipfs seed hash","rice seeds");
    await sleep(10000)
    var buytx= await tranc_dep.connect(farmer).buyItem('buy hash',seed.address,0,'1');
    await sleep(10000)
    var cnftx= await tranc_dep.connect(seed).confirmItem('buy hash',
    '1',
    "farmer new hash",
    "seed producer new hash",
    ["ipfs seed new hash"],
    ['1'],
    "rice seeds",
    0
    );
    var intshiptx= await tranc_dep.connect(seed).shippingInitiated('1','ship ipfs hash');
    await sleep(10000)
    var intship_cnftx= await tranc_dep.connect(farmer).shippingReceived('1','ship new ipfs  hash');
    await sleep(10000)
    var intpaytx= await tranc_dep.connect(farmer).paymentInitiated('1','pay ipfs hash');
    await sleep(10000)
    var intpay_cnftx= await tranc_dep.connect(seed).paymentReceived('1','pay new ipfs  hash');
    await sleep(10000)


    //// second trasaction farmer and processor
    var addit= await tranc_dep.connect(farmer).addItem('2',"ipfs rice hash","rice");
    await sleep(10000)
    var buytx= await tranc_dep.connect(process).buyItem('buy hash',farmer.address,1,'2');
    await sleep(10000)
    var cnftx= await tranc_dep.connect(farmer).confirmItem('buy hash',
    '2',
    "proccesor new hash",
    "farmer producer new hash",
    ["ipfs rice new hash"],
    ['2'],
    "rice ",
    1
    );
    
    
    var intshiptx= await tranc_dep.connect(farmer).shippingInitiated('2','ship ipfs hash');
    await sleep(10000)
    var intship_cnftx= await tranc_dep.connect(process).shippingReceived('2','ship new ipfs  hash');
    await sleep(10000)
    
    var intpaytx= await tranc_dep.connect(process).paymentInitiated('2','pay ipfs hash');
    await sleep(10000)
    var intpay_cnftx= await tranc_dep.connect(farmer).paymentReceived('2','pay new ipfs  hash');
    await sleep(10000)
    
    
    // / third transaction processor and distributor
    var addit= await tranc_dep.connect(process).addItem('3',"ipfs rice packet hash","rice packet");
    await sleep(10000)
    
    
    var buytx= await tranc_dep.connect(dist).buyItem('buy hash',process.address,2,'3');
    await sleep(10000)
    
    var cnftx= await tranc_dep.connect(process).confirmItem('buy hash',
                                                     '3',
                                                     "processor new hash",
                                                     "distributor new hash",
                                                     ["ipfs rice packet new hash"],
                                                     ['3'],
                                                     "rice packet ",
                                                     2
                                                     );
    await sleep(10000)
    
    
    var intshiptx= await tranc_dep.connect(process).shippingInitiated('3','ship ipfs hash');
    await sleep(10000)
    
    var intship_cnftx= await tranc_dep.connect(dist).shippingReceived('3','ship new ipfs  hash');
    await sleep(10000)
    
    var intpaytx= await tranc_dep.connect(dist).paymentInitiated('3','pay ipfs hash');
    await sleep(10000)
    
    var intpay_cnftx= await tranc_dep.connect(process).paymentReceived('3','pay new ipfs  hash');
    await sleep(10000)

    
    
    // // 4th transcation distributor and retailer
    var addit= await tranc_dep.connect(dist).addItem('4',"ipfs rice hash","rice packet");
    await sleep(10000)
    
    var buytx= await tranc_dep.connect(retail).buyItem('buy hash',dist.address,3,'4');
    await sleep(10000)
    
    var cnftx= await tranc_dep.connect(dist).confirmItem('buy hash',
                                                     '4',
                                                     "distributor new hash",
                                                     "retailer producer new hash",
                                                     ["ipfs rice new hash"],
                                                     ['4'],
                                                     "rice ",
                                                     3
                                                     );
    await sleep(10000)
    
    var intshiptx= await tranc_dep.connect(dist).shippingInitiated('4','ship ipfs hash');
    await sleep(10000)
    
    var intship_cnftx= await tranc_dep.connect(retail).shippingReceived('4','ship new ipfs  hash');
    await sleep(10000)
    
    var intpaytx= await tranc_dep.connect(retail).paymentInitiated('4','pay ipfs hash');
    await sleep(10000)
    
    var intpay_cnftx= await tranc_dep.connect(dist).paymentReceived('4','pay new ipfs  hash');
    await sleep(10000)
    
    
    // addit= await tranc_dep.connect(farmer).addItem('ipfs hash',"rice");

    console.log(tranc_dep);
  
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
