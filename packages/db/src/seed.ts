/**
 * Database Seed File
 * Run this to populate the database with initial data
 *
 * Usage: tsx src/seed.ts
 */

import { db } from "./client";
import { offices } from "./schema/offices";
import { PROVINCES, PROCEDURE_TYPES } from "@repo/utils/constants";

async function seed() {
  console.log("🌱 Seeding database...");

  try {
    // Seed offices with common locations in Spain
    const sampleOffices = [
      {
        name: "Oficina de Extranjería de Madrid - Aluche",
        province: "Madrid",
        address: "C/ Picos de Europa, 14",
        city: "Madrid",
        postalCode: "28220",
        availableProcedures: [
          "TOMA DE HUELLAS (EXPEDICIÓN DE TARJETA)",
          "RECOGIDA DE TARJETA DE IDENTIDAD DE EXTRANJERO (TIE)",
          "ASIGNACIÓN DE NIE",
          "RENOVACIÓN DE AUTORIZACIÓN",
        ],
        metadata: {
          hours: "Lunes a Viernes: 9:00 - 14:00",
          website: "https://sede.administracionespublicas.gob.es",
        },
      },
      {
        name: "Oficina de Extranjería de Barcelona - Ciutat Vella",
        province: "Barcelona",
        address: "Carrer de la Rambla, 128",
        city: "Barcelona",
        postalCode: "08002",
        availableProcedures: [
          "TOMA DE HUELLAS (EXPEDICIÓN DE TARJETA)",
          "RECOGIDA DE TARJETA DE IDENTIDAD DE EXTRANJERO (TIE)",
          "ASIGNACIÓN DE NIE",
          "CERTIFICADO DE REGISTRO DE CIUDADANO DE LA UE",
        ],
        metadata: {
          hours: "Lunes a Viernes: 9:00 - 14:00",
        },
      },
      {
        name: "Oficina de Extranjería de Valencia - Centro",
        province: "Valencia",
        address: "Calle de Cirilo Amorós, 60",
        city: "Valencia",
        postalCode: "46004",
        availableProcedures: [
          "TOMA DE HUELLAS (EXPEDICIÓN DE TARJETA)",
          "ASIGNACIÓN DE NIE",
          "RENOVACIÓN DE AUTORIZACIÓN",
          "AUTORIZACIÓN DE REGRESO",
        ],
        metadata: {
          hours: "Lunes a Viernes: 9:00 - 14:00",
        },
      },
      {
        name: "Oficina de Extranjería de Sevilla",
        province: "Sevilla",
        address: "Av. de la Buhaira, 26",
        city: "Sevilla",
        postalCode: "41018",
        availableProcedures: [
          "TOMA DE HUELLAS (EXPEDICIÓN DE TARJETA)",
          "RECOGIDA DE TARJETA DE IDENTIDAD DE EXTRANJERO (TIE)",
          "ASIGNACIÓN DE NIE",
        ],
        metadata: {
          hours: "Lunes a Viernes: 9:00 - 13:30",
        },
      },
    ];

    console.log("📍 Seeding offices...");
    await db.insert(offices).values(sampleOffices);
    console.log(`✅ Seeded ${sampleOffices.length} offices`);

    console.log("✨ Database seeded successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

// Run the seed function
seed()
  .then(() => {
    console.log("🎉 Seeding complete!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Seeding failed:", error);
    process.exit(1);
  });
