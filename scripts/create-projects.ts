import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

import * as projects from './data/projects.json';

const chainIds = {
  ethereum: 1,
  'binance smart chain': 56,
  avalanche: 43114,
};

async function main() {
  for (const project of projects) {
    const projectWallets: string[] = JSON.parse(project.donation_addresses);
    const projectPartners: string[] = JSON.parse(project.partners);
    const projectSocialProfiles: string[] = JSON.parse(project.social_profiles);
    const projectCredentials: string[] = JSON.parse(project.credentials);
    const projectCategories = project.categories;

    const createProjectWalletsData: Prisma.ProjectDonationWalletCreateManyProjectInput[] = [];
    const createProjectSocialProfilesData: Prisma.ProjectSocialProfileCreateManyProjectInput[] = [];
    const createProjectCredentialsData: Prisma.ProjectCredentialsCreateManyProjectInput[] = [];
    const createProjectPartnersData: Prisma.ProjectPartnerCreateManyProjectInput[] = [];
    const createProjectCategoriesData: Prisma.ProjectCategoryCreateManyProjectInput[] = [];

    for (const wallet of projectWallets) {
      const parsedWallet = JSON.parse(wallet);
      createProjectWalletsData.push({
        chainId: chainIds[parsedWallet.chain] || 0,
        chain: parsedWallet.chain,
        address: parsedWallet.address,
      });
    }

    for (const partner of projectPartners) {
      const parsedPartner = JSON.parse(partner);
      createProjectPartnersData.push({
        name: parsedPartner.name,
        websiteUrl: parsedPartner.website,
      });
    }

    for (const socialProfile of projectSocialProfiles) {
      const parsedSocialProfile = JSON.parse(socialProfile);
      createProjectSocialProfilesData.push({
        platform: parsedSocialProfile.platform.toUpperCase().trim(),
        profileUrl: parsedSocialProfile.link,
      });
    }

    for (const credential of projectCredentials) {
      const parsedCredential = JSON.parse(credential);
      createProjectCredentialsData.push({
        statement: parsedCredential.statement,
        credentialUrl: parsedCredential.reference,
      });
    }

    for (const category of projectCategories) {
      createProjectCategoriesData.push({
        category,
      });
    }

    await prisma.project.create({
      data: {
        name: project.name,
        ownerId: project.owner_id,
        description: project.description,
        summary: project.summary,
        website: project.website,
        impactLocation: project.impact_location,
        donationWallets: {
          createMany: {
            data: createProjectWalletsData,
          },
        },
        socialProfiles: {
          createMany: {
            data: createProjectSocialProfilesData,
          },
        },
        credentials: {
          createMany: {
            data: createProjectCredentialsData,
          },
        },
        partners: {
          createMany: {
            data: createProjectPartnersData,
          },
        },
        categories: {
          createMany: {
            data: createProjectCategoriesData,
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
