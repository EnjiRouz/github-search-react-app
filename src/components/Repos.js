import React from "react";

export const Repos = ({repos}) => {
    return (
        <div className="row row-cols-3">
            {repos.map((repo) => {
                return <div className="card mx-1 mb-2" key={repo.id} style={{width: "32%"}}>
                    <div className="card-body">
                        <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                    </div>
                </div>
            })}
        </div>
    );
};
