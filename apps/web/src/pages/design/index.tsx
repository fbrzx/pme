import DesignPageLayout from './DesignPageLayout';
import { Card, CardBody, CardTitle } from '@repo/design';
import { Link } from 'react-router-dom';

export default function DesignPage() {
    const categories = [
        { name: 'Theme', path: '/design/theme', desc: 'Theme Preview' },
        { name: 'Actions', path: '/design/actions', desc: 'Buttons, Modals, Swaps, Dropdowns, Theme Toggle' },
        { name: 'Data Display', path: '/design/data-display', desc: 'Badges, Cards, Typography, Avatars, Collapses, Stats, Tables, Tooltips, Toasts' },
        { name: 'Data Input', path: '/design/data-input', desc: 'Inputs, Selects, Checkboxes, Textareas, Toggles, Radios, Ranges, File Inputs, Ratings' },
        { name: 'Layout', path: '/design/layout', desc: 'Dividers, Drawers, Footers, Heros, Joins, Indicators, Stacks, Masks' },
        { name: 'Navigation', path: '/design/navigation', desc: 'Menus, Navbars, Steps, Tabs, Breadcrumbs, Links' },
        { name: 'Feedback', path: '/design/feedback', desc: 'Alerts' },
    ];

    return (
        <DesignPageLayout>
            <h1 className="text-4xl font-bold mb-8">Design System Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat) => (
                    <Link key={cat.path} to={cat.path} className="hover:no-underline">
                        <Card className="h-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border border-base-200">
                            <CardBody>
                                <CardTitle>{cat.name}</CardTitle>
                                <p>{cat.desc}</p>
                            </CardBody>
                        </Card>
                    </Link>
                ))}
            </div>
        </DesignPageLayout>
    );
}
