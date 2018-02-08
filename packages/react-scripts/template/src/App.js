import React, { Component } from 'react'

import { AppBar, SearchBar } from 'copart-components'
import logo from './logo.svg'
import './App.css'

var configCobalt = {
  type: 'cobalt',
  config: ['flag', 'role', 'yard'],
  isLoggedOn: true,
  countryCode: 'de',
  yardNumber: 5001,
  role: 'Germany Executive',
  showSearchBar: false,
  moduleName: 'Cobalt Portal'
}

var configCAS = {
  type: 'cas',
  config: ['flag', 'yard', 'phone'],
  isLoggedOn: true,
  countryCode: 'us',
  yardNumber: 12,
  phoneNumber: 7834873587,
  showSearchBar: false,
  moduleName: 'CAS Portal'
}

var logoutItems = [
  {
    key: 'userName',
    name: 'Sidharth Mehra'
  },
  {
    key: 'settings',
    name: 'Settings'
  },
  {
    key: 'logout',
    name: 'Logout'
  }
]

var searchTypes = [
  { key: 'lot', name: 'Lot' },
  { key: 'seller', name: 'Seller' },
  { key: 'owner', name: 'Owner' },
  { key: 'seller-personnel', name: 'Seller Personnel' },
  { key: 'facility', name: 'Facility' },
  { key: 'location', name: 'Location' },
  { key: 'buyer', name: 'Buyer' }
]

class App extends Component {
  render() {
    return (
      <div style={{ margin: '-17px' }}>
        <AppBar
          {...configCobalt}
          onLogoutItemClicked={(event, item) => console.log(item)}
          logoutItems={logoutItems}
          onFeedbackClick={() => console.log('Feedback clicked')}
          onRenderSearchBar={() => (
            <SearchBar
              searchType={{ key: 'lot', name: 'Lot' }}
              searchTypes={searchTypes}
              borderless
              searchText="Default Search Text"
              handleSearch={() => console.log('Search Clicked')}
              showCheckbox={false}
            />
          )}
        />
      </div>
    )
  }
}

export default App
