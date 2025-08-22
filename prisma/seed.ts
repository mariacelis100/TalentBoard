import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...');

  // Limpiar base de datos
  await prisma.application.deleteMany();
  await prisma.job.deleteMany();
  await prisma.candidate.deleteMany();
  await prisma.company.deleteMany();
  await prisma.user.deleteMany();

  console.log('🗑️ Base de datos limpiada');

  // Crear usuarios de prueba
  const hashedPassword = await bcrypt.hash('123456', 12);

  // Usuario candidato
  const candidateUser = await prisma.user.create({
    data: {
      email: 'candidato@test.com',
      password: hashedPassword,
      fullName: 'María González',
      role: 'CANDIDATE',
    },
  });

  // Usuario empresa
  const companyUser = await prisma.user.create({
    data: {
      email: 'empresa@test.com',
      password: hashedPassword,
      fullName: 'TechCorp Solutions',
      role: 'COMPANY',
    },
  });

  console.log('👤 Usuarios creados');

  // Crear candidato
  const candidate = await prisma.candidate.create({
    data: {
      userId: candidateUser.id,
      title: 'Senior Full Stack Developer',
      experience: '6 años',
      location: 'Santiago, Chile',
      salary: '$2,800,000 - $3,200,000',
      availability: 'Disponible inmediatamente',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
      rating: 4.9,
      verified: true,
    },
  });

  // Crear empresa
  const company = await prisma.company.create({
    data: {
      userId: companyUser.id,
      name: 'TechCorp Solutions',
      industry: 'Tecnología',
      size: 'Grande (500+ empleados)',
      location: 'Santiago, Chile',
      description: 'Líder en desarrollo de software empresarial con más de 10 años de experiencia en el mercado latinoamericano.',
      website: 'techcorp.cl',
      founded: '2010',
      benefits: ['Trabajo Remoto', 'Seguro Médico', 'Capacitaciones', 'Horario Flexible'],
      rating: 4.8,
      verified: true,
    },
  });

  console.log('🏢 Empresa y candidato creados');

  // Crear empleos de prueba
  const jobs = await Promise.all([
    prisma.job.create({
      data: {
        companyId: company.id,
        title: 'Senior Full Stack Developer',
        description: 'Buscamos un desarrollador experimentado para unirse a nuestro equipo de desarrollo de aplicaciones web.',
        requirements: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
        location: 'Santiago, Chile',
        salary: '$2,800,000 - $3,200,000',
        type: 'FULL_TIME',
        category: 'Desarrollo',
        status: 'ACTIVE',
      },
    }),
    prisma.job.create({
      data: {
        companyId: company.id,
        title: 'Data Scientist',
        description: 'Únete a nuestro equipo de análisis de datos para desarrollar soluciones de IA.',
        requirements: ['Python', 'TensorFlow', 'SQL', 'Machine Learning'],
        location: 'Santiago, Chile',
        salary: '$2,400,000 - $2,800,000',
        type: 'FULL_TIME',
        category: 'Ciencia de Datos',
        status: 'ACTIVE',
      },
    }),
    prisma.job.create({
      data: {
        companyId: company.id,
        title: 'UX/UI Designer',
        description: 'Diseñador creativo para mejorar la experiencia de usuario de nuestras aplicaciones.',
        requirements: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
        location: 'Santiago, Chile',
        salary: '$2,200,000 - $2,600,000',
        type: 'FULL_TIME',
        category: 'Diseño',
        status: 'ACTIVE',
      },
    }),
  ]);

  console.log('💼 Empleos creados');

  // Crear aplicación de prueba
  await prisma.application.create({
    data: {
      jobId: jobs[0].id,
      candidateId: candidate.id,
      status: 'PENDING',
      coverLetter: 'Me interesa mucho esta oportunidad. Tengo experiencia en React y Node.js, y estoy buscando nuevos desafíos.',
    },
  });

  console.log('📝 Aplicación creada');

  console.log('✅ Seed completado exitosamente!');
  console.log('');
  console.log('🔑 Credenciales de prueba:');
  console.log('Candidato: candidato@test.com / 123456');
  console.log('Empresa: empresa@test.com / 123456');
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 