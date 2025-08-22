import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const nombre = formData.get('nombre') as string;
    const email = formData.get('email') as string;
    const telefono = formData.get('telefono') as string;
    const empresa = formData.get('empresa') as string;
    const tipo = formData.get('tipo') as string;
    const asunto = formData.get('asunto') as string;
    const mensaje = formData.get('mensaje') as string;

    // Validaciones básicas
    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: 'Los campos nombre, email, asunto y mensaje son obligatorios' },
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

    // Validar longitud del mensaje
    if (mensaje.length > 500) {
      return NextResponse.json(
        { error: 'El mensaje no puede exceder 500 caracteres' },
        { status: 400 }
      );
    }

    // Aquí normalmente enviarías un email o guardarías en base de datos
    // Por ahora solo simulamos el procesamiento
    console.log('Mensaje de contacto recibido:', {
      nombre,
      email,
      telefono,
      empresa,
      tipo,
      asunto,
      mensaje,
      fecha: new Date().toISOString(),
    });

    return NextResponse.json({
      message: 'Mensaje enviado exitosamente',
      success: true,
    });

  } catch (error) {
    console.error('Error en contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
} 