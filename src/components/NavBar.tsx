import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from "/logo.png"

export function NavBar() {
    const [isActive, setIsActive] = useState('Home')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const navItems = ['Home', 'About', 'Journey', 'Projects']

    return (
        <nav className="px-4 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-white text-2xl font-bold">
                    <a href="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>

                <div className="hidden md:block">
                    <div className="bg-gray-600 rounded-md p-4">
                        <div className="flex items-center gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`${isActive === item
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-white'
                                        } transition-colors duration-200`}
                                    onClick={() => setIsActive(item)}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <a
                    href="/contact"
                    className="hidden md:block bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                    Contact Me
                </a>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 bg-gray-600 rounded-md p-4">
                    <div className="space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className={`block ${isActive === item
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    } transition-colors duration-200`}
                                onClick={() => {
                                    setIsActive(item)
                                    setIsMobileMenuOpen(false)
                                }}
                            >
                                {item}
                            </a>
                        ))}
                        <a
                            href="/contact"
                            className="block text-center bg-white text-black px-4 py-2 rounded-md"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}