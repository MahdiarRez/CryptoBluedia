// 'use server';
//
// import { supabaseClient } from '@/app/lib/utils/supabaseClient';
// import { redirect } from 'next/navigation';
//
// export type FormState = {
//   errors?: {
//     email?: string[];
//     password?: string[];
//     firstName?: string[];
//     lastName?: string[];
//     general?: string[];
//   };
//   message?: string;
//   success?: boolean;
// };
//
// export async function handleSignUp(
//   prevState: FormState,
//   formData: FormData
// ): Promise<FormState> {
//   // Extract form data
//   const email = formData.get('email') as string;
//   const firstName = formData.get('firstName') as string;
//   const lastName = formData.get('lastName') as string;
//   const password = formData.get('password') as string;
//
//   // Basic validation
//   if (!email || !password || !firstName || !lastName) {
//     return {
//       errors: {
//         general: ['All fields are required'],
//       },
//     };
//   }
//
//   try {
//     // 1. Create user in Supabase Auth
//     console.log('hi');
//     const { data: authData, error: authError } =
//       await supabaseClient.auth.signUp({
//         email,
//         password,
//         options: {
//           data: {
//             first_name: firstName,
//             last_name: lastName,
//           },
//           emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm`,
//         },
//       });
//
//     if (authError) {
//       return {
//         errors: {
//           general: [authError.message],
//         },
//       };
//     }
//
//     // 2. Create user profile in database
//     const { error: profileError } = await supabaseClient
//       .from('profiles')
//       .insert({
//         id: authData.user?.id,
//         first_name: firstName,
//         last_name: lastName,
//         email,
//       });
//
//     if (profileError) {
//       await supabaseClient.auth.admin.deleteUser(authData.user?.id!);
//       return {
//         errors: {
//           general: ['Failed to create user profile'],
//         },
//       };
//     }
//
//     // Redirect if email confirmation is enabled
//     if (!authData.user?.identities?.length) {
//       return { success: true, message: 'Confirmation email sent!' };
//     }
//
//     redirect('/dashboard');
//   } catch (error) {
//     console.error('Signup error:', error);
//     return {
//       errors: {
//         general: ['An unexpected error occurred'],
//       },
//     };
//   }
// }
