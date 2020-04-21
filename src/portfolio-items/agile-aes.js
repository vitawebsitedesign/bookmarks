import Tags from '../enums/Tags';

export default {
    "title": "AgileAES & SecureStringCharacters",
    "tags": {
        "product": ['Open source', 'Encryption', 'Nuget'],
        "programming": ['[C#', '.NET Standard']
    },
    "overview": `
.NET provides AES encryption functionality to developers, but usage involves a large code footprint.
Thus, a library that delivers the same functionality with lesser footprint via abstraction would be incredibly valueable.
Developers no longer need to know exact encyrption implementation details, and allows them to perform the same functionality in a stateless manner.
Hence, AgileAES is a library that brings AES encryption functionality using a series of 1-liners.
    `,
    "learnt": [
        'The usage of the System.Security.Cryptography.Aes class',
        'The semantics between MemoryStream, CryptoStream & StreamWriter to ensure operation scalability.',
        'The .NET SecureString security limitations. Specifically, how contents are protected in memory across different platforms'
    ],
    "urls": {
        "src": [
            'https://github.com/vitawebsitedesign/AgileAES',
            'https://github.com/vitawebsitedesign/SecureStringCharacters'
        ],
        "product": [
            'https://www.nuget.org/packages/MichaelNguyen.AgileAES/',
            'https://www.nuget.org/packages/MichaelNguyen.Utility.SecureStringCharacters/'
        ]
    }
};
