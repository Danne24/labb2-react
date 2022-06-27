import React from 'react'
import { useState, useEffect } from "react";

export default function Portfolio() {
    const [name, setName] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/Danne24/repos')
            .then(res => res.json())
            .then(data => {
                setName((prevname) => [
                    ...prevname,
                    {
                        name: data[0].name,
                        html_url: data[0].html_url
                    },
                    {
                        name: data[1].name,
                        html_url: data[1].html_url
                    },
                    {
                        name: data[2].name,
                        html_url: data[2].html_url
                    },
                    {
                        name: data[3].name,
                        html_url: data[3].html_url
                    },
                    {
                        name: data[4].name,
                        html_url: data[4].html_url
                    },
                    {
                        name: data[5].name,
                        html_url: data[5].html_url
                    },
                    {
                        name: data[6].name,
                        html_url: data[6].html_url
                    },
                    {
                        name: data[7].name,
                        html_url: data[7].html_url
                    },
                    {
                        name: data[8].name,
                        html_url: data[8].html_url
                    },
                    {
                        name: data[9].name,
                        html_url: data[9].html_url
                    }
                ]);
            });
    }, []);

    return (
        <div>
            <h1>My Portfolio</h1>
            <main>
                <h2>These are some of my projects on GitHub.</h2>
                {name.map((names) => (
                    <>
                        <h3>
                            {names.name}
                        </h3>
                        <p><a href={names.html_url}>{names.html_url}</a></p>
                    </>
                ))
                }
            </main>
        </div>
    )
}