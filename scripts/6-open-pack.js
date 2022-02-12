import { sdk } from "./helpers.js";

async function main() {
    const packModuleAddress = '0x074BFee2f332236a5f9E5A8Ae467CE3DB4De2FA0';
    const packModule = sdk.getPackModule(packModuleAddress);

    console.log('Opening the pack...');
    const opened = await packModule.open('0');
    console.log('Opened the pack!');
    console.log(opened);
}

try {
    await main();
} catch (error) {
    console.error("Error opening the pack", error);
    process.exit(1);
}

