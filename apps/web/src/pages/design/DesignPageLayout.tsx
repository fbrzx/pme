import { ReactNode } from 'react';
import { Navbar, NavbarStart, NavbarEnd, ThemeToggle, Footer, FooterTitle } from '@airepo/design';
import { Link, useLocation } from 'react-router-dom';

export default function DesignPageLayout({ children }: { children: ReactNode }) {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-base-100 pb-20">
            <Navbar className="bg-base-300 shadow-sm mb-8">
                <NavbarStart>
                    <Link to="/design" className="btn btn-ghost text-xl">Design System</Link>
                </NavbarStart>
                <NavbarEnd>
                    <ThemeToggle />
                    <Link to="/" className="btn btn-ghost">Home</Link>
                </NavbarEnd>
            </Navbar>

            <div className="container mx-auto flex gap-6 p-4">
                <aside className="w-64 h-fit bg-base-200 rounded-box p-4 hidden md:block">
                    <ul className="menu w-full p-0">
                        <li><Link to="/design" className={location.pathname === '/design' ? 'active' : ''}>Overview</Link></li>
                        <li className="menu-title">Category</li>
                        <li><Link to="/design/theme" className={location.pathname === '/design/theme' ? 'active' : ''}>Theme</Link></li>
                        <li><Link to="/design/actions" className={location.pathname === '/design/actions' ? 'active' : ''}>Actions</Link></li>
                        <li><Link to="/design/data-display" className={location.pathname === '/design/data-display' ? 'active' : ''}>Data Display</Link></li>
                        <li><Link to="/design/data-input" className={location.pathname === '/design/data-input' ? 'active' : ''}>Data Input</Link></li>
                        <li><Link to="/design/layout" className={location.pathname === '/design/layout' ? 'active' : ''}>Layout</Link></li>
                        <li><Link to="/design/navigation" className={location.pathname === '/design/navigation' ? 'active' : ''}>Navigation</Link></li>
                        <li><Link to="/design/feedback" className={location.pathname === '/design/feedback' ? 'active' : ''}>Feedback</Link></li>
                    </ul>
                </aside>
                <main className="flex-1">
                    {children}
                </main>
            </div>

            <Footer className="mt-20">
                <aside>
                    <FooterTitle>Services</FooterTitle>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </aside>
                <nav>
                    <FooterTitle>Company</FooterTitle>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <FooterTitle>Legal</FooterTitle>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </Footer>
        </div>
    );
}
