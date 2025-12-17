import { Divider, Drawer, DrawerToggle, DrawerContent, DrawerSide, DrawerOverlay, Footer, Hero, Join, Indicator, Stack, Mask } from '../components/layout';
import { Button } from '../components/actions';

export const LayoutPreview = () => {
    return (
        <div className="space-y-8 p-4">
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Hero</h2>
                <Hero className="bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Hello there</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                            <Button variant="primary">Get Started</Button>
                        </div>
                    </div>
                </Hero>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Divider</h2>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
                    <Divider>OR</Divider>
                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Drawer</h2>
                <div className="relative h-64 border border-base-300 bg-base-100 rounded-box overflow-hidden">
                    <Drawer className="lg:drawer-open h-full">
                        <DrawerToggle id="my-drawer" />
                        <DrawerContent className="flex flex-col items-center justify-center">
                            <h3 className="text-lg font-bold">Drawer Content</h3>
                            <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                            <p className="text-xs mt-2 opacity-60">(Note: drawer toggle id must match)</p>
                        </DrawerContent>
                        <DrawerSide className="absolute">
                            <DrawerOverlay htmlFor="my-drawer" />
                            <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                                <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li>
                            </ul>
                        </DrawerSide>
                    </Drawer>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Footer</h2>
                <Footer className="p-10 bg-neutral text-neutral-content rounded-box">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                </Footer>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Join</h2>
                <Join>
                    <Button className="join-item">Button</Button>
                    <Button className="join-item">Button</Button>
                    <Button className="join-item">Button</Button>
                </Join>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Indicator</h2>
                <Indicator item={<div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>} indicator="NEW">
                </Indicator>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Stack</h2>
                <Stack>
                    <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">1</div>
                    <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
                    <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
                </Stack>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Mask</h2>
                <Mask src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" className="w-32" variant="squircle" />
            </section>
        </div>
    );
};
