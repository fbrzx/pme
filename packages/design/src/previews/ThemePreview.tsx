import React, { useState, useEffect } from 'react';

export const ThemePreview: React.FC = () => {
    const [theme, setTheme] = useState<string | null>(
        document.documentElement.getAttribute('data-theme')
    );

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    const newTheme = document.documentElement.getAttribute('data-theme');
                    setTheme(newTheme);
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="space-y-8 p-6">
            <h2 className='text-lg font-semibold mb-3'>
               {theme}
            </h2>

            {/* Color Swatches */}
            <div>
                <h3 className="text-xl font-semibold mb-3">Color Palette</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <div className="h-20 bg-primary rounded-lg"></div>
                        <div className="text-sm">
                            <div className="font-semibold">Primary</div>
                            <div className="text-xs text-base-content/60">#0de0e1</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-20 bg-secondary rounded-lg"></div>
                        <div className="text-sm">
                            <div className="font-semibold">Secondary</div>
                            <div className="text-xs text-base-content/60">#36d877</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-20 bg-accent rounded-lg"></div>
                        <div className="text-sm">
                            <div className="font-semibold">Accent</div>
                            <div className="text-xs text-base-content/60">#ff4f43</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-20 bg-neutral rounded-lg"></div>
                        <div className="text-sm">
                            <div className="font-semibold">Neutral</div>
                            <div className="text-xs text-base-content/60">#33353e</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-20 bg-base-100 rounded-lg border border-neutral"></div>
                        <div className="text-sm">
                            <div className="font-semibold">Base 100</div>
                            <div className="text-xs text-base-content/60">#1b1d21</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-20 bg-base-200 rounded-lg"></div>
                        <div className="text-sm">
                            <div className="font-semibold">Base 200</div>
                            <div className="text-xs text-base-content/60">#23242a</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-20 bg-base-300 rounded-lg"></div>
                        <div className="text-sm">
                            <div className="font-semibold">Base 300</div>
                            <div className="text-xs text-base-content/60">#2a2b32</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-20 bg-info rounded-lg"></div>
                        <div className="text-sm">
                            <div className="font-semibold">Info</div>
                            <div className="text-xs text-base-content/60">#0de0e1</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-20 bg-success rounded-lg"></div>
                        <div className="text-sm">
                            <div className="font-semibold">Success</div>
                            <div className="text-xs text-base-content/60">#36d877</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-20 bg-warning rounded-lg"></div>
                        <div className="text-sm">
                            <div className="font-semibold">Warning</div>
                            <div className="text-xs text-base-content/60">#ffb648</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="h-20 bg-error rounded-lg"></div>
                        <div className="text-sm">
                            <div className="font-semibold">Error</div>
                            <div className="text-xs text-base-content/60">#ff4f43</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Component Examples */}
            <div>
                <h3 className="text-xl font-semibold mb-3">Components</h3>
                <div className="space-y-4">
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-2">
                        <button className="btn btn-primary">Primary</button>
                        <button className="btn btn-secondary">Secondary</button>
                        <button className="btn btn-accent">Accent</button>
                        <button className="btn btn-neutral">Neutral</button>
                        <button className="btn btn-info">Info</button>
                        <button className="btn btn-success">Success</button>
                        <button className="btn btn-warning">Warning</button>
                        <button className="btn btn-error">Error</button>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="card bg-base-200 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-primary">Audit Progress</h2>
                                <p>Track your audit completion in real-time with AI assistance.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary btn-sm">View Details</button>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-200 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title text-secondary">Interview Flow</h2>
                                <p>Manage your interviews with AI-powered transcription.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-secondary btn-sm">Start</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alerts */}
                    <div className="space-y-2">
                        <div className="alert alert-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>New audit insights available for review.</span>
                        </div>

                        <div className="alert alert-success">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Interview completed successfully!</span>
                        </div>

                        <div className="alert alert-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span>Some questions remain unanswered.</span>
                        </div>

                        <div className="alert alert-error">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Failed to save audit data.</span>
                        </div>
                    </div>

                    {/* Progress */}
                    <div className="space-y-2">
                        <progress className="progress progress-primary w-full" value="70" max="100"></progress>
                        <progress className="progress progress-secondary w-full" value="40" max="100"></progress>
                        <progress className="progress progress-accent w-full" value="90" max="100"></progress>
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                        <div className="badge badge-primary">Primary</div>
                        <div className="badge badge-secondary">Secondary</div>
                        <div className="badge badge-accent">Accent</div>
                        <div className="badge badge-info">Info</div>
                        <div className="badge badge-success">Success</div>
                        <div className="badge badge-warning">Warning</div>
                        <div className="badge badge-error">Error</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
