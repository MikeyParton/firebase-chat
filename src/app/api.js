// const baseUrl = 'http://localhost:3001/api'
const baseUrl = 'https://firebase-chat-api.herokuapp.com/api'

export const loginUrl = `${baseUrl}/login`
export const usersUrl = `${baseUrl}/users`
export const bookingsUrl = userId => `${baseUrl}/users/${userId}/bookings`
