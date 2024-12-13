import prismaCliennt from "../prisma";


class ListCustomerService{
    async  execute() {
        const customers=await prismaCliennt.customer.findMany()

        return customers;
    }
}

export {ListCustomerService}