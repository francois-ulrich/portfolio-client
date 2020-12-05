import React, { Component } from 'react'

// Apollo
import apolloClient from '../apollo/apolloClient';

// App
import {GET_CATS} from '../apollo/queries';
import {SUBMIT_CAT} from '../apollo/mutations';

export class FormCatAdd extends Component {
    state = {
        name: "",
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {
            name
        } = this.state;

        await apolloClient.mutate({
            variables: { name },
            mutation: SUBMIT_CAT,
            awaitRefetchQueries: true,

            refetchQueries: () => [{
                query: GET_CATS,
            }]
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return(
            <div>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor="name">Cat name: </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />

                    <button type="submit">Add Cat</button>
                </form>
            </div>
        )
    };
}

export default FormCatAdd