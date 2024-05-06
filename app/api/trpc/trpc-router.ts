import userRouter from '@/server/user-route';
import {t} from '@/utils/trpc-server';
import { createServerSideHelpers } from '@trpc/react-query/server';
import SuperJSON from 'superjson';

export  const healthCheckerRouter = t.router({
    healthchecker: t.procedure.query(({ctx})=> {
        return{
            status:"succes",
            message:"Welcome to trpc with NEXT 14 and React Query"
        }
    })
})



export const appRouter = t.mergeRouters(userRouter, healthCheckerRouter);


export const createSSRHelper = () =>
    createServerSideHelpers({
      router: appRouter,
      transformer: SuperJSON,
      ctx: () => {},
    });


export type AppRouter = typeof appRouter
