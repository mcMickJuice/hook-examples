import React from 'react'
import userSearchHoc from './UserSearchHoc'

class UserSearchWithHoc extends React.Component {
	state = {
		searchTerm: ''
	}

	handleSearchChange = evt => {
		this.setState({
			searchTerm: evt.currentTarget.value
		})
	}

	handleSearchSubmit = evt => {
		const { searchTerm } = this.state
		evt.preventDefault()

		this.props.onSearch(searchTerm)
	}

	render() {
		const { isLoading, errorMessage, searchResult } = this.props
		const { searchTerm } = this.state
		return (
			<div>
				<h2>Search Form with HOC</h2>
				<div>
					<form onSubmit={this.handleSearchSubmit}>
						<div>
							<label htmlFor="user-id">User ID</label>
							<input
								type="text"
								value={searchTerm}
								onChange={this.handleSearchChange}
							/>
							<button
								disabled={searchTerm.length === 0}
								onClick={this.handleSearchSubmit}
							>
								Search
							</button>
						</div>
					</form>
					<div>
						{isLoading ? <div>Loading...</div> : null}
						{errorMessage != null ? (
							<div>
								Error searching for {searchTerm}: {errorMessage}
							</div>
						) : null}
						{searchResult != null ? (
							<div>
								<h2>User Info</h2>
								<div>
									{searchResult.firstName} {searchResult.lastName}
								</div>
								<div>{searchResult.email}</div>
							</div>
						) : null}
					</div>
				</div>
			</div>
		)
	}
}

export default userSearchHoc(UserSearchWithHoc)
