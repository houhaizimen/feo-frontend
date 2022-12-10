import BigNumber from 'bignumber.js'

export const BIG_TEN = new BigNumber(10)

export const getBalanceAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals)).toNumber()
}

export const formatCurrencyAmount = (amount: BigNumber, decimals = 18): number => {
  if (!amount) return 0
  return new BigNumber(amount).dividedBy(decimals).toNumber()
}

export const formatDisplayBalance = (amount: BigNumber, decimals = 18, fixedDecimals = 3) => {
  return formatCurrencyAmount(amount, decimals).toFixed(fixedDecimals)
}
