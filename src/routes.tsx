import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const {Navigator, Screen} = createStackNavigator()

import OrphanageMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OrphanageDetails'
import SelectMapPosition from './pages/CreateOprhanage/SelectMapPosition'
import OrphanageData from './pages/CreateOprhanage/OrphanageData'
import Header from './components/Header'

export default function Routes() {
  return (
   <NavigationContainer>
      <Navigator screenOptions={{headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' }}}>
        <Screen component={OrphanageMap} name='OrphanagesMap'  />
        <Screen 
          component={OrphanageDetails} 
          name="OrphanageDetails"
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title="Orfanato" />
          }}
          />

        <Screen 
          component={SelectMapPosition} 
          name="SelectMapPosition"
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no Mapa" />
          }}
           />
        <Screen 
          component={OrphanageData} 
          name="OrphanageData"
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />
        }}
        />

      </Navigator>
   </NavigationContainer>
  )
}