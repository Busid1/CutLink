"use client";
import { FormEvent, useState } from "react"

export default function Input() {
    const [longURL, setLongLink] = useState("");
    const [shortURL, setShortURL] = useState("");
    const [error, setError] = useState("");
    const linkRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    const baseURL = "http://localhost:3000/"

    const handleOnChange = (url: string) => {
        setLongLink(url);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!linkRegex.test(longURL)) {
            setError("Invalid URL");
            return;
        } else {
            setError("");
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
                setShortURL(data.shortURL);
            })
    };

    const handleResponse = () => {
        if (error) {
            return error;
        }
        else if (shortURL) {
            return
        }
        return `${baseURL}/${shortURL}`;
    }

    return (
        <form className="max-w-md mx-auto mt-32" onSubmit={(e) => handleSubmit(e)}>
            <label className="text-white font-medium text-lg">Paste below the long url</label>
            <div className="flex flex-col gap-7 mt-2">
                <div className="flex flex-col gap-7 items-center">
                    <input type="search" onChange={(e) => handleOnChange(e.target.value)} value={longURL} id="default-search" className="block w-full p-4 ps-5 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Example: https://google.es" />
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-7/12">Shorten link</button>
                </div>
                <div className="flex gap-2 items-end">
                    <span className="text-lg">Short URL:</span>
                    {handleResponse() ?
                        <p className="text-red-600 p-0 m-0">{error}</p>
                        :
                        <div className="">
                            <a target="_blank" className="text-green-600 text-lg font-semibold" href={`${baseURL}/${shortURL}`}>{baseURL}{shortURL}</a>
                            <span></span>
                        </div>
                    }
                </div>
            </div>
        </form>
    )
}