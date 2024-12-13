import prismaCliennt from "../prisma";

interface deleteCustomerprop{
    id:string;
}


class DeleteCustomerService{
    async execute({id}:deleteCustomerprop){

        if(!id){
            throw new Error("solicitacao invalida")
        }

        const findCustomer=await prismaCliennt.customer.findFirst({
            where:{
                id:id
            }
        })
        if(!findCustomer){
            throw new Error ("Cliente nao existe")
        }

        await prismaCliennt.customer.delete({
            where:{
                id:findCustomer.id
            }
        })
        return{message:"Deletado com sucesso"}
    }
}

export {DeleteCustomerService}