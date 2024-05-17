import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navbar2() {
    return (
        <nav>
            <h1>navbar</h1>
            <Link href="/dapp/buy">Buy DataSet</Link>
            <Link href="/dapp/sell">Sell DataSet</Link>
            <ConnectButton />
        </nav>
    );
}

const navigation = [
    { name: "Buy Dataset", href: "/dapp/buy" },
    { name: "Sell Dataset", href: "/dapp/sell" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const pathname = usePathname();
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Link href="/">
                                                <Image
                                                    src="/logo.png"
                                                    alt="AI Dataset Marketplace"
                                                    width={40}
                                                    height={40}
                                                />
                                            </Link>
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    <Link
                                                        href={item.href}
                                                        key={item.name}
                                                    >
                                                        <div
                                                            key={item.name}
                                                            className={classNames(
                                                                pathname.indexOf(
                                                                    item.href
                                                                ) >= 0
                                                                    ? "bg-gray-900 text-white"
                                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                                "rounded-md px-3 py-2 text-sm font-medium"
                                                            )}
                                                            aria-current={
                                                                pathname.indexOf(
                                                                    item.href
                                                                ) >= 0
                                                                    ? "page"
                                                                    : undefined
                                                            }
                                                        >
                                                            {item.name}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <ConnectButton />
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">
                                                Open main menu
                                            </span>
                                            {open ? (
                                                <XMarkIcon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <Bars3Icon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                pathname.indexOf(item.href) >= 0
                                                    ? "bg-gray-900 text-white"
                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                "block rounded-md px-3 py-2 text-base font-medium"
                                            )}
                                            aria-current={
                                                pathname.indexOf(item.href) >= 0
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="border-t border-gray-700 pb-3 pt-4">
                                    <div className="flex items-center px-5">
                                        <ConnectButton />
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    );
}
