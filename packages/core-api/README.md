![ARK Core](https://i.imgur.com/1aP6F2o.png)

# ARK Core - API

## Installation

```bash
yarn add @arkecosystem/core-api
```

## Configuration

### Defaults

```js
module.exports = {
  enabled: true,
  port: process.env.ARK_API_PORT || 4003,
  versions: {
    default: 1,
    valid: [1, 2]
  },
  cache: {
    enabled: false,
    options: {
      name: 'redisCache',
      engine: 'catbox-redis',
      host: process.env.ARK_REDIS_HOST || 'localhost',
      port: process.env.ARK_REDIS_PORT || 6379,
      partition: 'cache',
      expiresIn: 60000
    }
  },
  rateLimit: {
    enabled: false,
    limit: 300,
    expires: 60000
  },
  pagination: {
    limit: 100,
    include: [
      '/api/v2/blocks',
      '/api/v2/blocks/{id}/transactions',
      '/api/v2/blocks/search',
      '/api/v2/delegates',
      '/api/v2/delegates/{id}/blocks',
      '/api/v2/delegates/{id}/voters',
      '/api/v2/multisignatures',
      '/api/v2/peers',
      '/api/v2/signatures',
      '/api/v2/transactions',
      '/api/v2/transactions/search',
      '/api/v2/votes',
      '/api/v2/wallets',
      '/api/v2/wallets/top',
      '/api/v2/wallets/{id}/transactions',
      '/api/v2/wallets/{id}/transactions/received',
      '/api/v2/wallets/{id}/transactions/sent',
      '/api/v2/wallets/{id}/votes',
      '/api/v2/wallets/search'
    ]
  },
  statistics: {
    enabled: false
  }
}
```

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@ark.io. All security vulnerabilities will be promptly addressed.

## Credits

- [Kristjan Košič](https://github.com/kristjank)
- [Brian Faust](https://github.com/faustbrian)
- [All Contributors](../../../../contributors)

## License

[MIT](LICENSE) © [ArkEcosystem](https://ark.io)
