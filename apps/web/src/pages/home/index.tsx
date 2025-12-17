import { useState } from 'react';
import { Button, Card, CardBody, CardTitle, CardActions } from '@airepo/design';
import { Link } from 'react-router-dom';

export default function Home() {
    const [count, setCount] = useState(0)

    return (
        <div className="p-4 container mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold">Vite + React + DaisyUI</h1>
                <Link to="/design">
                    <Button variant="outline">View Design System</Button>
                </Link>
            </div>

            <Card className="bg-base-100 shadow-xl border border-base-200">
                <CardBody>
                    <CardTitle>Counter</CardTitle>
                    <p>Current count is: {count}</p>
                    <CardActions className="justify-end">
                        <Button
                            variant="primary"
                            onClick={() => setCount((count) => count + 1)}
                        >
                            Increment
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={() => setCount(0)}
                        >
                            Reset
                        </Button>
                    </CardActions>
                </CardBody>
            </Card>
        </div>
    )
}
