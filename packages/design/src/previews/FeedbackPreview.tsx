
import { Alert } from '../components/feedback';

export const FeedbackPreview = () => {
    return (
        <div className="space-y-8 p-4">
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Alert</h2>
                <Alert status="info">New software update available.</Alert>
                <Alert status="success">Your purchase has been confirmed!</Alert>
                <Alert status="warning">Warning: Invalid email address!</Alert>
                <Alert status="error">Error! Task failed successfully.</Alert>
            </section>
        </div>
    );
};
