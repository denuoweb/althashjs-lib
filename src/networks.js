module.exports = {
    htmlcoin: {
        messagePrefix: '\x19HTMLCOIN Signed Message:\n',
        bech32: 'bc',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x64,
        scriptHash: 0x64,
        wif: 0xee
    },
    htmlcoin_testnet: {
        messagePrefix: '\x19Htmlcoin Signed Message:\n',
        bech32: 'tb',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x64,
        scriptHash: 0x6e,
        wif: 0xee
    }
}
