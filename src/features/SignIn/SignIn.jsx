import React from 'react'
import { auth, googleAuthProvider } from 'app/firebase'

const signIn = () => {
  // auth.signInWithPopup(googleAuthProvider)
  const token = "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ0b3ktY2hhdEBhcHBzcG90LmdzZXJ2aWNlYWNjb3VudC5jb20iLCJzdWIiOiJ0b3ktY2hhdEBhcHBzcG90LmdzZXJ2aWNlYWNjb3VudC5jb20iLCJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTUyMTkyOTU1MSwiZXhwIjoxNTIxOTMzMTUxLCJ1aWQiOjEsImNsYWltcyI6eyJwcmVtaXVtX2FjY291bnQiOmZhbHNlfX0.YKQh2WYR1EY14mNc2j4jfpp1ScLabjeVF0Tl-hKB4ythpsQ7WoJGWddlWOLsxYCfyCKwBQibrtLfYVAoa3Ot1QzbF_YgLCjegRVcmNeBnl-dYXuxjTWngeVqQPW8i-YlyOTOXtbO9R4At5KF6HXbPMhEjnGXKtYDryMv1b0tSQEb_VHs2VSiYM2qhM-JisciduEjw4LXeZpliTyYJi_oQuryDs-BUmj1j7oa0O80Xz0RixZnoPWBqyHag0boEJ0-h2AnO-0rKE1j7iXDExjRC4WJDdJQAmGgw6l_FHbMWA4krTIk7Tef-EUHiEt_INU-i7tKA-5up3WukBMx8PfLFQ"

  auth.signInWithCustomToken(token)
}

const SignIn = () => {
  return (
    <div>
      <button onClick={signIn}>
        Sign Up
      </button>
    </div>
  )
}

export default SignIn
