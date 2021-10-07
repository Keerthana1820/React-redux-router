import React, { Component } from "react";
import Demo from '../../mock/AppMock';

class DropDown extends Component {
    handleDropdownChange(event) {   
        this.props.handleOnChange(event.target.value);  
    }
    render() {
     const dropdownvalues  = this.props.dropdownvalues    
        return (           
              <select class="browser-default custom-select" onChange={(event) => this.handleDropdownChange(event)} >
          {
               dropdownvalues.map(post => {                            
               return <option>
                {post.ability.name}
              </option> })                                      
            }                  
                </select>
         )}}
DropDown.defaultProps = { Content: Demo }
export default DropDown;
