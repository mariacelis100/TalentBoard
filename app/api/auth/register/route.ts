import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    const { email, password, fullName, accountType } = await request.json();

    // Validaciones básicas
    if (!email || !password || !fullName || !accountType) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
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
        role: accountType === 'company' ? 'COMPANY' : 'CANDIDATE',
      },
    });

    // Crear perfil según el tipo de cuenta
    if (accountType === 'company') {
      await prisma.company.create({
        data: {
          userId: user.id,
          name: fullName,
        },
      });
    } else {
      await prisma.candidate.create({
        data: {
          userId: user.id,
        },
      });
    }

    // Retornar respuesta exitosa
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      message: 'Usuario registrado exitosamente',
      user: userWithoutPassword,
    }, { status: 201 });

  } catch (error) {
    console.error('Error en registro:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 