import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
    // Paste in the address from when you created the bundle collection module
    const bundleModuleAddress = '0x4E829149DDA3542947D87EcA89206097ab2066C0';
    const bundleModule = sdk.getBundleModule(bundleModuleAddress);

    console.log('Creating NFT batch...');

    const created = await bundleModule.createAndMintBatch([
        {
            metadata: {
                name: 'Air Jordan XVIII',
                description: 'The last AJ released while MJ was still playing.',
                image: readFileSync('./assets/aj18.jpeg'),
                properties: {
                    rarity: 'a bit rare',
                    fanciness: 7,
                }
            },
            supply: 50,
        },
        {
            metadata: {
                name: 'Air Jordan 1',
                description: 'The original!',
                image: readFileSync('./assets/aj1.jpeg'),
                properties: {
                    rarity: 'a bit rare',
                    fanciness: 7,
                }
            },
            supply: 50,
        },
        {
            metadata: {
                name: 'Tmac 1',
                description: 'Fancy and inexensive',
                image: readFileSync('./assets/tmac1.jpeg'),
                properties: {
                    rarity: 'super rare!',
                    fanciness: 10,
                }
            },
            supply: 10,
        }
    ]);

    console.log('NFTs created!')
    console.log(JSON.stringify(created, null, 2));
}

try {
    await main();
} catch (error) {
    console.error("Error minting the NFTs", error);
    process.exit(1);
}

