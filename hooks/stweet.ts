import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { graphqlClient } from "../clients/api"
import { getAllStweetsQuery } from "../graphql/query/stweet"
import { createStweetMutation } from "../graphql/mutations/stweet"
//import {CreateStweetData} from "../gql/graphql"
import {CreateStweetData} from "../gql/graphql"
import toast from "react-hot-toast"

export const useCreateStweet = () =>{
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (payload: CreateStweetData)=> graphqlClient.request(createStweetMutation, {payload }),
        onMutate: (payload)=> toast.loading('Creating Stweet',{id:'1'} ),
        onSuccess: async(payload) => {
            await queryClient.invalidateQueries(["all-stweets"]);
            toast.success("Stweet Created!", {id: "1"})
        },
    });

    return mutation;
};

export const useGetAllStweets = () =>{
    const query = useQuery({
        queryKey: ["all-stweets"],
        queryFn: () => graphqlClient.request(getAllStweetsQuery),
    });
    return{...query, stweets: query.data?.getAllStweets};
};