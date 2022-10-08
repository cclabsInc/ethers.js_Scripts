require ('dotenv').config();
const {ethers} =require("ethers")

const provider = new ethers.providers.WebSocketProvider(process.env.INFURA_WS)

const doSomething = async () => {
    const myVariable = await provider.somefunction()
}

doSomething()
