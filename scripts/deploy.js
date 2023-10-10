const { ethers } = require("hardhat")
function delay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time)
    });
  }
async function main(){

    const [owner,seed,farmer,process,dist,retail] = await ethers.getSigners();
    const tranc =  await ethers.getContractFactory('transaction');
  

    const tranc_dep = await tranc.deploy();
  
    const addf = await tranc_dep.addFarmer(farmer.address,"TX HASH");
    const addseed = await tranc_dep.addSeedproducer(seed.address,"TX HASH");
    const addpro = await tranc_dep.addProcessor(process.address,"TX HASH");
    const adddist = await tranc_dep.addDistributor(dist.address,"TX HASH");
    const addre = await tranc_dep.addRetailer(retail.address,"TX HASH");

    // first transaction seed and farmer
    const spxists= await tranc_dep.connect(seed).seedproducerExists(seed.address);
    var addit= await tranc_dep.connect(seed).addItem('1',"ipfs seed hash","rice seeds");
    var buytx= await tranc_dep.connect(farmer).buyItem('buy hash',seed.address,0,'1');
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
    var intship_cnftx= await tranc_dep.connect(farmer).shippingReceived('1','ship new ipfs  hash');
    var intpaytx= await tranc_dep.connect(farmer).paymentInitiated('1','pay ipfs hash');
    var intpay_cnftx= await tranc_dep.connect(seed).paymentReceived('1','pay new ipfs  hash');

    //// second trasaction farmer and processor
    var addit= await tranc_dep.connect(farmer).addItem('2',"ipfs rice hash","rice");
    var buytx= await tranc_dep.connect(process).buyItem('buy hash',farmer.address,1,'2');
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
    var intship_cnftx= await tranc_dep.connect(process).shippingReceived('2','ship new ipfs  hash');
    var intpaytx= await tranc_dep.connect(process).paymentInitiated('2','pay ipfs hash');
    var intpay_cnftx= await tranc_dep.connect(farmer).paymentReceived('2','pay new ipfs  hash');

    /// third transaction processor and distributor
    var addit= await tranc_dep.connect(process).addItem('3',"ipfs rice packet hash","rice packet");
    var buytx= await tranc_dep.connect(dist).buyItem('buy hash',process.address,2,'3');
    var cnftx= await tranc_dep.connect(process).confirmItem('buy hash',
                                                     '3',
                                                     "processor new hash",
                                                     "distributor new hash",
                                                     ["ipfs rice packet new hash"],
                                                     ['3'],
                                                     "rice packet ",
                                                     2
                                                     );
    var intshiptx= await tranc_dep.connect(process).shippingInitiated('3','ship ipfs hash');
    var intship_cnftx= await tranc_dep.connect(dist).shippingReceived('3','ship new ipfs  hash');
    var intpaytx= await tranc_dep.connect(dist).paymentInitiated('3','pay ipfs hash');
    var intpay_cnftx= await tranc_dep.connect(process).paymentReceived('3','pay new ipfs  hash');

    // 4th transcation distributor and retailer
    var addit= await tranc_dep.connect(dist).addItem('4',"ipfs rice hash","rice packet");
    var buytx= await tranc_dep.connect(retail).buyItem('buy hash',dist.address,3,'4');
    var cnftx= await tranc_dep.connect(dist).confirmItem('buy hash',
                                                     '4',
                                                     "distributor new hash",
                                                     "retailer producer new hash",
                                                     ["ipfs rice new hash"],
                                                     ['4'],
                                                     "rice ",
                                                     3
                                                     );
    var intshiptx= await tranc_dep.connect(dist).shippingInitiated('4','ship ipfs hash');
    var intship_cnftx= await tranc_dep.connect(retail).shippingReceived('4','ship new ipfs  hash');
    var intpaytx= await tranc_dep.connect(retail).paymentInitiated('4','pay ipfs hash');
    var intpay_cnftx= await tranc_dep.connect(dist).paymentReceived('4','pay new ipfs  hash');
    
    
    // addit= await tranc_dep.connect(farmer).addItem('ipfs hash',"rice");

    console.log(tranc_dep);
  
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
