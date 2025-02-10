
import { http, createConfig } from 'wagmi'
import { base } from 'wagmi/chains'
import { metaMask } from 'wagmi/connectors'

export const config = createConfig({
  chains: [base],
  connectors: [
    metaMask({
      shimDisconnect: true,
      UNSTABLE_shimOnConnectSelectAccount: true,
    }),
  ],
  transports: {
    [base.id]: http('https://mainnet.base.org'),
  },
})
