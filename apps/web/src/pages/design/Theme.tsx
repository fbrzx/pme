import DesignPageLayout from './DesignPageLayout';
import { ThemePreview } from '@airepo/design';

export default function ThemePage() {
    return (
        <DesignPageLayout>
            <h1 className="text-4xl font-bold mb-8">Theme Preview</h1>
            <ThemePreview />
        </DesignPageLayout>
    );
}
