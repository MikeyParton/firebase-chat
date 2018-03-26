import { schema } from 'normalizr'

const userSchema = new schema.Entity('users')
const conversationSchema = new schema.Entity('conversations', { users: [userSchema] })
const bookingSchema = new schema.Entity('bookings', { conversations: [conversationSchema] })

export const responseSchema = [bookingSchema]
