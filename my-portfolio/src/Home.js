import { useState, useEffect } from 'react';

const Home = () => {
    const [repos, setRepos] = useState(null);
    const [bio, setBio] = useState("");
    const [accImage, setAccImage] = useState("");
    const [accountLink, setAccountLink] = useState("");
    const [isProfilePending, setIsProfilePending] = useState(true);
    const [isReposPending, setIsReposPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        // fetching github properties
        fetch("https://api.github.com/users/Lorenzo-Melotto", { signal: abortCont.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error("Could not fetch data from github");
                }
                return res.json()
            })
            .then((data) => {
                setAccImage(data.avatar_url);
                setBio(data.bio);
                setIsProfilePending(false);
                setAccountLink(data.html_url);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log("Fetch aborted");
                } else {
                    setError(err.message);
                    setIsProfilePending(false);
                }
            });

        // fetching repositories
        fetch("https://api.github.com/users/Lorenzo-Melotto/repos", { signal: abortCont.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error("Could not fetch repositories from github");
                }
                return res.json();
            }).then((data) => {
                setRepos(data);
                setIsReposPending(false);
            }).catch((err) => {
                if (err.name === 'AbortError') {
                    console.log("Fetch aborted");
                } else {
                    setError(err.message);
                    setIsReposPending(false);
                }
            });
    }, [])

    return (
        <div className="home">
            <h1>Home</h1>
            {error && <h2>Error: {error}</h2>}
            {isProfilePending && <p>Loading github profile...</p>}
            {bio
                &&
                <div>
                    {accImage && <img className="usr-image" src={accImage} alt="Github profile avatar" />}
                    <p className="bio">{bio}</p>
                </div>}
            {accountLink && <p className="github-link">My github: <a className="link" href={accountLink} target="_blank" rel="noreferrer">gituhub profile</a></p>}
            {isReposPending && <p>Loading repos...</p>}
            {repos && <p>Listed below you can find my public repositories:</p>}
            <ul>
                {repos && repos.slice(1).map((repo) => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noreferrer">
                            <div className="repo">
                                <p className="repo-name">{repo.name}</p>
                                <p>{repo.description}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;