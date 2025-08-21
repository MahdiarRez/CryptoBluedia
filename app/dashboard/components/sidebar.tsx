import ButtonSidebar from '@/app/components/ui/buttonSidebar';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { MdAccountBox, MdSpaceDashboard } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';

export const links = [
  { icon: <MdSpaceDashboard />, href: '/dashboard', label: 'Dashboard' },
  { icon: <FaStar />, href: '/dashboard/watchlist', label: 'Watch List' },
  { icon: <MdAccountBox />, href: '/dashboard/profile', label: 'Profile' },
  { icon: <IoMdSettings />, href: '/dashboard/setting', label: 'Setting' },
];

export default function Sidebar() {
  return (
    <div className="flex bg-WHITE items-center justify-start my-7 pr-9">
      <aside className="bg-white flex flex-col items-center justify-start rounded-2xl relative w-64 h-full">
        <nav className=" flex flex-col justify-between py-7 w-5/6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} prefetch={true}>
              <ButtonSidebar
                icon={link.icon}
                label={link.label}
                id={link.href}
              />
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
