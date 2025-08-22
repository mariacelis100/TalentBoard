import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const fullName = formData.get('fullName') as string;
    const accountType = formData.get('accountType') as string;
    const captcha = formData.get('captcha') as string;
    const honeypot = formData.get('honeypot') as string;

    // Validar campos requeridos
    if (!email || !password || !fullName || !accountType) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Validar email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Validar contraseña
    if (password.length < 8) {
      return NextResponse.json(
        { error: 'La contraseña debe tener al menos 8 caracteres' },
        { status: 400 }
      );
    }

    // Validar tipo de cuenta
    if (!['CANDIDATE', 'COMPANY'].includes(accountType)) {
      return NextResponse.json(
        { error: 'Tipo de cuenta inválido' },
        { status: 400 }
      );
    }

    // Detectar bot (honeypot)
    if (honeypot) {
      return NextResponse.json(
        { error: 'Solicitud detectada como spam' },
        { status: 400 }
      );
    }

    // Verificar si el email ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'El email ya está registrado' },
        { status: 409 }
      );
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 12);

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        role: accountType as 'CANDIDATE' | 'COMPANY'
      }
    });

    // Crear perfil según el tipo de cuenta
    if (accountType === 'CANDIDATE') {
      await prisma.candidate.create({
        data: {
          userId: user.id,
          title: '',
          experience: '',
          location: '',
          salary: '',
          availability: '',
          skills: [],
          rating: 0,
          verified: false
        }
      });
    } else if (accountType === 'COMPANY') {
      await prisma.company.create({
        data: {
          userId: user.id,
          name: fullName,
          industry: '',
          size: '',
          location: '',
          description: '',
          website: '',
          founded: '',
          benefits: [],
          rating: 0,
          verified: false
        }
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Usuario registrado exitosamente',
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Error en registro:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 