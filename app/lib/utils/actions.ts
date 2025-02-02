'use server';

export async function formActionLogin(
  prevState: string | null, // Type based on what you expect from previous state
  formData: FormData // FormData is built-in type
) {
  // Return type matches your action's return value
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    return 'empty'; // Consistent string return type
  }

  // Add your authentication logic here
  // Always return a string to match the Promise<string> type
  return 'success'; // Example success return value
}
