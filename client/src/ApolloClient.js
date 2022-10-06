
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/'
})

const authLink = setContext((_, {header}) => {
    return {
        headers: {
            ...header,
            authorization: localStorage.getItem('sessiontoken') || ''
        }
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

