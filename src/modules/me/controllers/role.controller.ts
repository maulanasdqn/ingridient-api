import { Router, Request, Response } from "express"
import { TRoleResponse, TRoleSingleResponse} from "../applications"
import { roleService } from "../services"
import { TMetaRequest } from "@/modules/base";


export const roleRouter = Router()

export const roleController = {
  findUnique: roleRouter.get("/:id", async (req: Request<{ id: string }>, res: Response<TRoleSingleResponse>) => {
    const { id } = req.params
    const data = await roleService.findUnique(id)
    res.status(200).json(data)
  }),

  findMany: roleRouter.get("/", async (req: Request<TMetaRequest>, res: Response<TRoleResponse>) => {
    try {
      const data = await roleService.findMany(req.query)

      if (!data) {
        res.status(404).json({
          data: undefined,
          meta: {
            message: "Data not found"
          }
        })
      }

      res.status(200).json(data)
    } catch(err){
      const error = err as Error
      res.status(500).json({
        data: undefined,
        meta: {
          message: error?.message as string
        }
      })
    }
    
  }),
};
