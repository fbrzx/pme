import DesignPageLayout from './DesignPageLayout';
import { LayoutPreview } from '@airepo/design';

export default function LayoutPage() {
    return (
        <DesignPageLayout>
            <h1 className="text-3xl font-bold mb-6">Layout</h1>
            <div className="bg-base-200 rounded-box">
                <LayoutPreview />
            </div>
        </DesignPageLayout>
    );
}
