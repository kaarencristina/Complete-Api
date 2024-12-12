import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { request } from "http";
import { CreateCustomerController } from "./controllers/CreateCostumerController";

export async function routes(fastify:FastifyInstance, options:FastifyPluginOptions) {
    fastify.get("/teste",async(request:FastifyRequest,reply:FastifyReply)=>{
        return{ok:true}
    })
    fastify.post("/customer", async(request:FastifyRequest, reply:FastifyReply)=>{
        return new CreateCustomerController().handle(request,reply)
    })
}