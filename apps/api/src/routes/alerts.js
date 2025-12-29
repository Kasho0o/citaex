import { Hono } from "hono";
export const alertsRouter = new Hono();
// Get all alerts for the authenticated user
alertsRouter.get("/", async (c) => {
    // TODO: Add authentication middleware
    // const userId = c.get("userId");
    return c.json({
        alerts: [
            {
                id: "1",
                searchId: "search-1",
                type: "availability",
                message: "Citas disponibles detectadas",
                sentAt: new Date().toISOString(),
                createdAt: new Date().toISOString(),
            },
        ],
    });
});
// Get alerts for a specific search
alertsRouter.get("/search/:searchId", async (c) => {
    const searchId = c.req.param("searchId");
    return c.json({
        searchId,
        alerts: [
            {
                id: "1",
                type: "availability",
                message: "Citas disponibles detectadas",
                sentAt: new Date().toISOString(),
            },
        ],
    });
});
// Mark alert as read
alertsRouter.patch("/:id/read", async (c) => {
    const id = c.req.param("id");
    return c.json({
        id,
        read: true,
        readAt: new Date().toISOString(),
    });
});
