import { z } from "zod";
import { PROVINCES, PROCEDURE_TYPES } from "./constants";

// User validation
export const emailSchema = z.string().email("Email inválido");

export const passwordSchema = z
  .string()
  .min(8, "La contraseña debe tener al menos 8 caracteres")
  .regex(/[A-Z]/, "La contraseña debe contener al menos una mayúscula")
  .regex(/[0-9]/, "La contraseña debe contener al menos un número");

export const userRegisterSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: emailSchema,
  password: passwordSchema,
});

export const userLoginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "La contraseña es requerida"),
});

// Search validation
export const createSearchSchema = z.object({
  province: z.enum([...PROVINCES] as [string, ...string[]], {
    errorMap: () => ({ message: "Provincia inválida" }),
  }),
  office: z.string().min(1, "La oficina es requerida"),
  procedureType: z.enum([...PROCEDURE_TYPES] as [string, ...string[]], {
    errorMap: () => ({ message: "Tipo de trámite inválido" }),
  }),
  checkInterval: z.number().min(30).max(3600).optional(),
});

export const updateSearchSchema = z.object({
  isActive: z.boolean().optional(),
  checkInterval: z.number().min(30).max(3600).optional(),
});

// Profile validation
export const updateProfileSchema = z.object({
  name: z.string().min(1).optional(),
  phone: z.string().optional(),
});

export const updateNotificationPreferencesSchema = z.object({
  email: z.boolean().optional(),
  sms: z.boolean().optional(),
  telegram: z.boolean().optional(),
});
