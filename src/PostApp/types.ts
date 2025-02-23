import { Prisma } from "@prisma/client"

export type Post = Prisma.PostGetPayload<{}>
export type PostWithTag = Prisma.PostGetPayload<{ include: {tag: true}}>
export type CreatePost = Prisma.PostUncheckedCreateInput
export type PostWithComments = Prisma.PostGetPayload<{
    include:{
        comments: true
    }
}>