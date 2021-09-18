import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = props => {
    const [value, setValue] = useState("");
    const alert = useContext(AlertContext);
    const github = useContext(GithubContext);

    const onSubmit = event => {
        if (event.key !== "Enter") return;
        github.clearUsers();

        let searchQuery = value.trim();
        if (searchQuery) {
            alert.hide();
            github.search(searchQuery);
        } else
            alert.show("Enter username to search for");
    };

    return (
        <div className="form-group pb-4">
            <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    );
};
