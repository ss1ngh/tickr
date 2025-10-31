'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import InputField from '@/components/forms/InputField';
import { signInSchema, SignInFormValues } from '@/lib/validations/auth';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onBlur'
  });

  const onSubmit = async (data: SignInFormValues) => {
    try {
      console.log('Form submitted:', data);
      // TODO: Implement actual sign-in logic
    } catch (e) {
      console.error('Sign-in error:', e);
    }
  };

  return (
    <div className="space-y-3 max-w-4xl">
      <div className="space-y-1">
        <h1 className="text-lg lg:text-xl font-bold text-white">Log in</h1>
        <p className="text-neutral-400 text-xs lg:text-sm">
          Welcome back! Log in to access your account
        </p>
      </div>

      <div>
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 px-2 py-1.5 border border-neutral-600 rounded-lg text-white text-sm hover:bg-neutral-900 transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="text-sm">Continue with Google</span>
        </button>
      </div>

      <div className="relative my-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral-800" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="px-3 bg-black text-neutral-500">OR</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <InputField 
          name="email" 
          label="Email" 
          placeholder="Enter your email" 
          type="email"
          register={register}
          error={errors.email}
        />

        <InputField 
          name="password" 
          label="Password" 
          placeholder="Enter your password" 
          type="password"
          register={register}
          error={errors.password}
        />

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center text-neutral-400 cursor-pointer">
            <input
              type="checkbox"
              {...register('rememberMe')}
              className="w-3.5 h-3.5 rounded border-neutral-700 bg-neutral-900 text-brand-primary focus:ring-brand-primary focus:ring-offset-0"
            />
            <span className="ml-2">Remember me</span>
          </label>
          <a href="#" className="text-brand-primary hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2 bg-brand-primary text-black text-sm font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Logging in...' : 'Log in'}
        </button>
      </form>

      <p className="text-center text-xs text-neutral-400 mt-4">
        Don&apos;t have an account?{' '}
        <Link href="/sign-up" className="text-brand-primary hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
