import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';

import { prisma } from '@/lib/db/prisma';
import { fallbackModeToFallbackField } from 'next/dist/lib/fallback';

const createAuthInstance = () => {
    return betterAuth({
        database : prismaAdapter(prisma, {
            provider: "postgresql",
        }),

        secret: process.env.BETTER_AUTH_SECRET,
        baseUrl: process.env.BETTER_AUTH_URL,

        emailAndPassword: {
            enabled: true,
            disableSignUp: false,
            requireEmailVerification: false,
            minPasswordLength: 8,
            maxPasswordLength: 128,
            autoSignIn: true,
        },

        plugins : [nextCookies()],
    });
}

declare global { 
    var betterauthInstance : ReturnType<typeof createAuthInstance> | undefined;
}


export const auth = global.betterauthInstance ?? createAuthInstance();

if(process.env.NODE_ENV != 'production') {
    global.betterauthInstance = auth;
}