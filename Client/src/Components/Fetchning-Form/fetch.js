    import React, { useState } from 'react'

    const Fetchingform
        = () => {
            const [user, setUser] = useState('')
            const [email, setEmail] = useState('')

            const handleSubmit = (e) => {
                e.preventDefault()
                console.log(user)
                console.log(email);

            }
            return (
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="enter your name" onChange={(e) => { setUser(e.target.value) }} value={user} required />
                        <input type="email" placeholder="enter your email" onChange={(e) => { setEmail(e.target.value) }} value={email} required />
                        <button type="submit">Submit</button>
                    </form>

                </div>
            )
        }

    export default Fetchingform;