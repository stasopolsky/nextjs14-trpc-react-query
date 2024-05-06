import {t} from '@/utils/trpc-server'

export  const appRouter = t.router({
    healthchecker: t.procedure.query(({ctx})=> {
        return{
            status:"succes",
            message:"Welcome to trpc with NEXT 14 and React Query"
        }
    })
})

export type AppRouter = typeof appRouter
