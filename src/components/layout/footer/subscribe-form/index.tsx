import { Button } from '@/components/common';
import React, { useRef, useState } from 'react';

export type FooterSubscribeFormProps = {
  title: string;
  subtitle: string;
  inputPlaceholder: string;
  ctaButtonText: string;
  onSubmit?: (values: { email: string; isChecked: boolean }) => void;
};

export function FooterSubscribeForm({
  title,
  subtitle,
  inputPlaceholder,
  ctaButtonText,
  onSubmit
}: FooterSubscribeFormProps) {
  const inputRef = useRef<any>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  return (
    <div className="flex justify-between flex-col md:flex-row">
      <div className="flex-1 md:mr-32 w-full md:w-auto">
        <div
          className="text-xl-semibold text-gray-900 font-primary"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <span className="text-md-regular text-gray-600 font-primary mt-8">{subtitle}</span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputRef?.current) {
            const q = (inputRef.current.value || '').trim();
            onSubmit && onSubmit({ email: q, isChecked });
          }
        }}
        className="w-full md:w-auto mt-32 md:mt-0"
      >
        <div className="flex flex-col md:flex-row">
          <input
            ref={inputRef}
            placeholder={inputPlaceholder}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white border border-solid border-gray-300 shadow-xs rounded-lg py-10 px-14 text-md-regular text-gray-500 outline-none placeholder:text-md-regular md:mr-16 w-full md:w-[269px] h-44"
          />
          <Button
            color="danger"
            size="lg"
            disabled={email.length <= 0 || !isChecked}
            type="submit"
            aria-label="subscribe-submit-button"
            className="h-44 mt-16 md:mt-0"
          >
            {ctaButtonText}
          </Button>
        </div>
      </form>
    </div>
  );
}
