import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { ShoppingBagIcon, } from '@heroicons/react/24/outline'
import { Hamburger } from '../menu/Hamburger'
import MobileNavbar from './MobileNavbar'

const navigation = {
    categories: [
        {
            id: 'sports',
            name: 'Sports',
            featured: [
                {
                    name: 'NBA',
                    href: '#',
                    imageSrc: '../src/assets/products/1.png',
                    imageAlt: 'Chicago Bulls 1980 finals',
                },
                {
                    name: 'NFL',
                    href: '#',
                    imageSrc: '../src/assets/products/2.png',
                    imageAlt: 'NFL 2011 Champions Ring',
                },
            ],
            sections: [
                {
                    id: 'american',
                    name: 'American Sports',
                    items: [
                        { name: 'NBA', href: '#' },
                        { name: 'NFL', href: '#' },
                        { name: 'MLB', href: '#' },
                        { name: 'NHL', href: '#' },
                        { name: 'MLS', href: '#' },
                        { name: 'NCAA', href: '#' },
                    ],
                },
                {
                    id: 'limited_editions',
                    name: 'Limited Editions',
                    items: [
                        { name: 'Collector Cards', href: '#' },
                        { name: 'Autographed Items', href: '#' },
                        { name: 'Equipment', href: '#' },
                    ],
                },
                {
                    id: 'others',
                    name: 'Others',
                    items: [
                        { name: 'Soccer', href: '#' },
                        { name: 'Olympic Games', href: '#' },
                        { name: 'E-Sports', href: '#' },
                        { name: 'Tennis', href: '#' },
                    ],
                },
            ],
        },
        {
            id: 'entertainment',
            name: 'Entertainment',
            featured: [
                {
                    name: 'Marvel Comics',
                    href: '#',
                    imageSrc: './src/assets/products/3.png',
                    imageAlt: 'Marvel N12 Comic Book',
                },
                {
                    name: 'Star Wars Lightsabers',
                    href: '#',
                    imageSrc: './src/assets/products/4.png',
                    imageAlt:
                        'Light saber used in the Star Wars film',
                },
            ],
            sections: [
                {
                    id: 'marvel',
                    name: 'Marvel',
                    items: [
                        { name: 'Marvel Comics and Graphic Novels', href: '#' },
                        { name: 'Superhero Action Figures', href: '#' },
                        { name: 'Movie Props and Memorabilia', href: '#' },
                        { name: 'Marvel Collectible Statues', href: '#' },
                    ],
                },
                {
                    id: 'movies',
                    name: 'Movies',
                    items: [
                        { name: 'Star Wars', href: '#' },
                        { name: 'The Lord of the Rings', href: '#' },
                        { name: 'Harry Potter', href: '#' },
                        { name: 'Jurassic Park', href: '#' },
                    ],
                },
                {
                    id: 'game',
                    name: 'Games',
                    items: [
                        { name: 'Video Game Collectibles', href: '#' },
                        { name: 'Board Games and Puzzles', href: '#' },
                        { name: 'Full Nelson', href: '#' },
                        { name: 'Gaming Art and Collectible Statues', href: '#' },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: 'About us', href: '#' },
        { name: 'New products', href: '/products' },
    ],
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const Logo = () => {
    return (
        <div className="ml-4 flex lg:ml-0">
            <a href="/home">
                <span className="sr-only">ebid</span>
                <img
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt=""
                />
            </a>
        </div>

    )
}

interface CategoryButtonProps {
    category: { name: string };
    open: boolean;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category, open }) => {
    return (
        <div className="relative flex">
            <Popover.Button
                className={classNames(
                    open
                        ? 'border-green-500 text-green-500'
                        : 'border-transparent text-gray-700 hover:text-gray-800',
                    'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                )}
            >
                {category.name}
            </Popover.Button>
        </div>
    );
};

interface PageProps {
    page: {
        name: string;
        href: string;
    };
}

const PageButton: React.FC<PageProps> = ({ page }) => {
    return (
        <a
            key={page.name}
            href={page.href}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
        >
            {page.name}
        </a>
    )
}

const Menu = () => {
    return (
        <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch" style={{ zIndex: 1 }}>
            <div className="flex h-full space-x-8">
                {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                        {({ open }) => (
                            <>
                                <CategoryButton category={category} open={open} />

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                        <div className="relative bg-white">
                                            <div className="mx-auto max-w-7xl px-8">
                                                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                                        {category.featured.map((item) => (
                                                            <div key={item.name} className="group relative text-base sm:text-sm">
                                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                                    <img
                                                                        src={item.imageSrc}
                                                                        alt={item.imageAlt}
                                                                        className="object-cover object-center"
                                                                    />
                                                                </div>
                                                                <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                                    {item.name}
                                                                </a>
                                                                <p aria-hidden="true" className="mt-1">
                                                                    Shop now
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                                        {category.sections.map((section) => (
                                                            <div key={section.name}>
                                                                <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                                                    {section.name}
                                                                </p>
                                                                <ul
                                                                    role="list"
                                                                    aria-labelledby={`${section.name}-heading`}
                                                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                >
                                                                    {section.items.map((item) => (
                                                                        <li key={item.name} className="flex">
                                                                            <a href={item.href} className="hover:text-gray-800">
                                                                                {item.name}
                                                                            </a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                ))}

                {navigation.pages.map((page, index) => (
                    <PageButton key={index} page={page} />
                ))}
            </div>
        </Popover.Group>

    )
}

interface LinkProps {
    children: React.ReactNode;
    href: string;
}

const Link: React.FC<LinkProps> = ({ children, href }) => {
    return (
        <a href={href} className="text-sm font-medium text-gray-700 hover:text-gray-800">
            {children}
        </a>
    );

};

const Links = () => {
    return (
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
            <Link href={"#"}>Sign in</Link>
            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
            <Link href={"#"}>Create account</Link>
        </div>
    )
}

const CurrencyFlag = () => {
    return (
        <div className="hidden lg:ml-8 lg:flex">
            <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                <img
                    src="https://tailwindui.com/img/flags/flag-united-states.svg"
                    alt=""
                    className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-sm font-medium">USD</span>
                <span className="sr-only">, change currency</span>
            </a>
        </div>

    )
}

interface CartProps {
    buyLen: number;
}

const Cart: React.FC<CartProps> = ({ buyLen }) => {
    return (
        <div className="ml-4 flow-root lg:ml-6">
            <a href="#" className="group -m-2 flex items-center p-2">
                <ShoppingBagIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{buyLen}</span>
                <span className="sr-only">items in cart, view bag</span>
            </a>
        </div>
    )
}


interface NavbarProps {
    cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <MobileNavbar setOpen={setOpen} />
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">
                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <Hamburger setOpen={setOpen} />
                            <Logo />
                            <Menu />

                            <div className="ml-auto flex items-center">
                                <Links />
                                <CurrencyFlag />
                                <Cart buyLen={cartCount} />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
