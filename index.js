#!/usr/bin/env node

var CoinKey = require('coinkey')

if (!process.argv[2]) {
    console.error(`Usage: $0 <privatekey>`)
    return
}

var ck = CoinKey.fromWif(process.argv[2])

console.log(ck.publicAddress)

