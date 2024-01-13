import React, { FC, MouseEventHandler } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

interface HamburgerProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Hamburger: FC<HamburgerProps> = ({ setOpen }) => {
    const handleButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
        setOpen(true);
    };

    return (
        <button
            type="button"
            className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
            onClick={handleButtonClick}
        >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
    );
};


export const Close: FC<HamburgerProps> = ({ setOpen }) => {
    const handleButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
        setOpen(false);
    };

    return (
        <button
            type="button"
            className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
            onClick={handleButtonClick}
        >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>

    )
}