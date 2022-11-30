import { api } from "../../app/services/api";

export const authService=api.injectEndpoints({
    endpoints:builder=>({
        login:builder.mutation({
            query:credentials=>({
                url:'/auth',
                method:'POST',
                body:{...credentials}
            })
        }),
    })
})

export const {useLoginMutation}=authService