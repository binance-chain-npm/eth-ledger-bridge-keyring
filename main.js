'use strict'
import LedgerBridge from './ledger-bridge'


(async () => {
    const bridge = new LedgerBridge()
    //const res = await bridge.unlock('ledger-unlock-account', `44'/60'/0'`)
    //console.log('res', res)
})()
console.log('MetaMask < = > Ledger Bridge initialized!')