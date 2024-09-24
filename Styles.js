import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  todoListContainer: {
    alignItems: 'center', // Keskittää sisällön vaakasuunnassa
    marginBottom: 10, // Lisää alareunan marginaalia (halutessasi)
  },

  todoListText: {
    fontSize: 28, // Muokkaa fonttikokoa haluamaksesi
    fontWeight: 'bold', // Muokkaa fonttipainoa (halutessasi)
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
    textInput: {
    // Olemassa olevat tyylit
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  textInputContainer: {
    // Uusi tyyli laatikolle
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
  },

  button: {
    backgroundColor: 'blue',
    padding: 10, // Lisää tilaa painikkeen sisällä
    borderRadius: 5,
    //borderWidth: 0, // Poistaa reunuksen
  },
  buttonSaveData: {
    backgroundColor: 'blue',
    borderWidth: 0, // Poistaa reunuksen
    padding: 5, // Poistaa sisäisen täytteen
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDeleteData: {
    /*
    backgroundColor: 'blue',
    borderWidth: 0, // Poistaa reunuksen
    padding: 5, // Poistaa sisäisen täytteen
    alignItems: 'center',
    justifyContent: 'center',*/
        width: 20,
        height: 20,
        borderRadius: 5, // pyöristää kulmat
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red', // muuta taustaväriä halutessasi
  },
  buttonAddData: {
    backgroundColor: 'blue',
    borderWidth: 0, // Poistaa reunuksen
    padding: 5, // Poistaa sisäisen täytteen
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  /*
  buttonClose: {
    backgroundColor: 'transparent',
    borderWidth: 0, // Poistaa reunuksen
    padding: 0, // Poistaa sisäisen täytteen
  },
  */
  textStyle: {
    color: 'black',
    //fontWeight: 'bold',
    textAlign: 'center',
  },

  taskItem: {
    flexDirection: 'row',
    alignItems: 'center', // Keskittää elementit pystysuunnassa
    // ... muut tyylit
     marginTop: 20, // Lisää 20 pikselin ylämarginaali
  },

});