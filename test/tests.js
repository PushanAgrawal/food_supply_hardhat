const {expect} = require ('chai');
const { ethers } = require('hardhat');


describe("food contract ",  function () {
    let transaction ;
    let cont;
    let owner;
    let seedProducer;
    let farmer;
    let processor;
    let distributor;
    let retailer;


    beforeEach(async function() {
        transaction = await ethers.getContractFactory("transaction");
        [owner,seedProducer,farmer,processor,distributor,retailer] = await ethers.getSigners()
        cont=await transaction.deploy();
    
    });

    describe("deploy contract",  function (){

        it("should set the right owner", async function() { 
            expect( await cont.owner()).to.equal(owner.address);
        });
    }) ;
    describe("set all correct nodes",  function (){
        it("should set the seed producer", async function() { 
            const tx = await cont.addSeedproducer(seedProducer.address, "seedProducerData");
            console.log("Seed Producer Exists:", await cont.seedproducerExists(seedProducer.address));
            expect(await cont.seedproducerExists(seedProducer.address)).to.equal("seedProducerData");
        });

        it("should set the farmer", async function() { 
            const tx = await cont.addFarmer(farmer.address, "faefafafdf");
            console.log("daslnda",await cont.farmerExists(farmer.address));
            expect( await cont.farmerExists(farmer.address)).to.equal("faefafafdf");
        });
        
        
        it("should set the processor", async function() { 
            const tx = await cont.addProcessor(processor.address, "processorData");
            console.log("Processor Exists:", await cont.processorExists(processor.address));
            expect(await cont.processorExists(processor.address)).to.equal("processorData");
        });
        
        // For Distributor
        it("should set the distributor", async function() { 
            const tx = await cont.addDistributor(distributor.address, "distributorData");
            console.log("Distributor Exists:", await cont.distributorExists(distributor.address));
            expect(await cont.distributorExists(distributor.address)).to.equal("distributorData");
        });
        
        // For Retailer
        it("should set the retailer", async function() { 
            const tx = await cont.addRetailer(retailer.address, "retailerData");
            console.log("Retailer Exists:", await cont.retailerExists(retailer.address));
            expect(await cont.retailerExists(retailer.address)).to.equal("retailerData");
        });
        
    }) ;


   

});