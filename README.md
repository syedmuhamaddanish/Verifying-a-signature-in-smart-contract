# Verify a digital signature in solidity smart contract

This code is motivated from the smart contract (https://solidity-by-example.org/signature/), however, I have modified this and implemented the hash functionalities outside of smart contract to optimize the gas. Only the verification is done on-chain. Message signing and hashing is done off-chain

This project demonstrates a basic digital signature verification process, where a signature is created off-chain, and is sent to the smart contract for verification. You can use the blockchain of your own choice, and its corresponding rpc url in hardhat-config.js.

To run the code, you need to run the following commands. 

```shell
npm install
```

You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract.


```shell
npx hardhat compile
npx hardhat run --network volta scripts/deploy.js
```

Once the contract is uploaded to the blockchain, copy the contract address and copy it in the .env file.  

Once you have pasted your private key and contract address in the .env file, simply run command 

```shell
node index.js
```

