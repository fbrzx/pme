import { Badge, Card, Typography, Avatar, Collapse, Stat, Stats, Table, Tooltip, Toast } from '../components/data-display';
import { Button } from '../components/actions';
import { Alert } from '../components/feedback';

export const DataDisplayPreview = () => {
    return (
        <div className="space-y-8 p-4">
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Typography</h2>
                <Typography.Heading level={1}>Heading 1</Typography.Heading>
                <Typography.Text>This is some body text.</Typography.Text>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Badges</h2>
                <div className="flex gap-2">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="accent">Accent</Badge>
                    <Badge variant="ghost">Ghost</Badge>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Avatars</h2>
                <div className="flex gap-4">
                    <Avatar placeholder="A" className="bg-neutral text-neutral-content" />
                    <Avatar src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" status="online" />
                    <Avatar placeholder="SQ" shape="squircle" className="bg-primary text-primary-content" />
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Card</h2>
                <Card className="w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component with shadow.</p>
                        <div className="card-actions justify-end">
                            <Button variant="primary">Buy Now</Button>
                        </div>
                    </div>
                </Card>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Collapse</h2>
                <Collapse title="Click me to open" icon="arrow" className="border border-base-300 bg-base-200">
                    <p>hello world</p>
                </Collapse>
                <Collapse title="Focus me to open" icon="plus" className="border border-base-300 bg-base-200">
                    <p>hello world</p>
                </Collapse>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Stats</h2>
                <Stats className="shadow">
                    <Stat
                        title="Downloads"
                        value="31K"
                        desc="Jan 1st - Feb 1st"
                    />
                    <Stat
                        title="New Users"
                        value="4,200"
                        desc="↗︎ 400 (22%)"
                        className="text-secondary"
                    />
                </Stats>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Table</h2>
                <Table zebra>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                    </tbody>
                </Table>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Tooltip</h2>
                <Tooltip tip="hello" className="mr-4">
                    <Button>Hover me</Button>
                </Tooltip>
                <Tooltip tip="world" position="bottom" color="primary">
                    <Button>Hover me too</Button>
                </Tooltip>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Toast</h2>
                <div className="relative h-32 bg-base-200 rounded-box overflow-hidden">
                    <p className="p-4 text-sm opacity-50">Toasts are absolute positioned. Showing simulated placement.</p>
                    <Toast horizontal="center" vertical="middle" className="absolute">
                        <Alert status="info">
                            <span>New mail arrived.</span>
                        </Alert>
                    </Toast>
                </div>
            </section>
        </div>
    );
};
