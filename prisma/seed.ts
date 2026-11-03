import {
  PrismaClient,
  UserRole,
  LeadStatus,
  AppointmentStatus,
} from '@prisma/client';

const databaseUrl = new URL(process.env.DATABASE_URL ?? '');
if (
  databaseUrl.protocol !== 'postgresql:' ||
  !['localhost', '127.0.0.1'].includes(databaseUrl.hostname) ||
  databaseUrl.port !== '5432' ||
  databaseUrl.pathname !== '/mcmv_showcase'
) {
  throw new Error(
    'O seed exige o PostgreSQL local mcmv_showcase na porta 5432.',
  );
}
const prisma = new PrismaClient();
const demoId = (kind: string, index: number) => `demo-${kind}-${index}`;

async function main() {
  await prisma.$transaction(
    async (tx) => {
      const roles = [
        UserRole.ADMIN,
        UserRole.MANAGER,
        UserRole.BROKER,
        UserRole.BROKER,
      ];
      for (const [index, role] of roles.entries()) {
        const data = {
          name: `Pessoa Demo ${index + 1}`,
          email: `user${index + 1}@example.com`,
          role,
        };
        await tx.user.upsert({
          where: { id: demoId('user', index) },
          create: { id: demoId('user', index), ...data },
          update: data,
        });
      }
      const builders = [
        'Horizonte Urbanismo Demo',
        'Atlântico Residencial Demo',
        'Nova Aurora Empreendimentos Demo',
      ];
      for (const [index, name] of builders.entries()) {
        const data = { name, slug: `construtora-demo-${index + 1}` };
        await tx.builder.upsert({
          where: { id: demoId('builder', index) },
          create: { id: demoId('builder', index), ...data },
          update: data,
        });
      }
      const neighborhoods = [
        'Campo Grande',
        'Barra da Tijuca',
        'Recreio',
        'Jacarepaguá',
      ];
      const names = [
        'Jardim das Nuvens',
        'Vila do Amanhecer',
        'Parque dos Ventos',
        'Morada das Estrelas',
        'Pátio das Flores',
        'Recanto do Sol',
        'Bosque da Lua',
        'Ilha dos Sonhos',
      ];
      for (const [index, name] of names.entries()) {
        const propertyId = demoId('property', index);
        const data = {
          builderId: demoId('builder', index % 3),
          name: `${name} Demo`,
          slug: `imovel-demo-${index + 1}`,
          description:
            'Empreendimento inteiramente fictício para demonstração pública.',
          city: 'Rio de Janeiro',
          neighborhood: neighborhoods[index % 4],
          minPrice: '240000.00',
          maxPrice: '320000.00',
          active: true,
        };
        await tx.property.upsert({
          where: { id: propertyId },
          create: { id: propertyId, ...data },
          update: data,
        });
        const image = {
          propertyId,
          url: '/demo-property.svg',
          alt: 'Ilustração genérica de imóvel fictício',
          position: 0,
        };
        await tx.propertyImage.upsert({
          where: { id: demoId('image', index) },
          create: { id: demoId('image', index), ...image },
          update: image,
        });
        const type = {
          propertyId,
          name: 'Apartamento Demo',
          bedrooms: 2,
          bathrooms: 1,
          area: '48.00',
          price: '240000.00',
        };
        await tx.propertyType.upsert({
          where: { id: demoId('type', index) },
          create: { id: demoId('type', index), ...type },
          update: type,
        });
      }
      const statuses = Object.values(LeadStatus);
      for (let index = 0; index < 15; index++) {
        const leadId = demoId('lead', index);
        const data = {
          name: `Contato Fictício ${index + 1}`,
          email: `lead${index + 1}@example.com`,
          phone: `+55 (00) 00000-${String(index + 1).padStart(4, '0')}`,
          status: statuses[index % statuses.length],
          source: 'Demonstração local',
          assignedToId: index < 12 ? demoId('user', 2 + (index % 2)) : null,
        };
        await tx.lead.upsert({
          where: { id: leadId },
          create: { id: leadId, ...data },
          update: data,
        });
        const interest = { leadId, propertyId: demoId('property', index % 8) };
        await tx.leadProperty.upsert({
          where: { id: demoId('interest', index) },
          create: { id: demoId('interest', index), ...interest },
          update: interest,
        });
      }
      for (let index = 0; index < 4; index++) {
        const leadId = demoId('lead', index);
        const appointment = {
          leadId,
          brokerId: demoId('user', 2 + (index % 2)),
          scheduledAt: new Date(`2030-01-${10 + index}T14:00:00Z`),
          status: Object.values(AppointmentStatus)[index],
          notes: 'Visita fictícia; nenhum contato real.',
        };
        await tx.appointment.upsert({
          where: { id: demoId('appointment', index) },
          create: { id: demoId('appointment', index), ...appointment },
          update: appointment,
        });
        const simulation = {
          leadId,
          propertyId: demoId('property', index),
          propertyValue: '240000.00',
          downPayment: '48000.00',
          financedAmount: '192000.00',
          monthlyIncome: '6000.00',
        };
        await tx.simulation.upsert({
          where: { id: demoId('simulation', index) },
          create: { id: demoId('simulation', index), ...simulation },
          update: simulation,
        });
        const note = {
          leadId,
          authorId: demoId('user', 2),
          content:
            'Observação fictícia para demonstrar o relacionamento entre registros.',
        };
        await tx.leadNote.upsert({
          where: { id: demoId('note', index) },
          create: { id: demoId('note', index), ...note },
          update: note,
        });
      }
      for (const [index, name] of [
        'Zona Oeste',
        'Zona Norte',
        'Geral',
      ].entries()) {
        const queueId = demoId('queue', index);
        const data = { name, active: true };
        await tx.distributionQueue.upsert({
          where: { id: queueId },
          create: { id: queueId, ...data },
          update: data,
        });
        for (let position = 0; position < 2; position++) {
          const id = demoId('participant', index * 2 + position);
          const participant = {
            queueId,
            userId: demoId('user', 2 + position),
            active: true,
            position,
          };
          await tx.queueParticipant.upsert({
            where: { id },
            create: { id, ...participant },
            update: participant,
          });
        }
      }
      const setting = { value: 'Todos os dados são fictícios.' };
      await tx.systemSetting.upsert({
        where: { key: 'demo.notice' },
        create: { ...setting, key: 'demo.notice' },
        update: setting,
      });
    },
    { timeout: 30000 },
  );
  console.log(
    'Seed fictício concluído: 83 registros de demonstração; nenhum algoritmo financeiro ou de distribuição.',
  );
}

main()
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
