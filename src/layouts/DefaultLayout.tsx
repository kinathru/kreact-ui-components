import React from 'react';
import {AppNavigationMenu} from "@/components/AppNavigationMenu.tsx";

const DefaultLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="max-w-7xl mx-auto">
            <header className="flex justify-center mb-10">
                <AppNavigationMenu/>
            </header>
            <main className="flex gap-2 min-h-[calc(100vh-150px)] justify-center">
                <div className="border border-gray-200 p-5 rounded w-full">
                    {children}
                </div>
            </main>
            <footer>
                <div className="flex justify-center p-4">
                    <span>KREACT UI Components © {new Date().getFullYear()}</span>
                </div>
            </footer>
        </div>
    );
};

export default DefaultLayout;