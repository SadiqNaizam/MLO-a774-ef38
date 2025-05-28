import React from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface InputFieldsProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  isLoading?: boolean;
  usernameFieldName?: FieldPath<TFieldValues>;
  passwordFieldName?: FieldPath<TFieldValues>;
  usernamePlaceholder?: string;
  passwordPlaceholder?: string;
}

const InputFields = <TFieldValues extends FieldValues> ({
  control,
  isLoading,
  usernameFieldName = 'username' as FieldPath<TFieldValues>,
  passwordFieldName = 'password' as FieldPath<TFieldValues>,
  usernamePlaceholder = 'Username',
  passwordPlaceholder = 'Password',
}: InputFieldsProps<TFieldValues>) => {
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name={usernameFieldName}
        render={({ field }) => (
          <FormItem>
            {/* No FormLabel, using placeholder as per image */}
            <FormControl>
              <Input
                type="text"
                placeholder={usernamePlaceholder}
                className={cn(
                  'rounded-lg text-p-primary-text placeholder:text-p-secondary-text bg-card border-p-border focus-visible:ring-ring',
                  'h-10 md:h-11' // Consistent height, can be adjusted
                )}
                disabled={isLoading}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={passwordFieldName}
        render={({ field }) => (
          <FormItem>
            {/* No FormLabel, using placeholder as per image */}
            <FormControl>
              <Input
                type="password"
                placeholder={passwordPlaceholder}
                className={cn(
                  'rounded-lg text-p-primary-text placeholder:text-p-secondary-text bg-card border-p-border focus-visible:ring-ring',
                  'h-10 md:h-11' // Consistent height
                )}
                disabled={isLoading}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputFields;
