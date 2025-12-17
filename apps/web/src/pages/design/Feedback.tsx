import DesignPageLayout from './DesignPageLayout';
import { FeedbackPreview } from '@airepo/design';

export default function FeedbackPage() {
    return (
        <DesignPageLayout>
            <h1 className="text-3xl font-bold mb-6">Feedback</h1>
            <div className="bg-base-200 rounded-box">
                <FeedbackPreview />
            </div>
        </DesignPageLayout>
    );
}
