const { ethers } = require('ethers');
require("dotenv").config()
// initializing blockchain to call smart contract function 
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS_1 = process.env.CONTRACT_ADDRESS;
// Contract ABI
const { abi } = require("./artifacts/contracts/VerifySignature.sol/VerifySignature.json");
const provider = new ethers.providers.JsonRpcProvider(API_URL);
// It calculates the blockchain address from private key
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const contract = new ethers.Contract(CONTRACT_ADDRESS_1, abi, signer);

const message = "Hello";   //Message to sign and verify
let hash = ethers.utils.keccak256(ethers.utils.solidityPack(["string"], [message]));   //Calculate the hash of message. Variant of abi.encodePacked function in Solidity
const signMessage = async () => {
  const sig = await signer.signMessage(ethers.utils.arrayify(hash)); //signing the message using private key
  const ethHash = ethers.utils.keccak256(ethers.utils.solidityPack(["string", "bytes32"], ["\x19Ethereum Signed Message:\n32", hash]));    //prepend the default ethereum hash string before the message hash
  console.log("signer          ", signer.address);
  const { v, r, s } = ethers.utils.splitSignature(sig);   //splitting the signature in v,r,s which can then be passed to smart contract
  let boolean = await contract.verify(signer.address, ethHash, r, s, v);
  console.log("Signed matched? " + boolean)   //Tells, if signer.address is the same person who signed the message.

};

signMessage();