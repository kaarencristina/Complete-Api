import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { request } from "http";
import { CreateCustomerController } from "./controllers/CreateCostumerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

import { ListCustomerController } from "./controllers/ListCustomerController";

export async function routes(fastify:FastifyInstance, options:FastifyPluginOptions) {
    fastify.get("/teste",async(request:FastifyRequest,reply:FastifyReply)=>{
        return{ok:true}
    })
    fastify.post("/customer", async(request:FastifyRequest, reply:FastifyReply)=>{
        return new CreateCustomerController().handle(request,reply)
    })


    fastify.get("/customers", async(request:FastifyRequest, reply:FastifyReply)=>{
        return new ListCustomerController().handle(request,reply)
    })

    fastify.delete("/customers", async(request:FastifyRequest, reply:FastifyReply)=>{
        return new DeleteCustomerController().handle(request,reply)
    })
}