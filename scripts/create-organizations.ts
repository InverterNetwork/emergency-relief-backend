import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

import * as organizations from './data/organizations.json';

const chainIds = {
  ethereum: 1,
  'binance smart chain': 56,
  avalanche: 43114,
};

async function main() {
  for (const organization of organizations) {
    const organizationWallets: string[] = JSON.parse(organization.wallet_addresses);

    const createOrganizationWalletData: Prisma.OrganizationWalletCreateManyOrganizationInput[] = [];

    for (const wallet of organizationWallets) {
      const parsedWallet = JSON.parse(wallet);
      createOrganizationWalletData.push({
        chainId: chainIds[parsedWallet.chain] || 0,
        chain: parsedWallet.chain,
        address: parsedWallet.address,
      });
    }

    await prisma.organization.create({
      data: {
        name: organization.name,
        wallets: {
          createMany: {
            data: createOrganizationWalletData,
          },
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
