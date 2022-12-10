import { Contract, ethers } from 'ethers'

/**
 * Estimate the gas
 * @param contract
 * @param methodName
 * @param methodArgs
 * @param gasMarginPer10000
 */
const estimateGas = async (
  contract: Contract,
  methodName: string,
  methodArgs: any[] = [],
  gasMarginPer10000 = 2000
) => {
  if (!contract[methodName]) {
    throw new Error(`Method ${methodName} doesn't exist on ${contract.address}`)
  }

  const rawGasEstimation = await contract.estimateGas[methodName](...methodArgs)
  console.info(`real need gas:${rawGasEstimation}`)
  console.info(`Gas after amplification:${(rawGasEstimation
      .mul(ethers.BigNumber.from(10000).add(ethers.BigNumber.from(gasMarginPer10000)))
      .div(ethers.BigNumber.from(10000)))}`)
  return (rawGasEstimation
    .mul(ethers.BigNumber.from(10000).add(ethers.BigNumber.from(gasMarginPer10000)))
    .div(ethers.BigNumber.from(10000)))
}

export default estimateGas
