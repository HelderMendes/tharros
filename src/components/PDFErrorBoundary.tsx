import React, { Component, ErrorInfo, ReactNode } from 'react';
import { BookOpen, AlertTriangle } from 'lucide-react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class PDFErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error in PDF Viewer:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex w-full flex-col items-center justify-center space-y-6 rounded-lg border border-red-200 bg-red-50 p-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                        <AlertTriangle className="h-8 w-8 text-red-600" />
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-gray-800">Weergavefout PDF</h3>
                        <p className="max-w-md text-gray-600">
                            Helaas kan de PDF preview niet worden weergegeven op dit apparaat. U kunt het document alsnog bekijken via de onderstaande
                            knop.
                        </p>
                    </div>

                    <a
                        href="/files/ambtelijk-leiderschap_lecture.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-xl bg-slate-600 px-8 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-gold-600 hover:shadow-lg"
                    >
                        <BookOpen className="mr-3 h-5 w-5" />
                        Open PDF in nieuwe tab
                    </a>
                </div>
            );
        }

        return this.props.children;
    }
}

export default PDFErrorBoundary;
