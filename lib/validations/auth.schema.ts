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
    .min(1, 'Full name is required')
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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
    
  investmentGoals: z.enum(['Growth', 'Income', 'Balanced', 'Conservative'] as const)
    .refine(val => !!val, { message: 'Please select your investment goal' }),
  
  country: z.string().min(1, 'Country is required'),
  
  riskTolerance: z.enum(['Low', 'Medium', 'High'] as const)
    .refine(val => !!val, { message: 'Please select your risk tolerance' }),
  
  preferredIndustries: z.enum(['Technology', 'Healthcare', 'Consumer Goods', 'Finance', 'Energy'] as const)
    .refine(val => !!val, { message: 'Please select at least one preferred industry' }),
  
  terms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions'
  })
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;

