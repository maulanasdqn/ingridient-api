import { roleRouter } from "@/modules/me"
import { Router } from "express"

export const baseRouter = Router()

baseRouter.use("/roles", roleRouter)
