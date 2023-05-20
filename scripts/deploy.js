const main = async () => {
  // const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  // const transactionsContract = await transactionsFactory.deploy("My Transaction", "MTN");
  // await transactionsContract.deployed();
  // console.log("Transactions address: ", transactionsContract.address);

  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowFunding = await CrowdFunding.deploy();
  await crowFunding.deployed();
  console.log("CrowdFunding deployed to:", crowFunding.address);


};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();