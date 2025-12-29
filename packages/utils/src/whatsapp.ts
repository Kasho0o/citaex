/**
 * WhatsApp Business API Integration
 * Handles sending messages via Meta WhatsApp Business API
 */

interface WhatsAppConfig {
  phoneNumberId: string;
  accessToken: string;
  businessAccountId?: string;
}

interface WhatsAppMessage {
  to: string; // Phone number in international format (e.g., +34663939048)
  type: "text" | "template";
  text?: {
    body: string;
    preview_url?: boolean;
  };
  template?: {
    name: string;
    language: {
      code: string; // e.g., "es", "en"
    };
    components?: Array<{
      type: string;
      parameters: Array<{
        type: string;
        text: string;
      }>;
    }>;
  };
}

interface WhatsAppResponse {
  success: boolean;
  messageId?: string;
  error?: string;
  details?: unknown;
}

export class WhatsAppService {
  private config: WhatsAppConfig;
  private apiUrl = "https://graph.facebook.com/v18.0";

  constructor(config: WhatsAppConfig) {
    this.config = config;
  }

  /**
   * Send a text message via WhatsApp
   */
  async sendTextMessage(
    to: string,
    message: string,
    previewUrl: boolean = false
  ): Promise<WhatsAppResponse> {
    try {
      const payload: WhatsAppMessage = {
        to: this.formatPhoneNumber(to),
        type: "text",
        text: {
          body: message,
          preview_url: previewUrl,
        },
      };

      const response = await this.sendMessage(payload);
      return response;
    } catch (error) {
      console.error("WhatsApp send text error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        details: error,
      };
    }
  }

  /**
   * Send a template message via WhatsApp
   * Templates must be pre-approved by Meta
   */
  async sendTemplateMessage(
    to: string,
    templateName: string,
    languageCode: string = "es",
    parameters?: Array<{ type: string; text: string }>
  ): Promise<WhatsAppResponse> {
    try {
      const payload: WhatsAppMessage = {
        to: this.formatPhoneNumber(to),
        type: "template",
        template: {
          name: templateName,
          language: {
            code: languageCode,
          },
          ...(parameters && {
            components: [
              {
                type: "body",
                parameters,
              },
            ],
          }),
        },
      };

      const response = await this.sendMessage(payload);
      return response;
    } catch (error) {
      console.error("WhatsApp send template error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        details: error,
      };
    }
  }

  /**
   * Send appointment alert via WhatsApp
   */
  async sendAppointmentAlert(
    to: string,
    data: {
      office: string;
      procedureType: string;
      date?: string;
    }
  ): Promise<WhatsAppResponse> {
    const message = `🎉 *¡Cita Disponible!*\n\n` +
      `📍 Oficina: ${data.office}\n` +
      `📋 Trámite: ${data.procedureType}\n` +
      `${data.date ? `📅 Fecha: ${data.date}\n` : ""}` +
      `\n⚡ ¡Actúa rápido! Las citas se agotan rápidamente.\n\n` +
      `Accede a tu cuenta: https://micitaextranjeria.com/dashboard`;

    return this.sendTextMessage(to, message, true);
  }

  /**
   * Send welcome message to new user
   */
  async sendWelcomeMessage(
    to: string,
    userName: string
  ): Promise<WhatsAppResponse> {
    const message =
      `¡Hola ${userName}! 👋\n\n` +
      `Bienvenido/a a *Cita Extranjería*.\n\n` +
      `Te ayudaremos a conseguir tu cita de extranjería de forma rápida y sencilla.\n\n` +
      `💬 Estamos aquí para ayudarte.\n` +
      `📱 WhatsApp verificado: ${process.env.WHATSAPP_VERIFIED_NUMBER}\n` +
      `📧 Email: ${process.env.BUSINESS_EMAIL}`;

    return this.sendTextMessage(to, message);
  }

  /**
   * Internal method to send message to WhatsApp API
   */
  private async sendMessage(
    payload: WhatsAppMessage
  ): Promise<WhatsAppResponse> {
    const url = `${this.apiUrl}/${this.config.phoneNumberId}/messages`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.config.accessToken}`,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        recipient_type: "individual",
        ...payload,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error?.message || `WhatsApp API error: ${response.status}`
      );
    }

    return {
      success: true,
      messageId: data.messages?.[0]?.id,
      details: data,
    };
  }

  /**
   * Format phone number to international format
   */
  private formatPhoneNumber(phone: string): string {
    // Remove all non-numeric characters except +
    let formatted = phone.replace(/[^\d+]/g, "");

    // Ensure it starts with +
    if (!formatted.startsWith("+")) {
      formatted = "+" + formatted;
    }

    return formatted;
  }
}

/**
 * Create a WhatsApp service instance with environment variables
 */
export function createWhatsAppService(): WhatsAppService {
  if (!process.env.WHATSAPP_PHONE_NUMBER_ID || !process.env.WHATSAPP_ACCESS_TOKEN) {
    throw new Error(
      "WhatsApp configuration missing. Please set WHATSAPP_PHONE_NUMBER_ID and WHATSAPP_ACCESS_TOKEN."
    );
  }

  return new WhatsAppService({
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID,
    accessToken: process.env.WHATSAPP_ACCESS_TOKEN,
    businessAccountId: process.env.WHATSAPP_BUSINESS_ACCOUNT_ID,
  });
}

// Export types
export type { WhatsAppConfig, WhatsAppMessage, WhatsAppResponse };
