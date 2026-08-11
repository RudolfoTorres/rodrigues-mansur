import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        // 1. Trava de segurança: Valida se a chave de API existe
        if (!process.env.RESEND_API_KEY) {
            console.error("❌ ERRO: RESEND_API_KEY não definida no .env.local");
            return NextResponse.json(
                { success: false, error: "Serviço de e-mail não configurado no servidor." },
                { status: 500 }
            );
        }

        const { name, email, phone, message } = await request.json();

        // 2. Validação dos campos obrigatórios
        if (!name || !email || !phone) {
            return NextResponse.json(
                { success: false, error: "Preencha todos os campos obrigatórios." },
                { status: 400 }
            );
        }

        // 3. Tenta enviar o e-mail via Resend
        const { data, error } = await resend.emails.send({
            from: "Site Contato <onboarding@resend.dev>",
            to: ["rmcontabilcm@gmail.com"],
            subject: `Novo Contato via Site - ${name}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #0A192F;">
          <h2>Novo Diagnóstico Solicitado pelo Site</h2>
          <hr style="border: 0; border-top: 1px solid #C5A059;" />
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone / WhatsApp:</strong> ${phone}</p>
          <p><strong>Mensagem:</strong></p>
          <p style="background: #f4f4f4; padding: 12px; border-radius: 4px;">${message || "Nenhuma mensagem preenchida."
                }</p>
        </div>
      `,
        });

        // 4. Trava do Resend: Se o SDK retornar um erro (chave inválida, etc)
        if (error) {
            console.error("❌ ERRO RESEND:", error.message);
            return NextResponse.json(
                { success: false, error: `Falha no envio: ${error.message}` },
                { status: 400 }
            );
        }

        // Apenas se passou por todas as travas, retorna sucesso real
        return NextResponse.json({ success: true, data }, { status: 200 });

    } catch (err) {
        console.error("❌ ERRO INESPERADO:", err);
        return NextResponse.json(
            { success: false, error: "Ocorreu um erro interno ao processar a solicitação." },
            { status: 500 }
        );
    }
}