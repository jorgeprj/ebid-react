import { Fragment } from 'react'
import { Dialog, Tab, Transition } from '@headlessui/react'
import { Close } from '../menu/Hamburger';

const navigation = {
    categories: [
        {
            id: 'sports',
            name: 'Sports',
            featured: [
                {
                    name: 'NBA',
                    href: '#',
                    imageSrc: './src/assets/products/1.png',
                    imageAlt: 'Chicago Bulls 1980 finals',
                },
                {
                    name: 'NFL',
                    href: '#',
                    imageSrc: './src/assets/products/2.png',
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

interface Category {
    id: string;
    name: string;
    featured: FeaturedItem[];
    sections: Section[];
}

interface FeaturedItem {
    name: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
}

interface SectionItem {
    name: string;
    href: string;
}

interface Section {
    id: string;
    name: string;
    items: SectionItem[];
}

interface NavigationProps {
    navigation: {
        categories: Category[];
    };
}

const Navigation: React.FC<NavigationProps> = ({ navigation }: NavigationProps) => {
    return (
        <div className="border-b border-gray-200">
            <Tab.List className="-mb-px flex space-x-8 px-4">
                {navigation.categories.map((category: Category) => (
                    <Tab
                        key={category.name}
                        className={({ selected }) =>
                            classNames(
                                selected ? 'border-green-600 text-green-600' : 'border-transparent text-gray-900',
                                'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                        }
                    >
                        {category.name}
                    </Tab>
                ))}
            </Tab.List>
        </div>
    );
};


const NavigationPanel: React.FC<NavigationProps> = ({ navigation }: NavigationProps) => {
    return (
        <Tab.Panels as={Fragment}>
            {navigation.categories.map((category: Category) => (
                <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="grid grid-cols-2 gap-x-4">
                        {category.featured.map((item: FeaturedItem) => (
                            <div key={item.name} className="group relative text-sm">
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                    <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
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
                    {category.sections.map((section: Section) => (
                        <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                                {section.name}
                            </p>
                            <ul
                                role="list"
                                aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                className="mt-6 flex flex-col space-y-6"
                            >
                                {section.items.map((item: SectionItem) => (
                                    <li key={item.name} className="flow-root">
                                        <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </Tab.Panel>
            ))}
        </Tab.Panels>
    );
};


interface MobileNavbarProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


interface LinkProps {
    children: React.ReactNode;
    href: string;
}

const Link: React.FC<LinkProps> = ({ children, href }) => {
    return (
        <a href={href} className="-m-2 block p-2 font-medium text-gray-900">
            {children}
        </a>
    );

};

const Links = () => {
    return (
        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
        <div className="flow-root">
            <Link href="#">
                Sign in
            </Link>
        </div>
        <div className="flow-root">
            <Link href="#">
                Create account
            </Link>
        </div>
    </div>
    )
}

const CurrencyFlag = () => {
    return (
        <div className="border-t border-gray-200 px-4 py-6">
            <a href="#" className="-m-2 flex items-center p-2">
                <img
                    src="https://tailwindui.com/img/flags/flag-united-states.svg"
                    alt=""
                    className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">USD</span>
                <span className="sr-only">, change currency</span>
            </a>
        </div>

    )
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ setOpen }: MobileNavbarProps) => {
    return (
        <div className="fixed inset-0 z-40 flex">
            <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                    <div className="flex px-4 pb-2 pt-5">
                        <Close setOpen={setOpen} />
                    </div>


                    <Tab.Group as="div" className="mt-2">
                        <Navigation navigation={navigation} />
                        <Tab.Panels as={Fragment}>
                            <NavigationPanel navigation={navigation} />
                        </Tab.Panels>
                    </Tab.Group>

                    <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                        {navigation.pages.map((page) => (
                            <div key={page.name} className="flow-root">
                                <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                    {page.name}
                                </a>
                            </div>
                        ))}
                    </div>

                    <Links/>

                    <CurrencyFlag/>


                </Dialog.Panel>
            </Transition.Child>
        </div>
    )
}

export default MobileNavbar