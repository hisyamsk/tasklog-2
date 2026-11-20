import { z } from "zod"

export const issueIdSchema = z.coerce.number().int().positive()
