'use server';

export type FormState =
  | null
  | { email: string; password: string; firstName: string; lastName: string }
  | string;

export async function formActionLogin(
  prevState: FormState,
  formData: FormData
) {
  const email = formData.get('email') as string;
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const password = formData.get('password') as string;

  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  if (email && password && firstName && lastName) {
    return { email, password, firstName, lastName };
  }

  console.log('data form : ', formData);
  return 'fill all inputs';
}
