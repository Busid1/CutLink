"use client";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check, Copy, ExternalLink, Globe } from "lucide-react";
import Link from "next/link";

export default function ShortURLCard({ longURL, shortURL, isCopiedUrl, handleCopyToClipboard }: {
    longURL: string;
    shortURL: string;
    isCopiedUrl: boolean;
    handleCopyToClipboard: () => void;
}) {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    return (
        <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Globe className="w-6 h-6 text-green-600" />
                    URL Acortada
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div
                        className="group p-4 rounded-lg border border-gray-200 dark:border-gray-600 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 hover:shadow-md transition-all duration-200"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="flex-1 min-w-0">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Original:</span>
                                        <div className="flex-1 min-w-0 flex">
                                            <Link href={longURL} target="_blank" className="text-sm text-gray-800 dark:text-gray-200 hover:text-blue-600 transition truncate">
                                                {longURL}
                                            </Link>
                                        </div>
                                        <a
                                            href={longURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-green-600">Acortada:</span>
                                        <div className="flex-1 flex items-center min-w-0">
                                            <Link href={`${BASE_URL}${shortURL}`} target="_blank" className="text-sm w-full font-mono bg-green-50 hover:text-blue-600 transition dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded border truncate">
                                                {BASE_URL}{shortURL}
                                            </Link>
                                        </div>
                                        <a
                                            href={`${BASE_URL}${shortURL}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={handleCopyToClipboard}
                                    className="hover:bg-blue-50 hover:border-blue-300 transition-colors"
                                >
                                    {isCopiedUrl ? (
                                        <>
                                            <Check className="w-4 h-4 text-green-600" />
                                            <span className="ml-1 text-green-600">Copiado</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            <span className="ml-1">Copiar</span>
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}