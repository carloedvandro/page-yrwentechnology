
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  nome_fale_conosco: string;
  email_fale_conosco: string;
  whatsapp_fale_conosco: string;
  mensagem_fale_conosco: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const resendApiKey = Deno.env.get("RESEND_API_KEY") || "";
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const resend = new Resend(resendApiKey);

    const formData: ContactFormData = await req.json();
    console.log("Received form data:", formData);

    // Insert data into the fale_conosco_ytechnology table
    const { data, error } = await supabase
      .from("fale_conosco_ytechnology")
      .insert([
        {
          nome_fale_conosco: formData.nome_fale_conosco,
          email_fale_conosco: formData.email_fale_conosco,
          whatsapp_fale_conosco: formData.whatsapp_fale_conosco,
          mensagem_fale_conosco: formData.mensagem_fale_conosco,
        },
      ])
      .select();

    if (error) {
      console.error("Error inserting data:", error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    // Send notification email using Resend
    try {
      const emailSubject = "Nova mensagem do formulário de contato";
      const emailBody = `
        <h2>Nova mensagem recebida do site</h2>
        
        <p><strong>Nome:</strong> ${formData.nome_fale_conosco}</p>
        <p><strong>Email:</strong> ${formData.email_fale_conosco}</p>
        <p><strong>WhatsApp:</strong> ${formData.whatsapp_fale_conosco}</p>
        
        <h3>Mensagem:</h3>
        <p>${formData.mensagem_fale_conosco}</p>
      `;

      const emailResult = await resend.emails.send({
        from: "Yrwen Technology <formulario@yrwen.tech>",
        to: ["yrwentechnology@gmail.com"],
        subject: emailSubject,
        html: emailBody,
        reply_to: formData.email_fale_conosco
      });

      console.log("Email sent:", emailResult);
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error("Error sending email:", emailError);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Mensagem enviada com sucesso" 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
