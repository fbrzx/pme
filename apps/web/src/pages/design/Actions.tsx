import DesignPageLayout from './DesignPageLayout';
import { ActionsPreview } from '@airepo/design';

export default function ActionsPage() {
    return (
        <DesignPageLayout>
            <h1 className="text-3xl font-bold mb-6">Actions</h1>
            <div className="bg-base-200 rounded-box">
                <ActionsPreview />
            </div>
        </DesignPageLayout>
    );
}
