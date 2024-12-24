import {createClient} from "@/app/utils/supabase/server";

export default async function Countries() {
    const supabase = await createClient();
    const {data: countries} = await supabase.from("currencyList").select();
    console.log(countries)
    return <p>hi</p>
}