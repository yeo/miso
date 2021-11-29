# miso.is

Implementation for the Miso network - a decentralize name service run on blockchain
which is simple, fast and easy to understand.

Register a name, associate it with your wallet addresses, website,
email, sign document, take payment, sell your art or course online

# What exactly is a name service on blockchain?

Everyone can claim a name. That name can be resolved to your wallet
address, website, email or any metadata you associated with it, similar
to how CNAME, A, TXT records work for a traditional domain.

All of this data is store on blockchain together with its history of
changing them, essentially create an auditlog.

# FAQ

## What blockchains Miso run on?

We currently only run on Polygon but we plan to run on Solana soon. The
whole point is to make it fast and cheap

## How does this work outside blockchain

We run a custom name server where your name can be resolve with dig:

```
dig @dns.miso.is yourname
```

Or to use a traditonal public DNS like google, simply add a suffix
`bridge.miso.is`:

```
dig name.bridge.miso.is TXT
```


# Why would I use this

You absolutely don't have to.

Beside storing the data on blockchain, we give everyone a nice and a
simple website at `miso.is/yourname` which anyone can visit and see your
wallet address and other data. From there, they can made payment, donate
money to you. But not just that, you can use our platform to sign
document or to sell file online.

Upload a file to our platform, it show up under your `miso.is/yourname`
and anyone can buy it, again, with crypto.
