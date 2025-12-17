import DesignPageLayout from './DesignPageLayout';
import { DataInputPreview } from '@airepo/design';

export default function DataInputPage() {
    return (
        <DesignPageLayout>
            <h1 className="text-3xl font-bold mb-6">Data Input</h1>
            <div className="bg-base-200 rounded-box">
                <DataInputPreview />
            </div>
        </DesignPageLayout>
    );
}
