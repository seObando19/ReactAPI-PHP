import React, { Component } from 'react';

import { StyleSheet, TextInput, View, Alert, TouchableOpacity, Text } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  registration_Function = () => {
    if(this.state.name !="" && this.state.email !="" && this.state.password !=""){
      const url = 'http://192.168.137.142/apiphpreactnative/Registration_api.php'
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',

          //ERROR AQUI REVISAR
        },
        body: JSON.stringify({

          user_name: this.state.name,

          user_email: this.state.email,

          user_password: this.state.password

        })

      }).then((response) => response.json())
        .then((responseJson) => {
          // Showing response message coming from server after inserting records.
          alert(responseJson);
        }).catch((error) => {
          console.error(error);
        });
  }
  else{
    alert('Debe ingresar todos los datos!');
  }
}

  render() {
    return (

      <View style={styles.MainContainer}>

        <Text style={{ fontSize: 20, color: "#DD2C00", textAlign: 'center', marginBottom: 15 }}>Registro de Usuario</Text>

        <TextInput
          placeholder="Ingrese nombre de usuario"
          onChangeText={data => this.setState({ name: data })}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Ingrese correo electr�nico"
          onChangeText={data => this.setState({ email: data })}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Ingrese contrase�a"
          onChangeText={data => this.setState({ password: data })}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={this.registration_Function} >

          <Text style={styles.text}>Clic aqu� para resgistrarse</Text>

        </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10
  },

  TextInputStyleClass: {

    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: '#DD2C00',
    borderRadius: 5,
  },

  button: {

    width: '80%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#DD2C00',
    borderRadius: 3,
    marginTop: 20
  },

  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  }

});