require ('dotenv').config();
const {ethers} =require("ethers")

const provider = new ethers.providers.WebSocketProvider(process.env.INFURA_WS)

const inspectBlock = async () => {
    const blockNumber = await provider.getBlockNumber()
    console.log(`Block# ${blockNumber}\n`)

    const blockInfo = await provider.getBlock(blockNumber)
    console.log(blockInfo)

    inspectTransaction(blockNumber)
}

const inspectTransaction = async (blockNumber) => {
    const {transactions} = await provider.getBlockWithTransactions(blockNumber)
    transactions.forEach(function(transaction){
       // console.log(transaction.hash)
        console.log(transaction.to)
        console.log(transaction.from)
        //console.log(`to:${transaction.to}`)
        //console.log(`from:${transaction.from}`)
    })
}

inspectBlock()
