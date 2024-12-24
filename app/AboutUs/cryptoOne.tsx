import React from 'react';
import {getCryptoData} from "@/app/lib/data";

async function CryptoOne() {
    const data = await getCryptoData();
    console.log(data)
    return (
        <div className='flex flex-col gap-2 bg-neutral-500 p-20'>
            <span>{data.Label}</span>
            <span>{data.Name}</span>
            <span>{data.Price}</span>
        </div>
    );
}

export default CryptoOne;