import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
    const bundleModuleAddress = '0x4E829149DDA3542947D87EcA89206097ab2066C0'; // your bundle module address
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    const packModuleAddress = '0x074BFee2f332236a5f9E5A8Ae467CE3DB4De2FA0'; // your pack module address
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Getting all NFTs from bundle...');
    const nftsInBundle = await bundleModule.getAll();

    console.log('NFTs in bundle:');
    console.log(nftsInBundle);

    console.log('Creating a pack containing the NFTs from bundle...');
    const created = await packModule.create({
        assetContract: bundleModuleAddress,
        metadata: {
            name: 'basketball shoes!',
            image: readFileSync('./assets/shoescollection.jpeg'),
        },
        assets: nftsInBundle.map(nft => ({
            tokenId: nft.metadata.id,
            amount: nft.supply,
        })),
    });

    console.log('Pack created!')
    console.log(created);
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs", error);
    process.exit(1);
}

