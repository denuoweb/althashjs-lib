module.exports = {
    althash: {
        messagePrefix: '\x15HTMLCOIN Signed Message:\n',
        bech32: 'hc',
        bip32: {
            public: 0x1397c10d,
            private: 0x1397BCF3
        },
        pubKeyHash: 0x29,
        scriptHash: 0x64,
        wif: 0xa9
    },
    althash_testnet: {
        messagePrefix: '\x15HTMLCOIN Signed Message:\n',
        bech32: 'th',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x64,
        scriptHash: 0x6e,
        wif: 0xef
    }
}
