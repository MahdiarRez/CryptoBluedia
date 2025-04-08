import dynamic from 'next/dynamic';
import { IridescenceProps } from './Iridescence';

const ClientComponent = dynamic(() => import('./Iridescence'), {
  ssr: true,
  loading: () => <div className="w-full h-full bg-DarkBlue animate-pulse" />,
});

export default function IridescenceServer(props: IridescenceProps) {
  return <ClientComponent {...props} />;
}
