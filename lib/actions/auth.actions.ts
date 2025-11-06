'use server'

import { email, success } from "zod"
import { auth } from "../better-auth/auth"
import { inngest } from "../inngest/client"
import { SignUpFormValues } from "../validations/auth.schema"

export const signUpWithEmail = async ({email, password, fullName, country, investmentGoals, riskTolerance, preferredIndustries} : SignUpFormValues ) => {
    try {
        const response = await auth.api.signUpEmail({
            body: {email, password, name: fullName}
        })

        if(response) {
            await inngest.send({
                name : 'app/user.created',
                data : {
                    email,
                    name: fullName,
                    country,
                    investmentGoals,
                    riskTolerance,
                    preferredIndustries
                }
            })
        }

        return { success : true, data: response }

    } catch (e) {
        console.log('Sign up failed', e)
        return {success: false, error: 'Sign up failed'}
    }
}