
import { Input, Select, Checkbox, Textarea, Toggle, Radio, Range, FileInput, Rating } from '../components/data-input';

export const DataInputPreview = () => {
    return (
        <div className="space-y-8 p-4">
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Inputs</h2>
                <div className="flex flex-col gap-4 max-w-xs">
                    <Input placeholder="Type here" />
                    <Input placeholder="Primary" variant="primary" />
                    <Input placeholder="Error" variant="error" />
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Select</h2>
                <Select className="max-w-xs">
                    <option disabled selected>Pick your favorite Simpson</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                </Select>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Checkbox & Toggle & Radio</h2>
                <div className="flex gap-4">
                    <Checkbox defaultChecked />
                    <Checkbox variant="secondary" defaultChecked />
                </div>
                <div className="flex gap-4">
                    <Toggle defaultChecked />
                    <Toggle variant="secondary" />
                </div>
                <div className="flex gap-4">
                    <Radio name="radio-1" defaultChecked />
                    <Radio name="radio-1" variant="primary" />
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Textarea</h2>
                <Textarea placeholder="Bio" className="textarea-bordered textarea-lg w-full max-w-xs" />
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Range</h2>
                <Range className="w-xs" />
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">File Input</h2>
                <FileInput className="w-full max-w-xs" />
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Rating</h2>
                <Rating />
            </section>
        </div>
    );
};
