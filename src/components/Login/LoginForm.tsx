import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Form } from '@/components/ui/form';
import InputFields from './InputFields';
import PrimaryButton from './PrimaryButton';
import SecondaryLink from './SecondaryLink';
import { cn } from '@/lib/utils';

const loginFormSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z.string().min(1, { message: "Password is required." }),
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

interface LoginFormProps {
  className?: string;
  // onSubmitSuccess?: (data: LoginFormValues) => void; // Example callback for parent component
  // onSubmitError?: (error: unknown) => void; // Example callback for parent component
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // const [formError, setFormError] = React.useState<string | null>(null); // For general form errors if needed

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    // setFormError(null);
    console.log('Login form submitted:', data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Example success/error handling:
    // try {
    //   // const result = await api.login(data);
    //   // if (onSubmitSuccess) onSubmitSuccess(data);
    //   form.reset();
    // } catch (error) {
    //   // console.error("Login failed:", error);
    //   // setFormError("Invalid username or password. Please try again.");
    //   // if (onSubmitError) onSubmitError(error);
    // } finally {
    //   setIsLoading(false);
    // }
    setIsLoading(false); // Remove this if using try/catch/finally above
  };

  return (
    <div
      className={cn(
        'flex flex-col gap-6 p-6 bg-surface rounded-lg shadow-md w-96 text-p-primary-text',
        className
      )}
    >
      <h2 className="text-3xl font-bold text-center text-p-primary-text">
        Log in
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <InputFields<LoginFormValues>
            control={form.control}
            isLoading={isLoading}
            usernameFieldName="username"
            passwordFieldName="password"
          />
          
          {/* Example: Display general form error state if needed
          {formError && (
            <p className="text-sm text-destructive text-center">{formError}</p>
          )} 
          */} 

          <PrimaryButton type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log in'}
          </PrimaryButton>
        </form>
      </Form>
      
      <SecondaryLink href="#" className="self-center"> {/* Use a relevant href, e.g., /signup */} 
        or, sign up
      </SecondaryLink>
    </div>
  );
};

export default LoginForm;
