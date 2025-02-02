import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/app/components/motionPrimitive/ui/dialog';
import { Variants, Transition } from 'motion/react';
import { ReactNode } from 'react';
import Button from '@/app/components/button';
import { MdOutlineForwardToInbox } from 'react-icons/md';

export function SubscribeModal({ children }: { children: ReactNode }) {
  const customVariants: Variants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 40,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 40,
    },
  };

  const customTransition: Transition = {
    type: 'spring',
    bounce: 0,
    duration: 0.25,
  };

  return (
    <Dialog variants={customVariants} transition={customTransition}>
      <DialogTrigger>
        <Button
          classes={
            'rounded-lg text-base font-medium px-20 flex flex-row items-center gap-2'
          }
        >
          <MdOutlineForwardToInbox />
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:w-full w-5/6 max-w-md bg-WHITE p-6 dark:bg-zinc-900">
        <DialogHeader>
          <DialogTitle className="text-DarkBlue dark:text-white text-lg sm:text-xl font-semibold">
            Subscribe your Eamil
          </DialogTitle>
          <DialogDescription className="text-zinc-600 dark:text-white font-medium">
            Enter your email address to receive updates and Market news.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex flex-col space-y-4">
          <label htmlFor="name" className="sr-only">
            Email
          </label>
          <input
            id="name"
            type="email"
            className="h-10 w-full rounded-lg border bg-white px-3 text-sm text-DarkBlue outline-none focus:ring-1 focus:ring-black/5 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:ring-white/5 sm:text-base"
            placeholder="Enter your email"
          />
          <Button classes={'rounded-lg font-medium'}>Subscribe</Button>
        </div>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
}
