import { http, createConfig } from 'wagmi'
import { base } from 'wagmi/chains'
import { injected, metaMask } from 'wagmi/connectors'

export const config = createConfig({
  chains: [base],
  connectors: [
    metaMask(),
    injected(),
  ],
  transports: {
    [base.id]: http(),
  },
})