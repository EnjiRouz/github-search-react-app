import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import {GithubContext} from "../context/github/githubContext";
import {Repos} from "../components/Repos";

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
    const urlName = match.params.name;

    useEffect(() => {
        getUser(urlName);
        getRepos(urlName);
        // eslint-disable-next-line
    }, []);

    if (loading) return <p className="text-center">Loading...</p>;

    const {
        name, company, avatar_url, location, bio, blog, login, html_url,
        followers, following, public_repos, public_gists
    } = user;

    return (
        <>
            <Link to="/" className="btn btn-link">Home</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">

                        <div className="col-sm-4 text-center">
                            <img className="rounded mx-auto d-block" src={avatar_url} alt={name}
                                 style={{width: "190px"}}/>
                        </div>

                        <div className="col">
                                <h3>{name}</h3>
                                {bio && <p style={{marginTop: ".5em", marginBottom: ".5em"}}>{bio}</p>}

                                <div className="d-flex justify-content-start py-1">
                                    <span className="badge bg-primary me-2">Followers: {followers}</span>
                                    <span className="badge bg-dark me-2">Follows: {following}</span>
                                    <span className="badge bg-primary me-2">Repositories: {public_repos}</span>
                                    <span className="badge bg-dark me-2">Gists: {public_gists}</span>
                                </div>

                                <ul className="px-1" style={{listStyle: "none"}}>
                                    {login && <li><strong>Username: </strong>{login}</li>}
                                    {company && <li><strong>Company: </strong>{company}</li>}
                                    {location && <li><strong>Location: </strong>{location}</li>}
                                    {blog && <li>
                                        <strong>Website: </strong>
                                        <a href={html_url} target="_blank" rel="noreferrer">{blog}</a>
                                    </li>}
                                </ul>
                        </div>

                        <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-dark mb-4">Open profile</a>

                        <Repos repos={repos}/>

                    </div>
                </div>
            </div>
        </>
    );
};
