"use client"
import { useGetUsersQuery } from "@/app/api/stack.api";






export const ListStackUsers = ()=> {


    const { data, error, isLoading } = useGetUsersQuery();

    console.log('user: ', data);


    return <div>hello</div>
}