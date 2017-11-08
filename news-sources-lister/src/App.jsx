import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SelectBox from './selectBox.jsx';
import axios from 'axios';
import * as _ from 'lodash';

class NewsSourcesLister extends Component{
  constructor(props){
    super(props);

    this.state = {
      // array of objects
      sources: [],
      selectValue: '',
    }
  }

  fetchNewsSources = () => {
    return axios.get('https://newsapi.org/v1/sources?language=en');
  }

  fetchSourceCategories = () => {
    return _.uniq(_.map(this.state.sources, 'category'));
  }

  filterSourcesByCategory = (category) => {
    return _.filter(this.state.sources, {category: category});
  }

  constructCategorySelectOptions = (categories) => {
    const categoriesSelectOptions = {};
    categories.map(category => categoriesSelectOptions[category] = category);

    return _.merge({'Select Source Category': 'Select Source Category'}, categoriesSelectOptions);
  }

  async componentDidMount(){
    const newsSourcesReponseData = await this.fetchNewsSources();

    this.setState({
      sources: newsSourcesReponseData.data['sources'],
    });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const targetName = target.name;
    const targetType = target.type;

    const targetValue = target.type !== 'checkbox' ? target.value : target.checked;

    this.setState({
      [targetName]: targetValue,
    })
  };

  render(){
    const sourceCategories = this.fetchSourceCategories();
    const newsSources = this.state.selectValue.length == 0 ? this.state.sources : this.filterSourcesByCategory(this.state.selectValue);

    return(
      <div>
        <SelectBox
          selectOptions={this.constructCategorySelectOptions(sourceCategories)}
          selectedValue={this.state.selectValue}
          onInputChange={this.handleInputChange}
        />
        <br/>
        <br/>
        <br/>

        {
          newsSources.map(source => {
            return (
              <div key={source.url}>
                <a href={source.url} target='_blank'>{source.name}</a>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default NewsSourcesLister;
