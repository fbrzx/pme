import DesignPageLayout from './DesignPageLayout';
import { NavigationPreview } from '@airepo/design';

export default function NavigationPage() {
    return (
        <DesignPageLayout>
            <h1 className="text-3xl font-bold mb-6">Navigation</h1>
            <div className="bg-base-200 rounded-box">
                <NavigationPreview />
            </div>
        </DesignPageLayout>
    );
}
