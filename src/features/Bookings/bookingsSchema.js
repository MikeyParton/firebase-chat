import { schema } from 'normalizr'

const userSchema = new schema.Entity('users')
const conversationSchema = new schema.Entity('conversations', { users: [userSchema] })
const businessSchema = new schema.Entity('businesses')

const bookingSchema = new schema.Entity('bookings', {
  conversations: [conversationSchema],
  user: userSchema,
  business: businessSchema
})

export const responseSchema = [bookingSchema]
