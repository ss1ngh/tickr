import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  
  password: z
    .string()
    .min(1, 'Password is required'),
  
  rememberMe: z.boolean().optional(),
});

export type SignInFormValues = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  fullName: z
    .string()
    .min(2,'Full name is required')
    .max(100, 'Full name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces'),
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),

  country: z
    .string()
    .min(1, 'Country is required')
    .max(1),

  
  investmentGoals: z.enum(['Growth', 'Income', 'Balanced', 'Conservative'], {
    message: 'Please select an investment goal',
  }),
  
  riskTolerance: z.enum(['Low', 'Medium', 'High'], {
    message: 'Please select your risk tolerance',
  }),
  
  preferredIndustries: z.enum(['Technology' , 'Healthcare' , 'Consumer Goods' , 'Finance' , 'Energy'], {
    message : 'Please select one preferred industry'
  }),
  
  terms: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must accept the terms and conditions',
    }),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
