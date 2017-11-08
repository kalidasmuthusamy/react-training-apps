import React, {Component} from 'react';
import TextBox from './textBox.jsx';
import Button from './button.jsx';
import List from './list.jsx';
import ListItem from './listItem.jsx';
import PropTypes from 'prop-types';
import axios from 'axios';
import {chain} from 'lodash';

class FilteredList extends Component {
  repoNamesWithSearchKey = (repoName) => {
    return (repoName.toLowerCase().indexOf(this.props.searchKey.toLowerCase()) != -1);
  }

  highlightRepoNameWithSearchKey = (repoName) => {
    return repoName.replace(new RegExp(this.props.searchKey, 'i'), (replaceableRepoName) => {
      return `<span class='highlight'>${replaceableRepoName}</span>`
    });
  }

  filterRepoNames = (repoNames) => {
    const searchKey = this.props.searchKey;
    if (searchKey == ''){
      return repoNames;
    }

    return chain(repoNames)
      .filter(this.repoNamesWithSearchKey)
      .map(this.highlightRepoNameWithSearchKey)
      .value();
  }

  render(){
    const repoNames = this.props.repoNames;
    const filteredRepoNames = this.filterRepoNames(repoNames);

    return (
      <List listValues={filteredRepoNames} />
    );
  }
}

class GithubRepoFetcher extends Component{
  constructor(props){
    super(props);

    this.state = {
      userName: '',
      repoNames: [],
      searchText: '',
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const targetName = target.name;
    const targetType = target.type;

    const targetValue = target.type !== 'checkbox' ? target.value : target.checked;

    this.setState({
      [targetName]: targetValue,
    })
  }

  fetchRepos = (userName) => {
    return axios.get(`https://api.github.com/users/${userName}/repos`);
  }

  handleSubmit = async () => {
    const userName = this.state.userName;

    try{
      const response = await this.fetchRepos(userName);

      const repoNames = response.data.map(repo => repo.name);
      if (repoNames.length == 0){
        alert('No repos found for this user');
      }
      this.setState({
        repoNames,
      });
    }

    catch(e){
      alert(e);
    }
  }

  clearUserNameAndRepo = () => {
    this.setState({
      userName: '',
      repoNames: [],
      searchText: '',
    });
  }

  clearSearchText = () => {
    this.setState({
      searchText: '',
    });
  }

  render(){
    return(
      <div>
        <div>
          <TextBox
            textValue={this.state.userName}
            onInputChange={this.handleInputChange}
            inputName={'userName'}
          />
          <Button onClick={this.handleSubmit} value='Fetch' />
          <Button onClick={this.clearUserNameAndRepo} value='Clear' />
        </div>

        <div>
          <TextBox
            textValue={this.state.searchText}
            onInputChange={this.handleInputChange}
            inputName={'searchText'}
          />
          <Button onClick={this.clearSearchText} value='Clear' />
        </div>

        <FilteredList repoNames={this.state.repoNames} searchKey={this.state.searchText} />
    </div>
    );
  }
}

FilteredList.defaultProps = {
  repoNames: [],
  searchKey: '',
};

FilteredList.propTypes = {
  repoNames: PropTypes.array,
  searchKey: PropTypes.string,
};

export default GithubRepoFetcher;
