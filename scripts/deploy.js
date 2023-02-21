async function main() {
  const VerifySignature = await ethers.getContractFactory("VerifySignature");

  // Start deployment, returning a promise that resolves to a contract object
  const VerifySignature_ = await VerifySignature.deploy();
  console.log("Contract address:", VerifySignature_.address);


}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });