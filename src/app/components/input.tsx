"use client";
import { FormEvent, useRef, useState } from "react"
import toast, { Toaster } from "react-hot-toast";

export default function Input() {
    const [longURL, setLongLink] = useState("");
    const [shortURL, setShortURL] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const linkRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*(\?[\w@&=.;%-]+)?\/?$/;
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    const handleOnChange = (url: string) => {
        setLongLink(url);
    }

    const errorNotify = () => toast.error("Invalid URL");
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
                })
        } catch (error) {
            console.log(error);
        }
    };

    const shortURLRef = useRef<HTMLInputElement>(null);
    const successNotify = () => toast.success("Copied to clipboard.");
    const handleCopyToClipboard = () => {
        const shortURLText: string = shortURLRef.current?.textContent || "";
        navigator.clipboard.writeText(shortURLText);
        successNotify();
    }

    return (
        <div>
            <form id="formBox" className="mt-32 bg-neutral-700 bg-opacity-70 rounded-xl px-5 py-6 shadow-xl" onSubmit={(e) => handleSubmit(e)}>
                <label className="text-white font-medium text-xl">Paste the long url below</label>
                <div className="flex flex-col gap-10 mt-3">
                    <div className="flex flex-col gap-7 items-center relative">
                        <input type="search" onChange={(e) => handleOnChange(e.target.value)} value={longURL} id="default-search" className="block w-full p-3 ps-5 text-sm text-gray-900 border border-gray-300 rounded-full dark:bg-neutral-900 focus:border-blue-600 dark:border-gray-400 dark:placeholder-gray-400 shadow-sm dark:text-white" placeholder="Example: https://google.es" />
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 transition duration-200 dark:focus:ring-blue-800 w-6/12 shadow-lg">Shorten url</button>
                    </div>
                    <div className="flex items-center gap-5 justify-evenly">
                        {
                            isLoading ?
                                <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
                                :
                                shortURL ?
                                    <div className="flex flex-wrap items-center w-full gap-4">
                                        <span className="text-lg text-nowrap text-white font-semibold">Short URL:</span>
                                        <a target="_blank" className="flex justify-center truncate items-center gap-3 text-gray-600 bg-white rounded-lg px-3 py-2 hover:underline font-semibold shadow-lg" href={`${BASE_URL}/${shortURL}`}>
                                            <span className="text-nowrap truncate" ref={shortURLRef}>{BASE_URL}{shortURL}</span>
                                            <span className="material-symbols-outlined scale-75">
                                                open_in_new
                                            </span>
                                        </a>
                                        <button onClick={handleCopyToClipboard} type="button" className="bg-neutral-900 hover:bg-neutral-800 transition duration-200 gap-2 px-3 py-2 ring-1 ring-neutral-800 focus:ring-gray-200 rounded-lg flex items-center shadow-lg">
                                            <span className="text-sm">Copy</span>
                                            <span className="material-symbols-outlined scale-75">
                                                content_copy
                                            </span>
                                        </button>
                                    </div>
                                    : null
                        }
                    </div>
                </div>
            </form>
            <Toaster position="bottom-right" />
        </div>
    )
}