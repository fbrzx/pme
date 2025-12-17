import { Menu, Navbar, Steps, Tabs, Breadcrumbs, Link } from '../components/navigation';
import { Button } from '../components/actions';

export const NavigationPreview = () => {
    return (
        <div className="space-y-8 p-4">
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Navbar</h2>
                <Navbar className="bg-base-100 shadow-xl rounded-box">
                    <div className="flex-1">
                        <Button variant="ghost" className="text-xl">daisyUI</Button>
                    </div>
                    <div className="flex-none">
                        <Menu className="menu-horizontal px-1">
                            <li><a>Link</a></li>
                            <li>
                                <details>
                                    <summary>Parent</summary>
                                    <ul className="p-2 bg-base-100 rounded-t-none">
                                        <li><a>Link 1</a></li>
                                        <li><a>Link 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </Menu>
                    </div>
                </Navbar>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Steps</h2>
                <Steps>
                    <li className="step step-primary">Register</li>
                    <li className="step step-primary">Choose plan</li>
                    <li className="step">Purchase</li>
                    <li className="step">Receive Product</li>
                </Steps>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Tabs</h2>
                <Tabs variant="lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" defaultChecked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
                </Tabs>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Breadcrumbs</h2>
                <Breadcrumbs>
                    <li><a>Home</a></li>
                    <li><a>Documents</a></li>
                    <li>Add Document</li>
                </Breadcrumbs>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Link</h2>
                <div className="flex flex-col gap-2">
                    <Link href="#" className="link">Simple Link</Link>
                    <Link href="#" className="link link-primary">Primary Link</Link>
                    <Link href="#" className="link link-secondary">Secondary Link</Link>
                    <Link href="#" className="link link-accent">Accent Link</Link>
                    <Link href="#" className="link link-neutral">Neutral Link</Link>
                    <Link href="#" className="link link-hover">Link Hover</Link>
                </div>
            </section>
        </div>
    );
};
