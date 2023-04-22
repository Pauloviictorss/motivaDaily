import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function App(){
  const [img, setImg] = useState(require('./src/brokenLamp.png'))
  const [frase, setFrase] = useState('Clique em "Gerar frase diária" para receber sua dose de motivação!')

  let frases = [
    'Siga os bons e aprenda o máximo com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ]

  function quebraLampada(){
    let randomNumber = Math.floor(Math.random() * frases.length)

    setFrase('"' + frases[randomNumber] + '"')
    setImg(require('./src/lamp.png'))
  }

  function restartLampada(){
    setFrase('Clique em "Gerar frase diária" para receber sua dose de motivação!')
    setImg(require('./src/brokenLamp.png'))
  }

  return(
    <View style={styles.container}>

      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.texto}>{frase}</Text>

      <View>
        <TouchableOpacity style={styles.botao} onPress={ quebraLampada }>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Gerar frase diária</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#191919'}]} onPress={ restartLampada }>
          <View style={styles.btnArea}>
            <Text style={[styles.btnTexto, {color: '#191919'}]}>Reiniciar Lâmpada</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(240, 240, 240)'
  },
  img:{
    height: 230,
    width: 230,
  },
  texto:{
    fontSize: 20,
    color: '#FF6364',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#FF6364',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6364'
  }
})

export default App;