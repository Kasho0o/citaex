import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createSearchSchema, updateSearchSchema } from "@repo/utils/validators";

export const searchesRouter = new Hono();

// Get all searches for the authenticated user
searchesRouter.get("/", async (c) => {
  // TODO: Add authentication middleware
  // const userId = c.get("userId");

  return c.json({
    searches: [
      {
        id: "1",
        province: "Madrid",
        office: "Aluche",
        procedureType: "TIE - Renovación",
        isActive: true,
        lastCheckedAt: new Date().toISOString(),
      },
    ],
  });
});

// Get a specific search
searchesRouter.get("/:id", async (c) => {
  const id = c.req.param("id");

  return c.json({
    id,
    province: "Madrid",
    office: "Aluche",
    procedureType: "TIE - Renovación",
    isActive: true,
    lastCheckedAt: new Date().toISOString(),
  });
});

// Create a new search
searchesRouter.post("/", zValidator("json", createSearchSchema), async (c) => {
  const data = c.req.valid("json");

  // TODO: Save to database
  return c.json(
    {
      id: "new-id",
      ...data,
      isActive: true,
      createdAt: new Date().toISOString(),
    },
    201
  );
});

// Update a search
searchesRouter.patch(
  "/:id",
  zValidator("json", updateSearchSchema),
  async (c) => {
    const id = c.req.param("id");
    const data = c.req.valid("json");

    // TODO: Update in database
    return c.json({
      id,
      ...data,
      updatedAt: new Date().toISOString(),
    });
  }
);

// Delete a search
searchesRouter.delete("/:id", async (c) => {
  const id = c.req.param("id");

  // TODO: Delete from database
  return c.json({
    success: true,
    message: `Search ${id} deleted`,
  });
});
