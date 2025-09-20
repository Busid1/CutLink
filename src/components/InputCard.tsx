"use client";
import { FormEvent, useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, Check, Link2, Scissors, Zap } from "lucide-react";
import { Input } from "./ui/input";
import ShortURLCard from "./ShortURLCard";

export default function InputCard() {
    const [longURL, setLongURL] = useState("");
    const [shortURL, setShortURL] = useState("");
    const [isCopiedUrl, setIsCopiedUrl] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const linkRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*(\?[\w@&=.;%-]+)?\/?$/;
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const errorNotify = () => toast.error("Invalid URL");
    const successNotify = () => toast.success("Copied to clipboard.");

    const handleShortenUrl = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (!linkRegex.test(longURL)) {
                errorNotify();
                setIsLoading(false)
                return;
            }
            fetch("/api/shortURL", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ longURL })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.shortURL) {
                        setIsLoading(false)
                    }
                    setShortURL(data.shortURL);
                    toast.custom(t => {
                        return (
                            <div className={`bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-4 rounded shadow-lg flex items-center gap-3 ${t.visible ? 'animate-enter' : 'animate-leave'}`}>
                                <Check className="w-5 h-5 text-green-500" />
                                <span>URL acortada con éxito!</span>
                            </div>
                        )
                    })
                })
        } catch (error) {
            console.log(error);
        }
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(`${BASE_URL}${shortURL}`);
        successNotify();
        setIsCopiedUrl(true);
        setTimeout(() => setIsCopiedUrl(false), 2000);
    }

    return (
        <>
            <Card className="mb-8 shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-2xl">
                        <Link2 className="w-6 h-6 text-blue-600" />
                        Acortar nueva URL
                    </CardTitle>
                    <CardDescription className="text-base">
                        Pega tu enlace largo aquí y obtén una versión compacta al instante
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form onSubmit={handleShortenUrl} className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1">
                            <Input
                                id="longURLInput"
                                type="url"
                                placeholder="https://ejemplo.com/mi-enlace-muy-largo-que-necesita-ser-acortado"
                                value={longURL}
                                onChange={(e) => setLongURL(e.target.value)}
                                className="h-12 text-base border-2 border-gray-200 dark:border-gray-600 focus:border-blue-500 transition-colors"
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                            {isLoading ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Acortando...
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    Acortar URL
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            )}
                        </Button>
                    </form>
                </CardContent>

            </Card>
            {shortURL ?
                <ShortURLCard longURL={longURL} shortURL={shortURL} isCopiedUrl={isCopiedUrl} handleCopyToClipboard={handleCopyToClipboard} /> : <div className="text-center py-12 max-md:py-2">
                    <div className="flex justify-center items-center gap-5 mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg">
                            <Scissors className="w-8 h-8 text-white" />
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full flex items-center justify-center">
                            <Link2 className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                        ¿Listo para acortar tu primera URL?
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        Pega cualquier enlace en el campo de arriba y obtén una versión compacta
                    </p>
                </div>
            }
            <Toaster position="bottom-right" />
        </>
    )
}