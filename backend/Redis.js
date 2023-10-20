import { SchemaFieldTypes, createClient } from "redis";


export const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_URL,
        port: process.env.NODE_ENV === 'production' ? 12522 : 6379
    }
})




export const schemaLastViewRedis = async () => {
    await client.ft.create('cookiesAvatar', {
        '$.expires': {
            type: SchemaFieldTypes.NUMERIC,
            AS: 'expires'
        },
        '$.value': {
            type: SchemaFieldTypes.NUMERIC,
            AS: 'value'
        },
        '$.favorites':{
            type: SchemaFieldTypes.TAG,
            AS: 'favorites'
        },
        '$.lastView': {
            type: SchemaFieldTypes.TAG,
            AS: 'lastView'
        }
    }, {
        ON: 'JSON',
        PREFIX: 'cookieAvatar:'
    })
}
