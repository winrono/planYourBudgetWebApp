import React, {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';
import {WEBAPI_URL} from '../constants/constants'

export default class SignIn extends Component {

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context)
        this.state = {
            uuid: "",
            password: ""
        }
    }

    async onAuthorize() {
        let result = await fetch(WEBAPI_URL + "user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"uuid": this.state.uuid, "password": this.state.password})
        });
        if (result.ok) {
            this
                .context
                .router
                .history
                .push('/app/expenses');
        } else {
            alert('please recheck your login and password');
        }
    }

    render() {
        return (
            <Paper style={{
                padding: '20px'
            }}>
                <div>
                    <TextField
                        floatingLabelText="Login"
                        value={this.state.uuid}
                        onChange={(evt) => this.setState({uuid: evt.target.value})}/>
                </div>
                <div>
                    <TextField
                        floatingLabelText="Password"
                        value={this.state.password}
                        onChange={(evt) => this.setState({password: evt.target.value})}/>
                </div>
                <RaisedButton
                    fullWidth
                    label="Sign in"
                    primary
                    onClick={() => this.onAuthorize()}/>
            </Paper>
        )
    }
}