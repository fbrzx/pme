import { useRef } from 'react';
import { Button, Modal, Swap, Dropdown } from '../components/actions';
import { SunIcon, MoonIcon } from '../icons';

export const ActionsPreview = () => {
    const modalRef = useRef<HTMLDialogElement>(null);

    return (
        <div className="space-y-8 p-4">
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Buttons</h2>
                <div className="flex flex-wrap gap-2">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="accent">Accent</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="outline">Outline</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                    <Button size="lg">Large</Button>
                    <Button size="md">Normal</Button>
                    <Button size="sm">Small</Button>
                    <Button size="xs">Tiny</Button>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Modal</h2>
                <Button onClick={() => modalRef.current?.showModal()}>Open Modal</Button>
                <Modal ref={modalRef} onClose={() => modalRef.current?.close()}>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <Button onClick={() => modalRef.current?.close()}>Close</Button>
                    </div>
                </Modal>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Swap</h2>
                <div className="flex gap-4">
                    <Swap
                        type="rotate"
                        onElement={<SunIcon className="w-8 h-8" />}
                        offElement={<MoonIcon className="w-8 h-8" />}
                    />
                    <Swap
                        type="flip"
                        onElement={<div className="text-xl">ON</div>}
                        offElement={<div className="text-xl">OFF</div>}
                    />
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Dropdown</h2>
                <div className="flex gap-4 h-40">
                    <Dropdown label="Click me">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 4</a></li>
                        <li><a>Item 5</a></li>
                    </Dropdown>
                </div>
            </section>
        </div>
    );
};
