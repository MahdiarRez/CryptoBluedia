import ButtonSidebar from '@/app/components/ui/buttonSidebar';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { MdAccountBox, MdSpaceDashboard } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';

export const links = [
  { icon: <MdSpaceDashboard />, href: '/dashboard', label: 'Dashboard' },
  { icon: <FaStar />, href: '/admin/categories', label: 'Watch List' },
  { icon: <MdAccountBox />, href: '/admin/tickets', label: 'Profile' },
  { icon: <IoMdSettings />, href: '/admin/users', label: 'Setting' },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-WHITE border-r-2 border-solid border-white/70">
      {/* <div className="h-[83px]  border-b border-solid border-light/70 z-40 flex items-center justify-start pr-9">
      </div> */}
      <aside className="w-64 text-white relative">
        <nav className="top-6 right-6 bottom-6 left-6 absolute flex flex-col justify-between py-7">
          <div>
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <ButtonSidebar
                  icon={link.icon}
                  label={link.label}
                  id={link.href}
                />
              </Link>
            ))}
          </div>
        </nav>
      </aside>
    </div>
  );
}
