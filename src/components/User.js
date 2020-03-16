import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function User ({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <div className="container">
            <h5>Loading</h5>
        </div>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div className="container">


            <table className="table">
                <thead>
                <tr>
                    <th>NO</th>
                    <th>List All User</th>

                </tr>
                </thead>
                {userData &&
                userData.users &&
                userData.users.map((users,i )=>
                    <tbody>
                    <tr>
                        <td>{i}</td>
                        <td>{users.name}</td>

                    </tr>
                    </tbody>

                )}
            </table>


        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
