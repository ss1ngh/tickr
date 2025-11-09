'use server'

import { auth } from "../better-auth/auth"
import { inngest } from "../inngest/client"
import { SignUpFormValues } from "../validations/auth.schema"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

type SignUpResult = {
    success: boolean;
    error?: string;
    field?: string;
}

type SignInResult = {
    success: boolean;
    error?: string;
    field?: string;
}

export const signUpWithEmail = async ({email, password, fullName, country, investmentGoals, riskTolerance, preferredIndustries} : SignUpFormValues ): Promise<SignUpResult> => {
    try {
        const response = await auth.api.signUpEmail({
            body: {email, password, name: fullName}
        })

        console.log('SignUp response:', JSON.stringify(response, null, 2));

        // better-auth returns { token, user } on success
        if(response && response.user) {
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
            return { success: true }
        }

        return { success : false, error : 'Sign up failed due to unexpected error' }

    } catch (e: any) {
        console.log('Sign up failed', e)
        // Extract error message from better-auth - handle various error formats
        let errorMessage = 'Sign up failed';
        
        if (typeof e === 'string') {
            errorMessage = e;
        } else if (e?.message) {
            errorMessage = e.message;
        } else if (e?.error?.message) {
            errorMessage = e.error.message;
        } else if (e?.error) {
            errorMessage = String(e.error);
        }
        
        const lowerMessage = errorMessage.toLowerCase();
        if (lowerMessage.includes('email') && (lowerMessage.includes('already') || lowerMessage.includes('exists') || lowerMessage.includes('unique') || lowerMessage.includes('taken'))) {
            return { success: false, error: 'This email is already registered. Please use a different email or sign in.', field: 'email' }
        }
        
        return {success: false, error: errorMessage}
    }
}

export const signInWithEmail = async (email: string, password: string): Promise<SignInResult> => {
    try {
        const response = await auth.api.signInEmail({
            body: { email, password },
            headers: await headers()
        })

        console.log('SignIn response:', JSON.stringify(response, null, 2));

        // better-auth returns { token, user } on success
        if(response && response.user) {
            return { success: true }
        }

        return { success: false, error: 'Sign in failed due to unexpected error' }

    } catch (e: any) {
        console.log('Sign in failed', e)
        // Extract error message from better-auth - handle various error formats
        let errorMessage = 'Sign in failed';
        
        if (typeof e === 'string') {
            errorMessage = e;
        } else if (e?.message) {
            errorMessage = e.message;
        } else if (e?.error?.message) {
            errorMessage = e.error.message;
        } else if (e?.error) {
            errorMessage = String(e.error);
        }
        
        const lowerMessage = errorMessage.toLowerCase();
        if (lowerMessage.includes('email') || lowerMessage.includes('password') || lowerMessage.includes('invalid') || lowerMessage.includes('incorrect')) {
            return { success: false, error: 'Invalid email or password. Please try again.' }
        }
        
        return { success: false, error: errorMessage }
    }
}

export const logout = async () => {
    try {
        await auth.api.signOut({
            headers: await headers()
        })
    } catch (e) {
        console.error('Logout failed', e)
    }
}