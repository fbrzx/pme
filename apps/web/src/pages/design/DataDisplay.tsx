import DesignPageLayout from './DesignPageLayout';
import { DataDisplayPreview } from '@airepo/design';

export default function DataDisplayPage() {
    return (
        <DesignPageLayout>
            <h1 className="text-3xl font-bold mb-6">Data Display</h1>
            <div className="bg-base-200 rounded-box">
                <DataDisplayPreview />
            </div>
        </DesignPageLayout>
    );
}
