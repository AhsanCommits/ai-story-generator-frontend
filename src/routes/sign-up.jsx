import { SignUp } from '@clerk/clerk-react';

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center h-screen mt-[-30px]">
      <SignUp path="/sign-up" />
    </div>
  );
}
