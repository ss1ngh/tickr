'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from "next/link";
import InputField from '@/components/forms/InputField';
import SelectField from '@/components/forms/SelectField';
import { signUpSchema, SignUpFormValues } from '@/lib/validations/auth';
import { INVESTMENT_GOALS, RISK_TOLERANCE_OPTIONS, PREFERRED_INDUSTRIES } from '@/lib/constants';
import { useState } from 'react';

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    
    resolver: zodResolver(signUpSchema),

    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustries: "Technology",
      terms: false,
    },
    mode: 'onBlur'
  });

  const onSubmit = async (data: SignUpFormValues) => {
    try {
      console.log('Form submitted:', data);
    } catch (e) {
      console.error('Sign-up error:', e);
    }
  };

  const handleNextStep = async () => {
    const isValid = await trigger(['fullName', 'email', 'password']);
    if (isValid) {
      setCurrentStep(2);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  return (
    <div className="space-y-3 max-w-4xl">
      <div className="space-y-1">
        <h1 className="text-lg lg:text-xl font-bold text-white">Sign up</h1>
        <p className="text-neutral-400 text-xs lg:text-sm">
          Create your account to get started
        </p>
      </div>

      
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="flex items-center">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
            currentStep === 1 ? 'bg-brand-primary text-black' : 'bg-neutral-800 text-white'
          }`}>
            1
          </div>
          <span className={`ml-1.5 text-xs ${currentStep === 1 ? 'text-white' : 'text-neutral-500'}`}>
            Basic Info
          </span>
        </div>
        <div className="w-8 h-0.5 bg-neutral-800 mx-1" />
        <div className="flex items-center">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold ${
            currentStep === 2 ? 'bg-brand-primary text-black' : 'bg-neutral-800 text-white'
          }`}>
            2
          </div>
          <span className={`ml-1.5 text-xs ${currentStep === 2 ? 'text-white' : 'text-neutral-500'}`}>
            Preferences
          </span>
        </div>
      </div>

      {currentStep === 1 && (
        <>
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

          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <InputField 
                name="fullName" 
                label="Full Name" 
                placeholder="John Doe" 
                register={register}
                error={errors.fullName}
              />

              <InputField 
                name="email" 
                label="Email" 
                placeholder="johndoe@gmail.com" 
                type="email"
                register={register}
                error={errors.email}
              />
            </div>

            <InputField 
              name="password" 
              label="Password" 
              placeholder="Enter your password (min. 8 characters)" 
              type="password"
              register={register}
              error={errors.password}
            />

            <button
              type="button"
              onClick={handleNextStep}
              className="w-full px-4 py-2 bg-brand-primary text-black text-sm font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors"
            >
              Continue
            </button>
          </div>
        </>
      )}

      {currentStep === 2 && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <h2 className="text-base font-semibold text-white mb-3">Investment Preferences</h2>
            
            <div className="space-y-3">
              <SelectField
                name="investmentGoals"
                label="Investment Goals"
                placeholder="Select your investment goal"
                options={INVESTMENT_GOALS}
                control={control}
                error={errors.investmentGoals}
                required
              />

              <SelectField
                name="riskTolerance"
                label="Risk Tolerance"
                placeholder="Select your risk tolerance"
                options={RISK_TOLERANCE_OPTIONS}
                control={control}
                error={errors.riskTolerance}
                required
              />

              <SelectField
                name="preferredIndustries"
                label="Preferred Industries"
                placeholder="Select your preferred industries"
                options={PREFERRED_INDUSTRIES}
                control={control}
                error={errors.preferredIndustries}
                required
              />
            </div>
          </div>

          {/* Terms&Conditions */}
          <div>
            <label className="flex items-start text-xs text-neutral-400 cursor-pointer">
              <input
                type="checkbox"
                {...register('terms')}
                className="w-3.5 h-3.5 mt-0.5 rounded border-neutral-700 bg-neutral-900 text-brand-primary focus:ring-brand-primary focus:ring-offset-0"
              />
              <span className="ml-2">
                I agree to the{' '}
                <a href="#" className="text-brand-primary hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-brand-primary hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>
            {errors.terms && (
              <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>
            )}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handlePreviousStep}
              className="w-1/3 px-3 py-2 bg-neutral-800 text-white text-sm font-semibold rounded-lg hover:bg-neutral-700 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-2/3 px-3 py-2 bg-brand-primary text-black text-sm font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Creating account...' : 'Create Account'}
            </button>
          </div>
        </form>
      )}

      <p className="text-center text-xs text-neutral-400 mt-4">
        Already have an account?{' '}
        <Link href="/sign-in" className="text-brand-primary hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
