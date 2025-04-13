import dynamic from 'next/dynamic';
import { BalatroProps } from './balatro';

const ClientComponent = dynamic(() => import('./balatro'), {
  ssr: true,
  loading: () => <div className="w-full h-full bg-DarkBlue animate-pulse" />,
});

export default function IridescenceServer(props: BalatroProps) {
  return <ClientComponent {...props} />;
}
