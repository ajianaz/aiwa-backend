const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Seed User
    const user1 = await prisma.user.create({
        data: {
            // id: '05c0e775-6123-43fa-8227-1d678d3d6763',
            keycloak_id: '05c0e775-6123-43fa-8227-1d678d3d6763',
            name: 'Alice Johnson',
            email: 'alice@example.com',
        },
    });

    const user2 = await prisma.user.create({
        data: {
            // id: '4f10fdac-d8e0-442e-bda6-806e43598e8e',
            keycloak_id: '4f10fdac-d8e0-442e-bda6-806e43598e8e',
            name: 'Bob Smith',
            email: 'bob@example.com',
        },
    });

    // Seed Organization
    const org1 = await prisma.organization.create({
        data: {
            id: '46f49b0d-1a45-45d6-87a5-cb248d6b1180',
            name: 'Tech Corp',
            owner_id: user1.id,
            address: '123 Tech Street',
            contact_info: 'tech@example.com',
        },
    });

    const org2 = await prisma.organization.create({
        data: {
            id: '3bb792f7-a277-4e29-8c0a-79d5ca747e3e',
            name: 'AI Innovations',
            owner_id: user2.id,
            address: '456 AI Road',
            contact_info: 'ai@example.com',
        },
    });

    // Seed Device
    const device1 = await prisma.device.create({
        data: {
            id: 'f532e059-dd34-43ad-a009-2e2d2cfe969f',
            organization_id: org1.id,
            name: 'Device Alpha',
            connection_status: 'online',
            phone_number: '+1234567890',
        },
    });

    const device2 = await prisma.device.create({
        data: {
            id: '90202938-1841-4987-9199-343bbe8f1832',
            organization_id: org2.id,
            name: 'Device Beta',
            connection_status: 'offline',
            phone_number: '+0987654321',
        },
    });

    // Seed DeviceAgentAssignments
    await prisma.deviceAgentAssignments.create({
        data: {
            id: '0debe3a1-632f-4935-b174-0c715a2dd50f',
            device_id: device1.id,
            agent_id: user1.id,
        },
    });

    await prisma.deviceAgentAssignments.create({
        data: {
            id: 'c43d8d33-a90b-4589-88f4-c703ad88d3db',
            device_id: device2.id,
            agent_id: user2.id,
        },
    });

    console.log('Seeding completed!');
}

main()
    .catch((e) => {
        console.error('Error while seeding:', e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
