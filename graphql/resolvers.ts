import prisma from "../lib/prisma"

export const resolvers = {
  Query: {
    links: async () => await prisma.link.findMany()
  }
}