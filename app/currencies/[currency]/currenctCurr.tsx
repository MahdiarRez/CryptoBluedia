import { createClient } from '@/app/lib/utils/supabaseServer';

export default async function Instruments() {
  const supabase = await createClient();
  const { data } = await supabase?.from('currenciesList').select('*');
  console.log(data);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
