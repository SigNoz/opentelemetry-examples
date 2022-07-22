import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class HelloResolver {

    @Query(returns => String)
    async helloWorld() {
        return "Hello, World from GraphQL";
    }
}