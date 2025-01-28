interface PageProps {
  params: {
    currency: string;
  };
}

async function Page({ params }: PageProps) {
  const { currency } = params;

  return (
    <div className={'h-dvh w-dvw bg-WHITE flex justify-center items-center'}>
      {currency}
    </div>
  );
}

export default Page;
